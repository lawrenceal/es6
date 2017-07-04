{
    //属性的简洁表示法 TODO 属性名总是字符串

    let a = "a";
    let obj = {a};
    console.log(obj);

    function add(x, y){
        return {x, y};
    }
    console.log(add(1, 2));

    let o = {
        method() {
            return "this is method";
        }
    };
    console.log(o.method());

    let age = 24;

    let person = {

        age,

        name: "lawrence",

        sayAge() {
            console.log(this.name + " " + this.age);
        }
    };

    person.sayAge();
}

{
    //属性名表达式 TODO 不能够和简洁表示法一起使用

    let name = "name";
    let method = "getName";

    let person = {
        [name]: "kitty",
        ['a' + 'b']: 123,
        [method]: function(){
            console.log(this[name]);
        }
    };
    console.log(person[name]);
    console.log(person.name);

    console.log(person['a' + 'b']);
    console.log(person.ab);

    person[method]();

}

{
    //方法的name属性

    const key = Symbol("key");


    let person = {

        [ key ]() {},

        getName() {},

        get myAge() {
            return 12;
        }
    };

    console.log(person.getName.name); //getName
    console.log(person[key].name); //[key]
    console.log(person.myAge); //12

}

{
    //Object.is()  == ===
    console.log("NaN === NaN = " + (NaN === NaN));
    console.log("+0 === -0 = " + (+0 === -0));

    console.log("Object.is(NaN, NaN) = " + (Object.is(NaN, NaN)));
    console.log("Object.is(+0, -0) = " + (Object.is(+0, -0)));

    Object.defineProperty(Object, "is", {
        value: function(x, y){
            if(x === y){
                return x !== 0 || 1/x === 1/y;  //TODO 1/+0 ==> Infinity 1/-0 ==> -Infinity
            }

            return x !== x && y !== y;
        },
        configurable: true,
        writable: true,
        enumerable: false,
    });
}

{
    console.group("Object.assign"); // TODO 将源对象的所有的可"枚举的自身属性"，赋值到目标对象 "浅拷贝"

    let target = {a: "1"}, source = {b: "2", c: "4"}, source1 = {c: "3", [Symbol("d")]: "5"};
    let newObj = Object.assign(target, source, source1);
    console.log(target);
    console.log(newObj);

    //TODO 参数不是对象会进行转换
    console.log(Object.assign(1));
    console.log(typeof Object.assign(1));

    try{
        Object.assign(null);
        Object.assign(undefined);
    }catch (error){
        console.log(error);
    }

    Object.assign(target, null);

    console.log(Object.assign({}, "string", true, 1)); //Object {0: "s", 1: "t", 2: "r", 3: "i", 4: "n", 5: "g"}

    Object.assign([1, 2], [3, 4]);//处理数组，视为对象

    console.log(Object.assign({a: {hello: "world"}}, {a: {hi: "kitty"}}));

    console.groupEnd();


    console.group("Object.assign 常见用途");


    //为对象添加属性
    class Person {
        constructor(name, age){
            Object.assign(this, {name, age});
        }
    }
    let person = new Person("cat", 24);
    console.log(person);


    //为对象添加方法
    Object.assign(Person.prototype, { getName(){return this.name}, getAge(){return this.age} });
    console.log(person.getName());


    //clone对象
    let clone = Object.assign({}, person); //TODO clone自身的属性
    console.log(clone);

    let person1 = Object.assign(person); //TODO 返回对象本身
    console.log(person1 === person); //true

    let clone1 = Object.assign(Object.create(person), person); //TODO + clone继承属性
    console.log(clone1);


    //合并对个对象

    //为属性指定默认值
    let DEFAULTS = {
        width: 120,
        height: 120,
    };

    function setOption(option){
        return Object.assign({}, DEFAULTS, option);
    }

    console.log(setOption({height: 240}));

    console.groupEnd();
}

{
    console.group("属性的可枚举性");
    let obj = {name: "kitty"};
    console.log(Object.getOwnPropertyDescriptor(obj, "name"));

    /**
     * es5
     * for in循环，只遍历自身和继承的可枚举属性
     * Object.keys()，返回自身对象的所有可枚举属性
     * JSON.stringify()，只串行化对象自身的可枚举的属性。
     * */

    // ES6规定所有Class的原型的方法都是不可枚举的。
    console.log(Object.getOwnPropertyDescriptor(class {foo(){}}.prototype, "foo").enumerable);

    console.groupEnd();
}

