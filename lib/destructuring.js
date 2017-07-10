"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

(function () {
    console.group('数组的解构赋值');

    var a = 1,
        b = 2,
        c = 3;

    console.log("a = " + a + " b = " + b + " c = " + c);

    var foo = 1,
        bar = 2,
        baz = 3;

    console.log("foo = " + foo + " bar = " + bar + " baz = " + baz);

    var _ref = ["foo", "bar", "baz"],
        third = _ref[2];

    console.log(third);

    var head = 1,
        tail = [2, 3, 4];

    console.log("head = " + head);
    console.log(tail);

    var _ref2 = ['a'],
        x = _ref2[0],
        y = _ref2[1],
        z = _ref2.slice(2);

    console.log("x = " + x + " y = " + y);
    console.log(z);

    //TODO 如果解构不成功，变量=undefined， 如果等号右边不是数组（不具备iterator接口），会报错.
    try {
        var _ = 1,
            _ref3 = _slicedToArray(_, 1),
            foo1 = _ref3[0];
    } catch (error) {
        console.log("等号右边不是数组");
    }

    //TODO 只要某种数据解构具有Iterator接口，都可以采用数组形式的解构赋值

    //默认值 === undefined
    var _2 = 2,
        x1 = _2 === undefined ? 1 : _2;

    console.log('x1 = ' + x1);
    var _ref4 = null,
        x2 = _ref4 === undefined ? 1 : _ref4;

    console.log('x2 = ' + x2);
    var _undefined = undefined,
        x3 = _undefined === undefined ? 1 : _undefined;

    console.log('x3 = ' + x3);

    console.groupEnd();
})();

(function () {
    console.group('对象的解构赋值');
    // TODO 变量必须与属性同名

    var _foo$bar = { foo: "aaa", bar: "bbb" },
        foo = _foo$bar.foo,
        bar = _foo$bar.bar;

    console.log("foo = " + foo + " bar = " + bar);

    var _foo$bar2 = { foo: "aaa", bar: "bbb" },
        baz = _foo$bar2.baz;

    console.log(baz);

    //TODO 内部机制：先找到同名属性，然后再赋值给对应的变量。真正被赋值的是后者。
    var _foo$bar3 = { foo: 'aaa', bar: 'bbb' },
        baz1 = _foo$bar3.foo;

    console.log("baz1 = " + baz1);
    var _foo = { foo1: 'zzz' },
        foo1 = _foo.foo1;

    console.log("foo1 = " + foo1);

    var node = {
        loc: {
            start: {
                line: 1,
                column: 5
            }
        } };

    //loc和start是模式不是变量
    var line = node.loc.start.line;

    console.log("line = " + line);

    //指定默认值
    var _x = { x: 1 },
        x = _x.x,
        _x$y = _x.y,
        y = _x$y === undefined ? 5 : _x$y;

    console.log("x = " + x + " y = " + y);
    var _ref5 = {},
        _ref5$x = _ref5.x,
        y1 = _ref5$x === undefined ? 3 : _ref5$x;

    console.log("y1 = " + y1);

    var x2;
    var _x2 = { x: 1 };
    x2 = _x2.x2;

    console.log("x2 = " + x2);

    var arr = [1, 2, 3];
    var first = arr[0],
        last = arr[arr.length - 1];

    console.log("first = " + first + " last = " + last);

    var _checked$className$ch = { checked: true, className: "class", children: "Hello world!", onClick: function onClick() {} },
        checked = _checked$className$ch.checked,
        other = _objectWithoutProperties(_checked$className$ch, ["checked"]);

    console.log(checked);
    console.log(other);

    console.groupEnd();
})();

(function () {
    //字符串的解构赋值

    var _hello = "hello",
        _hello2 = _slicedToArray(_hello, 1),
        str = _hello2[0];

    console.log("str = " + str);

    var _hello3 = 'hello',
        _hello3$length = _hello3.length,
        len = _hello3$length === undefined ? 1 : _hello3$length;

    console.log("len = " + len);
})();

