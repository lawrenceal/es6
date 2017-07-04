{
    //promise generator

    function foo(data){
        return new Promise(resolve => {
            resolve(data + 1);
        });
    }

    function* gen(data){
        let value = yield foo(data);
        let value1 = yield foo(value);
        return value1 + 1;
    }

    function run(g, initial){
        let it = g(initial);

        function next(data){
            let result = it.next(data);
            if(result.done){
                console.log(result.value);
                return;
            }
            result.value.then(value => {
                    next(value);
                }).catch(error => {
                console.log(error);
            });
        }

        next();
    }

    run(gen, 1);


    //TODO  最爽的异步 async
    let asyncFun = async function(data){
        let value = await foo(data);
        let value1 = await foo(value);
        return value1 + 1;
    };
    asyncFun(1).then(value => { //TODO return Promise
        console.log(value);
    });


    async function f(){
        throw new Error('async inner error');
    }
    f().catch(error => {console.log(error)});


    async function fun(){
        try{
            await Promise.reject('reject error catch');
        }catch (error){

        }
        await Promise.resolve('success');
        //await Promise.reject('fun reject error ');
        return Promise.resolve('return success');
    }
    fun()
        .then(value => {console.log(value)})
        .catch(error => {console.log(error)});


    function timeOut(time){
        return new Promise(resolve => {
           setTimeout(resolve, time);
        });
    }
    async function asyneTimeOut(value, time){
        await timeOut(time);
        console.log(value);
    }
    asyneTimeOut("hello world", 1000);


    //TODO await后面的promise对象可能返回 reject 最好用在try catch中。

}

{
    //不存在继承关系，要同时触发。

    function baz(){
        return new Promise(resolve =>{
            resolve('baz');
        })
    }

    function bar(){
        return new Promise(resolve =>{
            resolve('bar');
        })
    }

    async function asyncFun(){
        let fun1 = baz(),
            fun2 = bar(),
            result = [];
        result.push(await fun1);
        result.push(await fun2);
        return result;
    }

    asyncFun().then(value => {
        console.log(value);
    });
}

