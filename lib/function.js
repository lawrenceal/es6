"use strict";

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
    //函数参数默认值

    var log = function log(x, y) {
        x = x || "hello";
        y = y || "world";
        console.log(x + " " + y);
    };

    //TODO typeof y === 'undefined'； y = 'world';

    var log6 = function log6() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "hello";
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "world";

        console.log(x + " " + y);
    };

    log();
    log("hi", '');
    log("hi", false);
    log6("hi", false);
    log6("hi");
}

{
    //与解构赋值默认值结合使用
    var _log = function _log(_ref) {
        var x = _ref.x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 'world' : _ref$y;

        console.log(x + " " + y);
    };

    var fetch = function fetch(url) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref2$method = _ref2.method,
            method = _ref2$method === undefined ? 'GET' : _ref2$method;

        console.log(url + " " + method);
    };

    //参数默认值的位置 TODO 尾部

    var get = function get() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var b = arguments[1];
        var c = arguments[2];

        console.log(a + b + c);
    };

    //get(, 2);


    //函数的length属性 TODO 没有指定默认值的参数个数，必须在尾部


    _log({ x: 'hello' });

    fetch("url");

    fetch("url", { method: 'POST' });console.log(get.length); //0
    console.log(fetch.length); //1
}

{
    var func = function func(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

        console.log("y = " + y);
    };

    var func1 = function func1() {
        var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x;
        return function () {
            try {
                console.log("x = " + x);
            } catch (error) {
                console.log(error);
            }
            var x = 2;
            console.log("y = " + y); //1
        }();
    };

    var func2 = function func2() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x;
        //TODO  let x = x;
        console.log(x);
    };

    var bar = function bar() {
        var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
            return foo;
        };

        var foo = "inner";
        console.log(func());
    };

    var bar1 = function bar1() {
        var func1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
            return foo1;
        };

        var foo1 = "inner";
        console.log(func1());
    };

    var fun3 = function fun3() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : z;
        //TODO z作为已经声明的变量
        console.log(z); //1
        console.log(a); //1
    };

    var fun4 = function fun4(y) {
        //TODO 参数重新声明
        console.log(y); // undefined
    };

    //默认值应用
    var ajax = function ajax() {
        var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Error('missing param', {});
    };

    console.group("作用域");
    //作用域
    var _x5 = 1;

    func(2);

    func1();

    try {
        func2();
    } catch (error) {
        console.log(error);
    }

    var foo = 'outer';

    bar();

    var foo1 = 'outer';

    bar1();

    var z = 1;

    fun3();

    var y = 1;

    fun4();

    console.groupEnd();
}

{
    //函数的rest参数 获取函数多余的参数，搭配的变量是个数组 TODO rest参数后边不能再有其他的参数
    var sum = function sum() {
        var result = 0;

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        arg.forEach(function (item) {
            result += item;
        });

        return result;
    };

    var push = function push(arr) {
        for (var _len2 = arguments.length, items = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            items[_key2 - 1] = arguments[_key2];
        }

        items.forEach(function (item) {
            return arr.push(item);
        });
    };

    console.log(sum(1, 2, 3));

    var arr = [];

    push(arr, 1, 2, 3);
    console.log(arr);
}

{
    var _console, _console2;

    var add = function add(x, y) {
        return x + y;
    };

    //扩展运算符 rest参数的逆运算，将一个数组转为用 TODO "逗号" ？ 分割的参数序列

    (_console = console).log.apply(_console, [1, 2, 3]);
    (_console2 = console).log.apply(_console2, _toConsumableArray(document.querySelectorAll('li')));
    console.log([].concat(_toConsumableArray(document.querySelectorAll('li'))));

    console.log(add.apply(undefined, [1, 3])); // TODO 替代数组的apply将数组转为函数的参数

    var _arr = [];
    _arr.push.apply(_arr, [1, 2]);
    console.log(_arr);

    console.log("Math.max(...[1, 2, 3]) = " + Math.max.apply(Math, [1, 2, 3]));

    //将一个数组添加到另一个数组的尾部
    var arr1 = [1, 2, 3],
        arr2 = [4, 5, 6];

    console.log(arr1.concat(arr2)); //TODO 返回一个新数组

    Array.prototype.push.apply(arr1, arr2);
    console.log(arr1);

    arr1.push.apply(arr1, arr2);
    console.log(arr1);
}

(function () {
    'use strict';

    function add(x, y) {
        console.log(this); //TODO null undefined  ==>  window  严格模式 null ==> null undefined ==> undefined
        return x + y;
    }

    add.apply(null, [1, 2]);
})();

