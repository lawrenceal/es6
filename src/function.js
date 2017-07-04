{
    //函数参数默认值

    function log(x, y){
        x = x || "hello";
        y = y || "world";
        console.log(x + " " + y);
    }

    log();
    log("hi", '');
    log("hi", false);//TODO typeof y === 'undefined'； y = 'world';

    function log6(x = "hello", y = "world"){
        console.log(x + " " + y);
    }
    log6("hi", false);
    log6("hi");
}

{
    //与解构赋值默认值结合使用
    function log({x, y = 'world'}){
        console.log(x + " " + y);
    }
    log({x: 'hello'});

    function fetch(url, {method = 'GET'} = {}){
        console.log(url + " " + method);
    }

    fetch("url");

    fetch("url",{method: 'POST'});


    //参数默认值的位置 TODO 尾部

    function get(a = 1, b, c){
        console.log(a + b + c);
    }

    //get(, 2);


    //函数的length属性 TODO 没有指定默认值的参数个数，必须在尾部
    console.log(get.length); //0
    console.log(fetch.length); //1
}

{
    console.group("作用域");
    //作用域
    let x = 1;

    function func(x , y = x){
        console.log("y = " + y);
    }
    func(2);

    function func1(y = x){
        try{
            console.log("x = " + x);
        }catch (error){
            console.log(error);
        }
        let x = 2;
        console.log("y = " + y); //1
    }
    func1();

    function func2(x = x){ //TODO  let x = x;
        console.log(x);
    }
    try {
        func2();
    }catch (error){
        console.log(error);
    }

    let foo = 'outer';
    function bar(func = x => foo){
        let foo = "inner";
        console.log(func());
    }
    bar();

    let foo1 = 'outer';
    function bar1(func1 = () => foo1){
        let foo1 = "inner";
        console.log(func1());
    }
    bar1();

    let z = 1;
    function fun3(a = z){ //TODO z作为已经声明的变量
        console.log(z); //1
        console.log(a); //1
    }
    fun3();

    let y = 1;
    function fun4(y){ //TODO 参数重新声明
        console.log(y);// undefined
    }
    fun4();


    //默认值应用
    function ajax(url = new Error('missing param', {})){

    }

    console.groupEnd();
}

{
    //函数的rest参数 获取函数多余的参数，搭配的变量是个数组 TODO rest参数后边不能再有其他的参数
    function sum(...arg){
        let result = 0;

        arg.forEach(item => {result += item});

        return result;
    }
    console.log(sum(1, 2, 3));

    function push(arr, ...items){
        items.forEach(item => arr.push(item));
    }

    let arr = [];

    push(arr, 1, 2, 3);
    console.log(arr);
}

{
    //扩展运算符 rest参数的逆运算，将一个数组转为用 TODO "逗号" ？ 分割的参数序列

    console.log(...[1, 2, 3]);
    console.log(...document.querySelectorAll('li'));
    console.log([...document.querySelectorAll('li')]);

    function add(x, y){
        return x + y;
    }
    console.log(add(...[1, 3]));// TODO 替代数组的apply将数组转为函数的参数

    let arr = [];
    arr.push(...[1, 2]);
    console.log(arr);

    console.log("Math.max(...[1, 2, 3]) = " + Math.max(...[1, 2, 3]));

    //将一个数组添加到另一个数组的尾部
    let arr1 = [1, 2, 3], arr2 = [4, 5, 6];

    console.log(arr1.concat(arr2)); //TODO 返回一个新数组

    Array.prototype.push.apply(arr1, arr2);
    console.log(arr1);

    arr1.push(...arr2);
    console.log(arr1);

}

(function () {
    'use strict';

    function add(x, y){
        console.log(this); //TODO null undefined  ==>  window  严格模式 null ==> null undefined ==> undefined
        return x + y;
    }

    add.apply(null, [1, 2]);

})();