(function () {
    //数值和布尔值的解构赋值 TODO 等号右边是数值和布尔值，则会转为对象

    var _3 = 124,
        s = _3.toString;

    console.log(s == Number.prototype.toString);

    var _true = true,
        s1 = _true.toString;

    console.log(s1 == Boolean.prototype.toString);

    try {
        var x = undefined.prop; // TypeError
    } catch (error) {
        console.log(error);
    }

    try {
        var _ref6 = null,
            _x3 = _ref6.prop; // TypeError
    } catch (error) {
        console.log(error);
    }
})();

(function () {
    //函数参数的解构赋值

    function add(_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            a = _ref8[0],
            b = _ref8[1];

        return a + b;
    }
    add([1, 2]);

    //默认值

    function move() {
        var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref9$x = _ref9.x,
            x = _ref9$x === undefined ? 1 : _ref9$x,
            _ref9$y = _ref9.y,
            y = _ref9$y === undefined ? 1 : _ref9$y;

        return [x, y];
    }

    console.log(move({ x: 3, y: 4 }));
    console.log(move({ x: 3 }));
    console.log(move({}));
    console.log(move());

    function move1() {
        var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 1, y: 1 },
            x = _ref10.x,
            y = _ref10.y;

        return [x, y];
    }
    console.log(move1()); //[1, 1]
    console.log(move1({ x: 2, y: 3 })); //[2, 3]
    console.log(move1({ x: 2 })); //[2, undefined]
    console.log(move1({ y: 4 })); //[undefined, 4]

    var arr = [1, undefined, 3].map(function () {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "hi";
        return x;
    });
    console.log(arr);

    //TODO 赋值语句中，圆括号不属于模式的一部分，才能使用圆括号

    var z = void 0;

    //[(z)] = [z];
    z = 3;

    console.log(z);
})();

{

    //从函数返回多个值
    var returnArr = function returnArr() {
        return [1, 2, 4];
    };

    //函数参数的定义
    var arrParam = function arrParam(_ref12) {
        var _ref13 = _slicedToArray(_ref12, 3),
            e = _ref13[0],
            f = _ref13[1],
            g = _ref13[2];
    };

    var objParam = function objParam(_ref14) {
        var foo = _ref14.foo,
            baz = _ref14.baz,
            ba = _ref14.ba;
    };

    //函数参数的默认值
    var ajax = function ajax(_ref15) {
        var url = _ref15.url,
            _ref15$async = _ref15.async,
            async = _ref15$async === undefined ? true : _ref15$async,
            _ref15$success = _ref15.success,
            success = _ref15$success === undefined ? function () {
            console.log(url + " + " + async);
        } : _ref15$success;
        success();
    };

    //用途

    //交换变量的值
    var x = 1,
        y = 2;
    var _ref11 = [y, x];
    x = _ref11[0];
    y = _ref11[1];

    console.log("x = " + x + " y = " + y);
    var _returnArr = returnArr(),
        _returnArr2 = _slicedToArray(_returnArr, 3),
        a = _returnArr2[0],
        b = _returnArr2[1],
        c = _returnArr2[2];

    arrParam([1, 2, 3]);

    objParam({ baz: 1, foo: 2, ba: 3 });

    //提取JSON数据
    var jsonData = {
        "id": 42,
        "name": "lawrence",
        "age": 12
    };

    var id = jsonData.id,
        name = jsonData.name,
        age = jsonData.age;

    console.log("name = " + name);
    ajax({ url: "url" });

    //遍历Map结构
    var map = new Map();
    map.set("name", "kitty");
    map.set("age", 24);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            //数组的解构赋值
            console.log("key = " + key + " value = " + value);
        }

        //输入模块的指定方法
        //const { SourceMapConsumer, SourceNode } = require("source-map");
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}