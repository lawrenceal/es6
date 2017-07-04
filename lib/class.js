"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
    var Point = function () {
        function Point(x, y) {
            _classCallCheck(this, Point);

            this.x = x;
            this.y = y;
        } //TODO 不允许有 ,

        _createClass(Point, [{
            key: "toString",
            value: function toString() {
                //TODO 不允许有function
                return this.x + " : " + this.y;
            }
        }, {
            key: "sayHi",
            value: function sayHi() {
                console.log("hi");
            }
        }]);

        return Point;
    }();

    Point.prototype.sayHi(); //TODO 类的所有方法都在 prototype上


    console.log(typeof Point === "undefined" ? "undefined" : _typeof(Point)); //function
    console.log(Point.prototype.constructor === Point); //true

    Object.assign(Point.prototype, {
        getX: function getX() {
            return this.x;
        },
        getY: function getY() {
            return this.y;
        }
    });

    var point = new Point(1, 2);
    console.log(point.getY());

    //TODO 类内部的所有方法都是不可枚举的
    console.log(Object.keys(Point.prototype));
    console.log(Object.getOwnPropertyNames(Point.prototype));

    //TODO class不存在变量提升
}

{
    console.group('constructor');

    var Foo = function () {
        function Foo() {
            _classCallCheck(this, Foo);
        }

        _createClass(Foo, [{
            key: "toString",
            //TODO 默认会创建 constructor

            value: function toString() {
                return 'Foo';
            }
        }]);

        return Foo;
    }();

    console.log(new Foo().toString());

    var Bar = function Bar() {
        _classCallCheck(this, Bar);

        return Object.create(null); //TODO 可以返回其他对象
    };

    var instance = new Bar();
    console.log(instance instanceof Bar); //false


    //TODO class不能直接调用 报错


    //表达式 My可以省略
    var MyClass = function () {
        function My() {
            _classCallCheck(this, My);
        }

        _createClass(My, [{
            key: "getName",
            //TODO My内部使用
            value: function getName() {
                return My.name;
            }
        }]);

        return My;
    }();
    console.log(new MyClass().getName());
    console.log(MyClass.name + "_________"); //TODO name 属性总是跟在 class后边的类名

    //立即执行
    var person = new (function () {
        function _class(name) {
            _classCallCheck(this, _class);

            this.name = name;
        }

        _createClass(_class, [{
            key: "getName",
            value: function getName() {
                return this.name;
            }
        }]);

        return _class;
    }())('lawrence');
    console.log(person.getName());

    console.groupEnd();
}

{
    var setAnimalName = function setAnimalName(name) {
        this.name = name;
    };

    console.group("私有方法");

    //将私有方法移除模块 ？

    var Animal = function () {
        function Animal() {
            _classCallCheck(this, Animal);
        }

        _createClass(Animal, [{
            key: "setName",
            value: function setName(name) {
                setAnimalName.call(this, name);
            }
        }, {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        }]);

        return Animal;
    }();

    var animal = new Animal();
    animal.setName('cat');
    console.log(animal.getName());

    //方法名为Symbol值
    var getAge = Symbol('getAge');

    var Tree = function () {
        function Tree(name, age) {
            _classCallCheck(this, Tree);

            this.name = name;
            this.age = age;
        }

        _createClass(Tree, [{
            key: getAge,
            value: function value() {
                return this.age;
            }
        }]);

        return Tree;
    }();

    console.log(new Tree('杨柳', 2)[getAge]());

    //TODO 类和模块的内部默认就是严格模式

    console.groupEnd();
}

{
    console.group("继承");

    //TODO 子类没有this, 需要调用super继承父类的this

    var _Animal = function () {
        function _Animal(name) {
            _classCallCheck(this, _Animal);

            this.name = name;
        }

        _createClass(_Animal, [{
            key: "getName",
            value: function getName() {
                return this.name;
            }
        }]);

        return _Animal;
    }();

    var Person = function (_Animal2) {
        _inherits(Person, _Animal2);

        function Person() {
            _classCallCheck(this, Person);

            return _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).apply(this, arguments));
        }

        return Person;
    }(_Animal);

    console.log(new Person('person').getName());

    //两条继承链 __proto__ prototype
    console.log(Person.__proto__ === _Animal); //TODO ? true
    console.log(Person.prototype.__proto__ === _Animal.prototype); // true


    //继承目标

    var A = function A() {
        _classCallCheck(this, A);
    };

    console.log(A.__proto__ === Function.prototype); //true TODO A是一个普通函数
    console.log(A.prototype.__proto__);

    var B = function (_Object) {
        _inherits(B, _Object);

        function B() {
            _classCallCheck(this, B);

            return _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).apply(this, arguments));
        }

        return B;
    }(Object);

    console.log(B.__proto__);

    //TODO 判断一个类是否继承另一个类
    console.log(Object.getPrototypeOf(Person) === _Animal); //true


    //实例的__proto__
    console.log(new Person().__proto__.__proto__ === new _Animal().__proto__); //true


    console.groupEnd();
}

