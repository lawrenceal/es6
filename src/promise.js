{
    let promise = new Promise((resolve, reject) => {//TODO 立即执行
        console.log("初始化了");
        setTimeout(() => {resolve("hello world")}, 1000);
    });

    promise.then(value => {
        console.log(value);
    });

    let getJSON = (url) => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4){
                    let status = xhr.status;
                    if(status >= 200 && status <= 300 || status == 302){
                        resolve(xhr.responseText);
                    }else{
                        reject(new Error(xhr.statusText));
                    }
                }
            };
            xhr.responseType = "json";
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send(null);
        });
    };

   /* let p1 = new Promise((resolve, reject) => {
       setTimeout(() => {reject(new Error("p1 error"))}, 1000);
    });

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve(p1)}, 1000);
    });

    p2.then(value => {console.log(value)}).catch(value => {console.log(value)});*/

}

{
    console.group("then catch");

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("p1 value")}, 3000);
    });

    let p2 = new Promise((resolve, reject) => {
        resolve("p2 value");
    });

    p2.then((value) => {
        console.log(value);
        return "p2 return value"; //return p1;  TODO 会将返回结果作为参数，传入后一个回调函数
    }).then((p) => {
        console.log(p);
    });

    let p3 = new Promise((resolve, reject) => {
        resolve("p3");
        //x = x + 1; //chrome会显示内部抛出的错误
        throw new Error("error"); //TODO == reject(); 并且不会执行了
    });

    p3.then((value) => {
        console.log(value);
        //throw new Error("then error"); //TODO 抛出的错误会显示在"外边"
    }).catch((error) => {console.log(error)});

    let p4 = new Promise((resolve, reject) => {
        resolve('p4');
        //setTimeout(() => { throw new Error('task promise inner error'); }, 1000); //TODO
    } );

    p4.then((value) => {
        console.log(value);
    });

    console.groupEnd();
}

{
    console.group("all race resolve() reject()");
    //TODO promise.all() 参数可以是具有Iterator接口，且返回的每个成员都是Promise实例（如果不是，自动调用resolve转换） e.g. Array

    let thenable = {
        then: function(){
            console.log('this is thenable');
        }
    };
    Promise.resolve(thenable);//立即执行then方法

    let p = Promise.resolve("lawrence");
    p.then((value) => {
        console.log(value + " resolved");
    });

    let p1 = Promise.resolve();
    p1.then(() => {
        console.log("resolved");
    });

    console.groupEnd();
}

{
    console.group("promise 应用");

    //加载图片
    const preloadImg = (path) => {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.onload = resolve;
            image.onerror = reject;
            image.src = path;
        });
    };


    function foo(val){
        return new Promise((resolve) => {
            resolve(val + 1);
        });
    }

    function* gen(param){
        let val = yield foo(param);
        let val1 = yield foo(val);
        let val2 = yield foo(val1);
        return val2;
    }

    function run(g, value){
        let iterator = g(value);

        function go(obj){
            if(obj.done){
                console.log("end value " + obj.value);
                return;
            }
            obj.value.then((value) => {
                go(iterator.next(value));
            }).catch((value) => {
                console.log("error " + value);
            })
        }

        go(iterator.next());
    }
    run(gen, 1);

    console.groupEnd();
}