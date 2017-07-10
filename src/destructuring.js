(() => {
    console.group('数组的解构赋值');

    let [a, b, c] = [1, 2, 3];
    console.log("a = " + a + " b = " + b + " c = " + c);

    let [foo, [[bar], baz]] = [1, [[2], 3]];
    console.log("foo = " + foo + " bar = " + bar + " baz = " + baz);

    let [ , , third] = ["foo", "bar", "baz"];
    console.log(third);

    let [head, ...tail] = [1, 2, 3, 4];
    console.log("head = " + head);
    console.log(tail);

    let [x, y, ...z] = ['a'];
    console.log("x = " + x + " y = " + y);
    console.log(z);

    //TODO 如果解构不成功，变量=undefined， 如果等号右边不是数组（不具备iterator接口），会报错.
    try{
        let [foo1] = 1;
    }catch (error){
        console.log("等号右边不是数组");
    }

    //TODO 只要某种数据解构具有Iterator接口，都可以采用数组形式的解构赋值

    //默认值 === undefined
    let [x1 = 1] = [2];
    console.log('x1 = ' + x1);
    let [x2 = 1] = [null];
    console.log('x2 = ' + x2);
    let [x3 = 1] = [undefined];
    console.log('x3 = ' + x3);

    console.groupEnd();
})();

(() => {
    console.group('对象的解构赋值');
    // TODO 变量必须与属性同名

    var { foo, bar } = { foo: "aaa", bar: "bbb" };
    console.log("foo = " + foo + " bar = " + bar);

    var { baz } = { foo: "aaa", bar: "bbb" };
    console.log(baz);

    //TODO 内部机制：先找到同名属性，然后再赋值给对应的变量。真正被赋值的是后者。
    var { foo: baz1 } = { foo: 'aaa', bar: 'bbb' };
    console.log("baz1 = " + baz1);
    var {foo1: foo1} = {foo1: 'zzz'};
    console.log("foo1 = " + foo1);

    var node = {
        loc: {
        start: {
            line: 1,
            column: 5
        }
    } };

    //loc和start是模式不是变量
    var { loc: { start: { line }} } = node;
    console.log("line = " + line);

    //指定默认值
    var {x, y = 5} = { x: 1 };
    console.log("x = " + x + " y = " + y);
    var {x: y1 = 3} = {};
    console.log("y1 = " + y1);

    var x2;
    ({x2} = {x: 1});
    console.log("x2 = " + x2);

    var arr = [1, 2, 3];
    var {0 : first, [arr.length - 1] : last} = arr;
    console.log("first = " + first + " last = " + last);

    /*let {obj1, ...obj2} = {obj1: 1, a: 2, b: 3, c: 4, length: 4};
    console.log(obj1);
    console.log(obj2);*/

    console.groupEnd();
})();

(() => {
    //字符串的解构赋值

    const [str] = "hello";
    console.log("str = " + str);

    let {length : len = 1} = 'hello';
    console.log("len = " + len);

})();

(() => {
    //数值和布尔值的解构赋值 TODO 等号右边是数值和布尔值，则会转为对象

    let {toString: s} = 124;
    console.log(s == Number.prototype.toString);

    let {toString: s1} = true;
    console.log(s1 == Boolean.prototype.toString);

    try{
        let { prop: x } = undefined; // TypeError
    }catch (error){
        console.log(error);
    }

    try{
        let { prop: x } = null; // TypeError
    }catch (error){
        console.log(error);
    }

})();

(() => {
    //函数参数的解构赋值

    function add([a, b]){
        return a + b;
    }
    add([1,2]);

    //默认值

    function move({x = 1, y = 1} = {}){
        return [x, y];
    }

    console.log(move({x: 3, y: 4}));
    console.log(move({x: 3}));
    console.log(move({}));
    console.log(move());

    function move1({x, y} = {x: 1, y: 1}){
        return [x, y];
    }
    console.log(move1()); //[1, 1]
    console.log(move1({x: 2, y: 3})); //[2, 3]
    console.log(move1({x: 2})); //[2, undefined]
    console.log(move1({y: 4})); //[undefined, 4]

    let arr = [1, undefined, 3].map( (x = "hi") => x);
    console.log(arr);

    //TODO 赋值语句中，圆括号不属于模式的一部分，才能使用圆括号

    let z;

    //[(z)] = [z];
    [(z)] = [3];
    console.log(z);

})();

{
    //用途

    //交换变量的值
    let x = 1, y = 2;
    [x, y] = [y, x];
    console.log("x = " + x + " y = " + y);

    //从函数返回多个值
    function returnArr(){
        return [1, 2, 4];
    }
    let [a, b, c] = returnArr();

    //函数参数的定义
    function arrParam([e, f, g]){}
    arrParam([1, 2, 3]);

    function objParam({foo, baz, ba}){}
    objParam({baz: 1, foo: 2, ba: 3});

    //提取JSON数据
    let jsonData = {
        "id": 42,
        "name": "lawrence",
        "age": 12,
    };

    let {id, name, age} = jsonData;
    console.log("name = " + name);

    //函数参数的默认值
    function ajax({url, async = true, success = function(){console.log(url + " + " + async)}}){success()}
    ajax({url: "url"});

    //遍历Map结构
    let map = new Map();
    map.set("name", "kitty");
    map.set("age", 24);

    for(let [key, value] of map){ //数组的解构赋值
        console.log("key = " + key + " value = " + value);
    }

    //输入模块的指定方法
    //const { SourceMapConsumer, SourceNode } = require("source-map");
}

