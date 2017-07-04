{
    class Point{
        constructor(x, y){
            this.x = x;
            this.y = y;
        }//TODO 不允许有 ,

        toString(){ //TODO 不允许有function
            return this.x + " : " +  this.y;
        }

        sayHi(){
            console.log("hi");
        }
    }

    Point.prototype.sayHi(); //TODO 类的所有方法都在 prototype上


    console.log(typeof Point);//function
    console.log(Point.prototype.constructor === Point); //true

    Object.assign(Point.prototype, {
        getX(){
            return this.x;
        },
        getY(){
            return this.y;
        }
    });

    let point = new Point(1, 2);
    console.log(point.getY());

    //TODO 类内部的所有方法都是不可枚举的
    console.log(Object.keys(Point.prototype));
    console.log(Object.getOwnPropertyNames(Point.prototype));


    //TODO class不存在变量提升
}

{
    console.group('constructor');
    class Foo{ //TODO 默认会创建 constructor

        toString(){
            return 'Foo';
        }
    }
    console.log(new Foo().toString());


    class Bar{
        constructor(){
            return Object.create(null); //TODO 可以返回其他对象
        }
    }
    let instance = new Bar();
    console.log(instance instanceof Bar);//false


    //TODO class不能直接调用 报错


    //表达式 My可以省略
    let MyClass = class My{ //TODO My内部使用
        getName(){
            return My.name;
        }
    };
    console.log(new MyClass().getName());
    console.log(MyClass.name + "_________"); //TODO name 属性总是跟在 class后边的类名

    //立即执行
    let person = new class{
        constructor(name){
            this.name = name;
        }

        getName(){
            return this.name;
        }

    }('lawrence');
    console.log(person.getName());

    console.groupEnd();
}

{
    console.group("私有方法");


    //将私有方法移除模块 ？
    class Animal{
        setName(name){
            setAnimalName.call(this, name);
        }
        getName(){
            return this.name;
        }
    }

    function setAnimalName(name){
        this.name = name;
    }
    let animal = new Animal();
    animal.setName('cat');
    console.log(animal.getName());

    //方法名为Symbol值
    const getAge = Symbol('getAge');
    class Tree{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        [getAge](){
            return this.age;
        }
    }
    console.log(new Tree('杨柳', 2)[getAge]());


    //TODO 类和模块的内部默认就是严格模式

    console.groupEnd();
}

{
    console.group("继承");

    //TODO 子类没有this, 需要调用super继承父类的this

    class Animal{
        constructor(name){
            this.name = name;
        }

        getName(){
            return this.name;
        }
    }

    class Person extends Animal{//TODO 默认添加 constructor super

    }

    console.log(new Person('person').getName());

    //两条继承链 __proto__ prototype
    console.log(Person.__proto__ === Animal);//TODO ? true
    console.log(Person.prototype.__proto__ === Animal.prototype);// true


    //继承目标
    class A{

    }
    console.log(A.__proto__ === Function.prototype);//true TODO A是一个普通函数
    console.log(A.prototype.__proto__);

    class B extends Object{

    }
    console.log(B.__proto__);


    //TODO 判断一个类是否继承另一个类
    console.log(Object.getPrototypeOf(Person) === Animal);//true


    //实例的__proto__
    console.log(new Person().__proto__.__proto__ === new Animal().__proto__);//true


    console.groupEnd();
}

{
    console.group("继承原生构造函数");

    //TODO 原生构造函数继承 寄生组合式继承
    function MyArray() {
        Array.apply(this, arguments);
    }
    MyArray.prototype = Object.create(Array.prototype, {
        constructor: {
            value: 'MyArray',
            configurable: true,
            enumerable: false,
            writable: true
        }
    });
    let arr = new MyArray(1, 2);
    arr[0] = 'a';
    console.log(arr[0]);
    console.log(arr.length);


    class NewArray extends Array{

    }
    let newArr = new NewArray('z', 'x');
    console.log(newArr[0]);
    console.log(newArr.length);

    //TODO 无法通过super向Object父类传参， ES6改变了Object构造函数的行为，不是通过new Object这种形式调用，Object构造函数会忽略参数。

    console.groupEnd();
}

{
    console.group('setter getter');

    class B{

        constructor(name){
            this.realAge = name;
        }

        set age(value){
            this.realAge = value;
        }

        get age(){
            return this.realAge;
        }
    }
    let b = new B();
    b.age = "hi";
    console.log(b.age);
    console.log(Reflect.getOwnPropertyDescriptor(B.prototype, 'age'));

    console.groupEnd();
}

{
    console.group('类的静态方法');

    //静态方法不会被 TODO 实例继承

    class Foo{

        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        static getNumber(){
            return "this is static function";
        }

        getName(){
            return this.name;
        }
    }
    try{
        new Foo().getNumber();
    }catch (error){
        console.log(error);
    }

    class Bar extends Foo{
        constructor(name, age){
            super(name, age);
            this.name = name;
            this.age = age;
        }

        getOwnNumber(){
            console.log(super.age);//undefined
            try{
                return super.getNumber(); //TODO super不能调用父类的静态方法
            }catch (error){
                return super.getName();
            }
        }

        static getStaticNumber(){  //TODO 能够在子类的static函数中通过super调用父类的static方法
            console.log(super.age);//undefined
            return super.getNumber();
        }
    }

    console.log(Bar.getNumber());
    console.log(new Bar('kitty', 24).getOwnNumber());
    console.log(Bar.getStaticNumber());
    console.groupEnd();
}

{
    console.group('静态属性 实例属性');

    class Bar{

    }
    Bar.number = 'out property number';
    console.log(new Bar().number);


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
    console.group("new target");

    function Person(name){
        if(new.target !== undefined){
            this.name = name;
        }else{
            throw new Error('must to be new');
        }
    }
    console.log(new Person('new person').name);
    try{
        Person();
    }catch (error){
        console.log(error);
    }

    class Animal{
        constructor(){
            console.log(new.target);
            if(new.target === Animal){
                throw new Error('不能实例化');
            }
        }
    }

    class Cat extends Animal{

    }
    try {
        new Animal();
    }catch (error){
        console.log(error)
    }
    new Cat();

    console.groupEnd();
}