{
    console.group("属性的遍历");

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


    function Animal(sex){
        this.sex = sex;
    }

    Animal.prototype.getSex = function () {
        return this.sex;
    };

    function Person(name, age, sex){
        Animal.call(this, sex);
        this.name = name;
        this.age = age;
        this[Symbol("weight")] = "174";
        this.getName = function(){
            return this.name;
        }
    }

    Person.prototype = new Animal();
    Person.prototype.getAge = function(){
        return this.age;
    };



    let person = new Person("lawrence", 24, "women");
    Object.defineProperty(person, "hobby", {
        value: ["eat", "sleep"],
        configurable: true,
        enumerable: false,
        writable: true,
    });

    console.log(person);

    console.group("for in");
    for(let item in person){
        console.log(item);
    }
    console.groupEnd();


    console.group("Object.keys()");
        console.log(Object.keys(person));
    console.groupEnd();


    console.group("Object.getOwnPropertyNames()");
        console.log(Object.getOwnPropertyNames(person));
    console.groupEnd();


    console.group("Object.getOwnPropertySymbols()");
    console.log(Object.getOwnPropertySymbols(person));
    console.groupEnd();


    console.group("Reflect.ownKeys(person)");
    console.log(Reflect.ownKeys(person));
    console.groupEnd();

    /**
     * 1.遍历属性名为数值的属性，数字升序
     * 2.遍历属性名为字符串的属性，按照生成时间，
     * 3.遍历属性名为Symbol值得属性，按照生成时间
     * */

    console.log(Reflect.ownKeys({10: 10, 2: 2, [Symbol("age")] : 24, b: "b" , a: "a",[Symbol("name")]: "name" }));

    console.groupEnd();
}

{
    console.group("__proto__ 属性，Object.setPrototypeOf() Object.getPrototypeOf()");

    let person = {
        getName: function(){return "person name"}
    };

    let person1 = Object.create(person);
    person1.method = function(){};
    console.log(person1.getName());

    let person2 = { method(){} };
    person2.__proto__ = person;
    console.log(person2.getName());

    let person3 = {method(){}};
    Object.setPrototypeOf(person3, person);
    console.log(person3.getName());

    console.log(Object.getPrototypeOf(person3));

    console.groupEnd();

    console.group("Object.values() Object.entries()");  //TODO 所有可遍历"自身的"的属性 省略Symbol 进行类型转换
    let obj = {
        name: "name-val",
        age: "age-val",
        [Symbol("sex")]: "women-val",
    };
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    console.log(Object.entries(obj));

    console.log(Object.values("str"));
    console.log(Object.values(true));

    console.log(new Map(Object.entries(obj))); //TODO obj转成Map

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

    let obj = {
        name: "lawrence",
        getName: function(){
            return this.name;
        }
    };
    console.log(Object.getOwnPropertyDescriptor(obj, name));
    console.log(Object.getOwnPropertyDescriptors(obj));


    let source = {
        set foo(value){
            console.log(value);
        }
    };

    let target = {};
    Object.assign(target, source);
    //console.log(target.foo(1));
    console.log(Object.getOwnPropertyDescriptor(target, "foo"));
    target.foo = 1;

    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));//TODO 实现copy

    console.log(Object.getOwnPropertyDescriptor(target, "foo"));
    target.foo = 1;


    let obj1 = {
        name: "obj1"
    };

    let clone = Object.create(obj1, {age: {value: 24, configurable: true, writable: true, enumerable: true}});
    console.log("clone.name = " + clone.name + " clone.hasOwnProperty('name') = " + (clone.hasOwnProperty("name")));
    console.log("clone.age = " + clone.age + " clone.hasOwnProperty('age') = "+ clone.hasOwnProperty('age'));

    let clone1 = Object.create(Object.getPrototypeOf(obj1), Object.getOwnPropertyDescriptors(obj1)); //TODO 浅拷贝 对象属性复制
    console.log(clone1);


    /** 一个对象继承另一个对象 **/
    let oldObj = { number: "this is old object number" };
    let newObj = {
        __proto__: oldObj,
        name: "new object"
    };
    console.log(newObj.name + " " + newObj.number);

    let newObj1 = Object.create(oldObj);
    newObj1.name = "new Object1";
    console.log(newObj1.name + " " + newObj1.number);

    let newObj2 = Object.assign(Object.create(oldObj), {name: "new Object2"});
    console.log(newObj2.name + " " + newObj2.number);

    let newObj3 = Object.create(oldObj, Object.getOwnPropertyDescriptors({name: "new Object3"}));
    console.log(newObj3.name + " " + newObj3.number);


    console.groupEnd();
}