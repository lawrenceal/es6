"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
    var add = function add(x, y) {
        return { x: x, y: y };
    };

    //属性的简洁表示法 TODO 属性名总是字符串

    var a = "a";
    var obj = { a: a };
    console.log(obj);

    console.log(add(1, 2));

    var o = {
        method: function method() {
            return "this is method";
        }
    };
    console.log(o.method());

    var age = 24;

    var person = {

        age: age,

        name: "lawrence",

        sayAge: function sayAge() {
            console.log(this.name + " " + this.age);
        }
    };

    person.sayAge();
}

{
    var _person2;

    //属性名表达式 TODO 不能够和简洁表示法一起使用

    var _name = "name";
    var method = "getName";

    var _person = (_person2 = {}, _defineProperty(_person2, _name, "kitty"), _defineProperty(_person2, 'a' + 'b', 123), _defineProperty(_person2, method, function () {
        console.log(this[_name]);
    }), _person2);
    console.log(_person[_name]);
    console.log(_person.name);

    console.log(_person['a' + 'b']);
    console.log(_person.ab);

    _person[method]();
}

{
    var _myAge, _person4, _mutatorMap;

    //方法的name属性

    var key = Symbol("key");

    var _person3 = (_person4 = {}, _defineProperty(_person4, key, function () {}), _defineProperty(_person4, "getName", function getName() {}), _myAge = "myAge", _mutatorMap = {}, _mutatorMap[_myAge] = _mutatorMap[_myAge] || {}, _mutatorMap[_myAge].get = function () {
        return 12;
    }, _defineEnumerableProperties(_person4, _mutatorMap), _person4);

    console.log(_person3.getName.name); //getName
    console.log(_person3[key].name); //[key]
    console.log(_person3.myAge); //12
}

{
    //Object.is()  == ===
    console.log("NaN === NaN = " + (NaN === NaN));
    console.log("+0 === -0 = " + (+0 === -0));

    console.log("Object.is(NaN, NaN) = " + Object.is(NaN, NaN));
    console.log("Object.is(+0, -0) = " + Object.is(+0, -0));

    Object.defineProperty(Object, "is", {
        value: function value(x, y) {
            if (x === y) {
                return x !== 0 || 1 / x === 1 / y; //TODO 1/+0 ==> Infinity 1/-0 ==> -Infinity
            }

            return x !== x && y !== y;
        },
        configurable: true,
        writable: true,
        enumerable: false
    });
}

{
    var setOption = function setOption(option) {
        return Object.assign({}, DEFAULTS, option);
    };

    console.group("Object.assign"); // TODO 将源对象的所有的可"枚举的自身属性"，赋值到目标对象 "浅拷贝"

    var target = { a: "1" },
        source = { b: "2", c: "4" },
        source1 = _defineProperty({ c: "3" }, Symbol("d"), "5");
    var newObj = Object.assign(target, source, source1);
    console.log(target);
    console.log(newObj);

    //TODO 参数不是对象会进行转换
    console.log(Object.assign(1));
    console.log(_typeof(Object.assign(1)));

    try {
        Object.assign(null);
        Object.assign(undefined);
    } catch (error) {
        console.log(error);
    }

    Object.assign(target, null);

    console.log(Object.assign({}, "string", true, 1)); //Object {0: "s", 1: "t", 2: "r", 3: "i", 4: "n", 5: "g"}

    Object.assign([1, 2], [3, 4]); //处理数组，视为对象

    console.log(Object.assign({ a: { hello: "world" } }, { a: { hi: "kitty" } }));

    console.groupEnd();

    console.group("Object.assign 常见用途");

    //为对象添加属性

    var Person = function Person(name, age) {
        _classCallCheck(this, Person);

        Object.assign(this, { name: name, age: age });
    };

    var _person5 = new Person("cat", 24);
    console.log(_person5);

    //为对象添加方法
    Object.assign(Person.prototype, {
        getName: function getName() {
            return this.name;
        },
        getAge: function getAge() {
            return this.age;
        }
    });
    console.log(_person5.getName());

    //clone对象
    var clone = Object.assign({}, _person5); //TODO clone自身的属性
    console.log(clone);

    var person1 = Object.assign(_person5); //TODO 返回对象本身
    console.log(person1 === _person5); //true

    var clone1 = Object.assign(Object.create(_person5), _person5); //TODO + clone继承属性
    console.log(clone1);

    //合并对个对象

    //为属性指定默认值
    var DEFAULTS = {
        width: 120,
        height: 120
    };

    console.log(setOption({ height: 240 }));

    console.groupEnd();
}

{
    console.group("属性的可枚举性");
    var _obj = { name: "kitty" };
    console.log(Object.getOwnPropertyDescriptor(_obj, "name"));

    /**
     * es5
     * for in循环，只遍历自身和继承的可枚举属性
     * Object.keys()，返回自身对象的所有可枚举属性
     * JSON.stringify()，只串行化对象自身的可枚举的属性。
     * */

    // ES6规定所有Class的原型的方法都是不可枚举的。
    console.log(Object.getOwnPropertyDescriptor(function () {
        function _class() {
            _classCallCheck(this, _class);
        }

        _createClass(_class, [{
            key: "foo",
            value: function foo() {}
        }]);

        return _class;
    }().prototype, "foo").enumerable);

    console.groupEnd();
}