{
    //扩展运算符的应用
    //合并数组

    var _arr2 = [1, 2],
        _arr3 = [2, 3],
        _arr4 = [4, 5];
    console.log(_arr2.concat(_arr3, _arr4));
    console.log([].concat(_arr2, _arr3, _arr4));

    //与结构赋值结合
    var a = 1,
        b = [2, 3, 4];

    console.log(a);
    console.log(b);

    var _ref3 = [],
        c = _ref3[0],
        d = _ref3.slice(1);

    console.log(c); //undefined
    console.log(d); //[]


    //字符串
    console.log([].concat(_toConsumableArray('hello world')));
    console.log([].concat(_toConsumableArray('𠮷𠮷𠮷')).length);

    var str = "abcba"; //32位Unicode字符
    console.log(str.split("").reverse().join(""));
    console.log([].concat(_toConsumableArray(str)).reverse().join(""));

    //实现了Iterator接口的对象 TODO 转换为数组
    console.log([].concat(_toConsumableArray(document.querySelectorAll('li'))));
}

{
    //name属性
    var fun = function func() {};

    console.log(fun.name);

    console.log("new Function().name = " + new Function().name); //anonymous

    console.log("fun.bind({}).name = " + fun.bind({}).name);
}

{

    //TODO 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
    //TODO 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。不可以使用yield命令，因此箭头函数不能用作Generator函数。

    var func4 = function func4() {
        var _this = this;

        console.log(this); //TODO 和箭头函数内的this相等 箭头函数没有自己的this, 内部的this其实就是外层代码块的this
        setTimeout(function () {
            //定义时
            console.log(_this);
            console.log(_this.age);
        }, 1000);
    };

    //箭头函数
    //"use strict";

    var _func = function _func() {
        return 1;
    };
    console.log(_func());
    var _func2 = function _func2(x, y) {
        return x + y;
    };
    console.log(_func2(1, 2));
    var _func3 = function _func3() {
        return { x: 1, y: 2 };
    };
    console.log(_func3());
    var func3 = function func3(_ref4) {
        var _ref5 = _toArray(_ref4),
            first = _ref5[0],
            end = _ref5.slice(1);

        return [first, end];
    };
    console.log(func3([1, 2, 3]));
    var age = 25;
    func4.call({ age: 26 });

    //嵌套的箭头函数
    var pipeline = function pipeline() {
        for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            funcs[_key3] = arguments[_key3];
        }

        return function (val) {
            return funcs.reduce(function (a, b) {
                return b(a);
            }, val);
        };
    };
    var plus1 = function plus1(a) {
        return a + 1;
    };
    var mult2 = function mult2(a) {
        return a * 2;
    };
    var addThenMult = pipeline(plus1, mult2);
    console.log(addThenMult(5)); //12
}

{
    //函数绑定
    var _func4 = function _func4() {
        console.log(this);
        console.log(arguments);
    };

    var toArray = function toArray() {
        return [].concat(Array.prototype.slice.call(arguments));
    };

    console.group("函数绑定");

    var obj = {
        name: "obj"
    };

    _func4.bind(obj)();
    _func4.call(obj);
    _func4.apply(obj);

    var x = "global x";
    var _module = {
        x: "module x",
        getX: function getX() {
            return this.x;
        }
    };
    console.log(_module.getX());

    var retrieveX = _module.getX;
    console.log(retrieveX()); //TODO  "global x "  let ==> undefined

    var boundGetX = _module.getX.bind(_module);
    console.log(boundGetX());

    var _arr5 = toArray(1, 2, 3);
    console.log(_arr5);

    var leadingParamToArray = toArray.bind(null, 12);
    var _arr6 = leadingParamToArray();
    console.log(_arr6);
    var arr3 = leadingParamToArray(1, 2, 3);
    console.log(arr3);

    //obj :: func; //FIXME
    console.groupEnd();
}

{
    //尾调用优化 TODO 尾调用优化只有在严格模式下开启
}

(function () {
    "use strict";

    //尾递归优化的实现

    function sum(x, y) {
        if (y <= 0) {
            return x;
        }
        return sum(x + 1, y - 1);
    }
    console.log(sum(1, 100)); //10000 TODO Maximum call stack size exceeded

    function trampoline(f) {
        while (f && f instanceof Function) {
            f = f();
        }
        return f;
    }

    function sum1(x, y) {
        if (y <= 0) {
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

    var sum2 = tco(function (x, y) {
        if (y > 0) {
            return sum2(x + 1, y - 1);
        } else {
            return x;
        }
    });

    sum2(1, 100000);
})();

{
    //函数参数的尾逗号 TODO es7提案

    var _add = function _add(x, y) {};

    _add(1, 2);
}