{

    //TODO 原生构造函数继承 寄生组合式继承
    var MyArray = function MyArray() {
        Array.apply(this, arguments);
    };

    console.group("继承原生构造函数");
    MyArray.prototype = Object.create(Array.prototype, {
        constructor: {
            value: 'MyArray',
            configurable: true,
            enumerable: false,
            writable: true
        }
    });
    var arr = new MyArray(1, 2);
    arr[0] = 'a';
    console.log(arr[0]);
    console.log(arr.length);

    var NewArray = function (_Array) {
        _inherits(NewArray, _Array);

        function NewArray() {
            _classCallCheck(this, NewArray);

            return _possibleConstructorReturn(this, (NewArray.__proto__ || Object.getPrototypeOf(NewArray)).apply(this, arguments));
        }

        return NewArray;
    }(Array);

    var newArr = new NewArray('z', 'x');
    console.log(newArr[0]);
    console.log(newArr.length);

    //TODO 无法通过super向Object父类传参， ES6改变了Object构造函数的行为，不是通过new Object这种形式调用，Object构造函数会忽略参数。

    console.groupEnd();
}

{
    console.group('setter getter');

    var _B = function () {
        function _B(name) {
            _classCallCheck(this, _B);

            this.realAge = name;
        }

        _createClass(_B, [{
            key: "age",
            set: function set(value) {
                this.realAge = value;
            },
            get: function get() {
                return this.realAge;
            }
        }]);

        return _B;
    }();

    var b = new _B();
    b.age = "hi";
    console.log(b.age);
    console.log(Reflect.getOwnPropertyDescriptor(_B.prototype, 'age'));

    console.groupEnd();
}

{
    console.group('类的静态方法');

    //静态方法不会被 TODO 实例继承

    var _Foo = function () {
        function _Foo(name, age) {
            _classCallCheck(this, _Foo);

            this.name = name;
            this.age = age;
        }

        _createClass(_Foo, [{
            key: "getName",
            value: function getName() {
                return this.name;
            }
        }], [{
            key: "getNumber",
            value: function getNumber() {
                return "this is static function";
            }
        }]);

        return _Foo;
    }();

    try {
        new _Foo().getNumber();
    } catch (error) {
        console.log(error);
    }

    var _Bar = function (_Foo2) {
        _inherits(_Bar, _Foo2);

        function _Bar(name, age) {
            _classCallCheck(this, _Bar);

            var _this4 = _possibleConstructorReturn(this, (_Bar.__proto__ || Object.getPrototypeOf(_Bar)).call(this, name, age));

            _this4.name = name;
            _this4.age = age;
            return _this4;
        }

        _createClass(_Bar, [{
            key: "getOwnNumber",
            value: function getOwnNumber() {
                console.log(_get(_Bar.prototype.__proto__ || Object.getPrototypeOf(_Bar.prototype), "age", this)); //undefined
                try {
                    return _get(_Bar.prototype.__proto__ || Object.getPrototypeOf(_Bar.prototype), "getNumber", this).call(this); //TODO super不能调用父类的静态方法
                } catch (error) {
                    return _get(_Bar.prototype.__proto__ || Object.getPrototypeOf(_Bar.prototype), "getName", this).call(this);
                }
            }
        }], [{
            key: "getStaticNumber",
            value: function getStaticNumber() {
                //TODO 能够在子类的static函数中通过super调用父类的static方法
                console.log(_get(_Bar.__proto__ || Object.getPrototypeOf(_Bar), "age", this)); //undefined
                return _get(_Bar.__proto__ || Object.getPrototypeOf(_Bar), "getNumber", this).call(this);
            }
        }]);

        return _Bar;
    }(_Foo);

    console.log(_Bar.getNumber());
    console.log(new _Bar('kitty', 24).getOwnNumber());
    console.log(_Bar.getStaticNumber());
    console.groupEnd();
}

{
    console.group('静态属性 实例属性');

    var _Bar2 = function _Bar2() {
        _classCallCheck(this, _Bar2);
    };

    _Bar2.number = 'out property number';
    console.log(new _Bar2().number);

    //实例属性 TODO es7
    /*class Baz{
         state = {
            count: 0
        };
         constructor(name){
            this.name = name;
        }
    }
    console.log(new Baz().state.count);*/

    console.groupEnd();
}

{
    var _Person = function _Person(name) {
        if (new.target !== undefined) {
            this.name = name;
        } else {
            throw new Error('must to be new');
        }
    };

    console.group("new target");

    console.log(new _Person('new person').name);
    try {
        _Person();
    } catch (error) {
        console.log(error);
    }

    var _Animal3 = function _Animal3() {
        _classCallCheck(this, _Animal3);

        console.log(new.target);
        if (new.target === _Animal3) {
            throw new Error('不能实例化');
        }
    };

    var Cat = function (_Animal4) {
        _inherits(Cat, _Animal4);

        function Cat() {
            _classCallCheck(this, Cat);

            return _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).apply(this, arguments));
        }

        return Cat;
    }(_Animal3);

    try {
        new _Animal3();
    } catch (error) {
        console.log(error);
    }
    new Cat();

    console.groupEnd();
}