{
    var _Reflect$ownKeys;

    /*class animal{
        constructor(sex){
            this.sex = sex;
        }
         getSex(){
           return this.sex;
        }
    }
     class Person extends animal{
        constructor(name, age, sex){
            super(sex);
            this.name = name;
            this.age = age;
        }
         getName(){
            return this.name;
        }
    }*/

    var Animal = function Animal(sex) {
        this.sex = sex;
    };

    var _Person = function _Person(name, age, sex) {
        Animal.call(this, sex);
        this.name = name;
        this.age = age;
        this[Symbol("weight")] = "174";
        this.getName = function () {
            return this.name;
        };
    };

    console.group("属性的遍历");

    Animal.prototype.getSex = function () {
        return this.sex;
    };

    _Person.prototype = new Animal();
    _Person.prototype.getAge = function () {
        return this.age;
    };

    var _person6 = new _Person("lawrence", 24, "women");
    Object.defineProperty(_person6, "hobby", {
        value: ["eat", "sleep"],
        configurable: true,
        enumerable: false,
        writable: true
    });

    console.log(_person6);

    console.group("for in");
    for (var item in _person6) {
        console.log(item);
    }
    console.groupEnd();

    console.group("Object.keys()");
    console.log(Object.keys(_person6));
    console.groupEnd();

    console.group("Object.getOwnPropertyNames()");
    console.log(Object.getOwnPropertyNames(_person6));
    console.groupEnd();

    console.group("Object.getOwnPropertySymbols()");
    console.log(Object.getOwnPropertySymbols(_person6));
    console.groupEnd();

    console.group("Reflect.ownKeys(person)");
    console.log(Reflect.ownKeys(_person6));
    console.groupEnd();

    /**
     * 1.遍历属性名为数值的属性，数字升序
     * 2.遍历属性名为字符串的属性，按照生成时间，
     * 3.遍历属性名为Symbol值得属性，按照生成时间
     * */

    console.log(Reflect.ownKeys((_Reflect$ownKeys = { 10: 10, 2: 2 }, _defineProperty(_Reflect$ownKeys, Symbol("age"), 24), _defineProperty(_Reflect$ownKeys, "b", "b"), _defineProperty(_Reflect$ownKeys, "a", "a"), _defineProperty(_Reflect$ownKeys, Symbol("name"), "name"), _Reflect$ownKeys)));

    console.groupEnd();
}

{
    console.group("__proto__ 属性，Object.setPrototypeOf() Object.getPrototypeOf()");

    var _person7 = {
        getName: function getName() {
            return "person name";
        }
    };

    var _person8 = Object.create(_person7);
    _person8.method = function () {};
    console.log(_person8.getName());

    var person2 = {
        method: function method() {}
    };
    person2.__proto__ = _person7;
    console.log(person2.getName());

    var person3 = {
        method: function method() {}
    };
    Object.setPrototypeOf(person3, _person7);
    console.log(person3.getName());

    console.log(Object.getPrototypeOf(person3));

    console.groupEnd();

    console.group("Object.values() Object.entries()"); //TODO 所有可遍历"自身的"的属性 省略Symbol 进行类型转换
    var _obj2 = _defineProperty({
        name: "name-val",
        age: "age-val"
    }, Symbol("sex"), "women-val");
    console.log(Object.keys(_obj2));
    console.log(Object.values(_obj2));
    console.log(Object.entries(_obj2));

    console.log(Object.values("str"));
    console.log(Object.values(true));

    console.log(new Map(Object.entries(_obj2))); //TODO obj转成Map

    console.groupEnd();
}

{
    /*console.group("对象的扩展运算符"); //TODO ES7 rest解构赋值只能实现浅拷贝，并且不能复制原型对象的属性
     let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4}; //rest解构赋值
    console.log("x = " + x + " y = " + y);
    console.log(z);
     let a = { a: "a"}, b = {b: "b"}, ab = {...a, ...b};//扩展运算符
    console.log(ab);
     console.groupEnd();*/
}

{
    console.group("Object.getOwnPropertyDescriptors()");

    var _obj4 = {
        name: "lawrence",
        getName: function getName() {
            return this.name;
        }
    };
    console.log(Object.getOwnPropertyDescriptor(_obj4, name));
    console.log(Object.getOwnPropertyDescriptors(_obj4));

    var _source2 = {
        set foo(value) {
            console.log(value);
        }
    };

    var _target = {};
    Object.assign(_target, _source2);
    //console.log(target.foo(1));
    console.log(Object.getOwnPropertyDescriptor(_target, "foo"));
    _target.foo = 1;

    Object.defineProperties(_target, Object.getOwnPropertyDescriptors(_source2)); //TODO 实现copy

    console.log(Object.getOwnPropertyDescriptor(_target, "foo"));
    _target.foo = 1;

    var obj1 = {
        name: "obj1"
    };

    var _clone = Object.create(obj1, { age: { value: 24, configurable: true, writable: true, enumerable: true } });
    console.log("clone.name = " + _clone.name + " clone.hasOwnProperty('name') = " + _clone.hasOwnProperty("name"));
    console.log("clone.age = " + _clone.age + " clone.hasOwnProperty('age') = " + _clone.hasOwnProperty('age'));

    var _clone2 = Object.create(Object.getPrototypeOf(obj1), Object.getOwnPropertyDescriptors(obj1)); //TODO 浅拷贝 对象属性复制
    console.log(_clone2);

    /** 一个对象继承另一个对象 **/
    var oldObj = { number: "this is old object number" };
    var _newObj = {
        __proto__: oldObj,
        name: "new object"
    };
    console.log(_newObj.name + " " + _newObj.number);

    var newObj1 = Object.create(oldObj);
    newObj1.name = "new Object1";
    console.log(newObj1.name + " " + newObj1.number);

    var newObj2 = Object.assign(Object.create(oldObj), { name: "new Object2" });
    console.log(newObj2.name + " " + newObj2.number);

    var newObj3 = Object.create(oldObj, Object.getOwnPropertyDescriptors({ name: "new Object3" }));
    console.log(newObj3.name + " " + newObj3.number);

    console.groupEnd();
}