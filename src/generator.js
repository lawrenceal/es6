{
    function* helloWorldGenerator(){
        yield "hello";
        yield "world";
        return "ending";
    }

    let iterator = helloWorldGenerator();

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    for(let i of helloWorldGenerator()){
        console.log(i);
    }

    let obj = {

        * [Symbol.iterator]() {
            yield 1;
            yield 2;
            yield 3;
        }
    };

    console.log([...obj]);

    console.log(iterator[Symbol.iterator]() === iterator); //true
}

{
    console.group("next");

    function* yoo(x){
        let y = 2 * (yield x + 1);
        let z = yield (y / 3);
        return x + y + z;
    }

    let iterator1 = yoo(5);

    console.log(iterator1.next());
    console.log(iterator1.next());
    console.log(iterator1.next());

    let iterator2 = yoo(5);

    console.log(iterator2.next());
    console.log(iterator2.next(6));
    console.log(iterator2.next(1));// y: 12 z: 1 x: 5

    console.groupEnd();
}

{
    console.group("for of");

    function* foo(){
        yield 1;
        yield 2;
        return 3;
    }

    for(let item of foo()){// 1 ,2 TODO 没有3 为true停止且不包含
        console.log(item);
    }

    function* fibonacci() {
        let [prev, curr] = [0, 1];
        while (curr < Number.MAX_VALUE){ //TODO 避免无限循环
            [prev, curr] = [curr, prev + curr];
            yield curr;
        }
    }

    for(let val2 of fibonacci()){
        if(val2 > 30){ break ;}
        console.log(val2);
    }


    let [prev, curr] = [3, 4];

    let x = curr;
    curr = prev + curr;
    prev = x;

    //[prev, curr] = [curr, prev + curr];  //4 , 7

    console.log(prev);
    console.log(curr);

    console.groupEnd();
}

{
    console.group("throw()");

    let g = function* (){
        try{
            yield 1;
        }catch (error){
            console.log('inner error ' + error);
        }
    };

    let i = g();
    i.next();

    try{
        i.throw('a');
        i.throw('b'); //TODO 被外部捕获 如果Generator函数没有try catch代码块，那么也会被外部捕获
    }catch (error){
        console.log('outer error ' + error);
    }

    let gen = function* (){

        try{ //TODO 没有捕获后面代码将不会执行
            yield console.log('a');
        }catch (error){
            console.log("error a " + error);
        }

        try {
            yield console.log('b');
        }catch (error){
            console.log("error b " + error);
        }

        yield console.log('c');
    };

    let it = gen();

    it.next();

    it.throw('b'); //TODO throw方法被捕获后，会附带执行下一次的next方法

    it.next();

    let generator = function* (){
        yield 1;
        console.log("第一次调用了？");
        throw new Error("报错了！"); //TODO 无论是在generator里面还是通过 generator throw 抛出错误，generator没有捕获，下面 {value: undefined, done: true}
        yield 2;
        yield 3;
    };

    let iterator = generator();

    console.log(iterator.next());
    try{
        iterator.throw("iterator throw");
    }catch (error){
        console.log(error);
    }
    console.log(iterator.next());

    console.groupEnd();
}

{
    console.group("return()");
    function* gen(){
        yield 1;
        yield 2;
    }

    let i = gen();
    console.log(i.return(3));
    console.log(i.next());

    function* g(){
        yield 1;
        try{
            yield 2;
            yield 3;
        }finally {
            yield 4;
        }
        yield 6;
    }
    let it = g();
    console.log(it.next());
    console.log(it.next());
    console.log(it.return(7));//{value: 4, done: false}
    console.log(it.next());//Object {value: 7, done: true}
    console.log(it.next());

    console.groupEnd();
}

{
    console.group("yield* 语句");

    function* baz(){
        yield 'a';
        yield 'b';
    }

    function* bar(){
        yield 'c';
        yield* baz();
    }

    for(let i of bar()){
        console.log(i);
    }

    function* gen(){
        yield* ['a', 'b'];
        yield* "hi";
    }

    for(let item of gen()){
        console.log(item);
    }

    function* ge(){
        yield 2;
        return "ge";
    }

    function* foo(){
        yield 1;
        let v = yield* ge();
        console.log(v);
    }
    let iterator = foo();
    console.log(iterator.next());
    console.log(iterator.next());
    iterator.next();

    function* test(){
        console.log("11");
        yield console.log("21");
    }

    let testIte = test();
    testIte.next();


    let arr = ['a', ['b','c',['d']],'e',['f',['j']]];
    function* iteTree(tree){
        if(Array.isArray(tree)){
            for(let i of tree){
                yield* iteTree(i);
            }
        }else{
            yield tree;
        }
    }
    for(let item of iteTree(arr)){
        console.log(item);
    }

    console.groupEnd();
}

{
    console.group("this");

    function* gen(name, age){
        yield this.name = name;
        yield this.age = age;
    }

    let iterator = gen.call(gen.prototype, "lawrence", 25);

    console.log(iterator.next());
    console.log(iterator.name);
    console.log(iterator.age);
    console.log(iterator.next());
    console.log(iterator.age);

    console.groupEnd();
}

{
    console.group("generator 应用");
    //异步操作的同步化表达

    //控制流管理

    function step(value){
        return value + 1;
    }

    function* runningTask(value){
        let value1 = yield step(value);
        let value2 = yield step(value1);
        let value3 = yield step(value2);
        let value4 = yield step(value3);
        return value4;
    }

    let iterator = runningTask(1);
    let task = iterator.next();
    while (!task.done){
        task = iterator.next(task.value);
    }
    console.log(task.value);

    function schedule(iterator){//TODO 借助iterator对象传递参数
        let task = iterator.next(iterator.value);
        if(!task.done){
            iterator.value = task.value;
            schedule(iterator);
        }else{
            console.log(task.value);
        }
    }
    schedule(runningTask(1));


    //部署iterator接口

    function* iteratorEntries(){
        let keys = Object.keys(this);
        for(key of keys){
            yield [key, this[key]];
        }
    }

    let obj = {
        hobby: "eat",
        love: "cat",
        [Symbol.iterator]: iteratorEntries
    };

    for(let [k, v] of obj){
        console.log(k + " = " + v);
    }

    //作为数据结构 TODO Array

    console.groupEnd();
}