{
    //扩展运算符的应用
    //合并数组

    let arr = [1, 2], arr1 = [2, 3], arr2 = [4, 5];
    console.log(arr.concat(arr1, arr2));
    console.log([...arr, ...arr1, ...arr2]);


    //与结构赋值结合
    let [a, ...b] = [1, 2, 3, 4];
    console.log(a);
    console.log(b);

    let [c, ...d] = [];
    console.log(c); //undefined
    console.log(d); //[]


    //字符串
    console.log([...'hello world']);
    console.log([...'𠮷𠮷𠮷'].length);

    let str = "abcba"; //32位Unicode字符
    console.log(str.split("").reverse().join(""));
    console.log([...str].reverse().join(""));


    //实现了Iterator接口的对象 TODO 转换为数组
    console.log([...document.querySelectorAll('li')]);
}

{
    //name属性
    let fun = function func(){

    };

    console.log(fun.name);

    console.log("new Function().name = " + new Function().name); //anonymous

    console.log("fun.bind({}).name = " + fun.bind({}).name);
}

{
    //箭头函数
    //"use strict";

    let func = () => 1;
    console.log(func());
    let func1 = (x, y) => x + y;
    console.log(func1(1, 2));
    let func2 = () => ({x: 1, y: 2});
    console.log(func2());
    let func3 = ([first, ...end]) => [first, end];
    console.log(func3([1, 2, 3]));

    //TODO 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
    //TODO 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。不可以使用yield命令，因此箭头函数不能用作Generator函数。

    function func4(){
        console.log(this); //TODO 和箭头函数内的this相等 箭头函数没有自己的this, 内部的this其实就是外层代码块的this
        setTimeout(()=> { //定义时
            console.log(this);
            console.log(this.age);
        }, 1000);
    }
    let age = 25;
    func4.call({age: 26});


    //嵌套的箭头函数
    const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);
    const plus1 = a => a + 1;
    const mult2 = a => a * 2;
    const addThenMult = pipeline(plus1, mult2);
    console.log(addThenMult(5)); //12
}

{
    console.group("函数绑定");
    //函数绑定
    function func(){
        console.log(this);
        console.log(arguments);
    }

    let obj = {
        name: "obj"
    };

    func.bind(obj)();
    func.call(obj);
    func.apply(obj);

    var x = "global x";
    let module = {
        x: "module x",
        getX: function() {
            return this.x;
        }
    };
    console.log(module.getX());

    let retrieveX = module.getX;
    console.log(retrieveX()); //TODO  "global x "  let ==> undefined

    let boundGetX = module.getX.bind(module);
    console.log(boundGetX());


    function toArray(){
        return [...arguments];
    }
    let arr1 = toArray(1, 2, 3);
    console.log(arr1);

    let leadingParamToArray = toArray.bind(null, 12);
    let arr2 = leadingParamToArray();
    console.log(arr2);
    let arr3 = leadingParamToArray(1, 2, 3);
    console.log(arr3);

    //obj :: func; //FIXME
    console.groupEnd();

}

{
    //尾调用优化 TODO 尾调用优化只有在严格模式下开启
}

(() => {
    "use strict";

    //尾递归优化的实现
    function sum(x, y){
        if(y <= 0){
            return x;
        }
        return sum(x + 1, y - 1);
    }
    console.log(sum(1, 100)); //10000 TODO Maximum call stack size exceeded

    function trampoline(f){
        while(f && f instanceof Function){
            f = f();
        }
        return f;
    }

    function sum1(x, y){
        if(y <= 0){
            return x;
        }
        return sum1.bind(null, x + 1, y - 1);
    }

    console.log(trampoline(sum1(1, 10000)));


    function tco(f) {
        var value;
        var active = false;
        var accumulated = [];
        return function accumulator() {
            accumulated.push(arguments);
            if (!active) {
                active = true;
                while (accumulated.length) {
                    value = f.apply(this, accumulated.shift());
                }
                active = false;
                return value;
            }
        };
    }

    var sum2 = tco(function(x, y) {
        if (y > 0) {
            return sum2(x + 1, y - 1)
        }
        else {
            return x;
        }
    });

    sum2(1, 100000);

})();

{
    //函数参数的尾逗号 TODO es7提案

    function add(x, y, ){

    }

    add(1, 2);

}
