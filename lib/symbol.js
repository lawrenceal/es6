"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
    console.log(_typeof(Symbol()));

    console.log(Symbol("hello"));

    console.log(Symbol("world").toString());

    console.log("Symbol() === Symbol() = " + (Symbol() === Symbol()));

    console.log("Boolean(Symbol('boolean')) = " + Boolean(Symbol("boolean")));

    try {
        Number(Symbol("number"));
    } catch (error) {
        console.log(error);
    }
}

{
    console.group("作为属性名的Symbol"); //TODO 不能用点运算符

    var symbol = Symbol(),
        mySymbol = Symbol();

    var obj = _defineProperty({}, symbol, "name");

    console.log(obj[symbol]);

    obj.mySymbol = "hi";
    console.log(obj[mySymbol]);
    console.log(obj['mySymbol']);

    //TODO 用做常量

    console.groupEnd();
}

{
    console.group("实例");

    //作为常量消除魔术字符串

    //Object.getOwnPropertySymbols() Reject.ownKeys()

    //定义私有方法

    console.groupEnd();
}

{
    console.group("Symbol.for() Symbol.keyFor()");

    var s1 = Symbol.for("foo"),
        s2 = Symbol.for('foo');
    console.log(s1 === s2);
    console.log(Symbol.keyFor(s1));

    var s3 = Symbol("foo");
    console.log(Symbol.keyFor(s3));

    console.groupEnd();
}

{
    var _Symbol$toStringTag, _collection, _mutatorMap;

    console.group("内置的symbol值");

    //Symbol.hasInstance

    var MyClass = function () {
        function MyClass() {
            _classCallCheck(this, MyClass);
        }

        _createClass(MyClass, [{
            key: Symbol.hasInstance,
            value: function value(foo) {
                return foo instanceof Array;
            }
        }]);

        return MyClass;
    }();

    console.log("[] instanceof new MyClass() = " + ([] instanceof new MyClass()));

    //Symbol.isConcatSpreadable
    var arr = ['a', 'b'];
    console.log(['c'].concat(arr, 'd')); //4) ["c", "a", "b", "d"]
    console.log(arr[Symbol.isConcatSpreadable]); //undefined
    arr[Symbol.isConcatSpreadable] = false;
    console.log(['c'].concat(arr, 'd')); //(3) ["c", Array(2), "d"]

    var _obj2 = { 0: 'a', 1: 'b', length: 2 }; //TODO 类数组对象 Symbol.isConcatSpreadable 默认 false；
    console.log(['c'].concat(_obj2, 'd')); // ["c", Object, "d"]
    _obj2[Symbol.isConcatSpreadable] = true;
    console.log(['c'].concat(_obj2, 'd')); //["c", "a", "b", "d"]


    //Symbol.species

    //Symbol.match

    //Symbol.replace

    //Symbol.search

    //Symbol.spit

    //Symbol.iterator

    //Symbol.toPrimitive

    //Symbol.toStringTag

    var collection = (_collection = {}, _Symbol$toStringTag = Symbol.toStringTag, _mutatorMap = {}, _mutatorMap[_Symbol$toStringTag] = _mutatorMap[_Symbol$toStringTag] || {}, _mutatorMap[_Symbol$toStringTag].get = function () {
        return "collection";
    }, _defineEnumerableProperties(_collection, _mutatorMap), _collection);
    console.log(Object.prototype.toString.call(collection)); //[object collection]

    console.groupEnd();
}