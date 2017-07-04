{
    console.log(typeof Symbol());

    console.log(Symbol("hello"));

    console.log(Symbol("world").toString());

    console.log("Symbol() === Symbol() = " + (Symbol() === Symbol()));

    console.log("Boolean(Symbol('boolean')) = " + (Boolean(Symbol("boolean"))));

    try{
        Number(Symbol("number"));
    }catch (error){
        console.log(error);
    }
}

{
    console.group("作为属性名的Symbol"); //TODO 不能用点运算符

    let symbol = Symbol(), mySymbol = Symbol();

    let obj = {
        [symbol]: "name"
    };

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

    let s1 = Symbol.for("foo"), s2 = Symbol.for('foo');
    console.log(s1 === s2);
    console.log(Symbol.keyFor(s1));

    let s3 = Symbol("foo");
    console.log(Symbol.keyFor(s3));

    console.groupEnd();
}

{
    console.group("内置的symbol值");

    //Symbol.hasInstance

    class MyClass{
        [Symbol.hasInstance](foo){
            return foo instanceof Array;
        }
    }
    console.log("[] instanceof new MyClass() = " + ([] instanceof new MyClass()));


    //Symbol.isConcatSpreadable
    let arr = ['a', 'b'];
    console.log(['c'].concat(arr, 'd')); //4) ["c", "a", "b", "d"]
    console.log(arr[Symbol.isConcatSpreadable]); //undefined
    arr[Symbol.isConcatSpreadable] = false;
    console.log(['c'].concat(arr, 'd')); //(3) ["c", Array(2), "d"]

    let obj = {0: 'a', 1: 'b', length: 2}; //TODO 类数组对象 Symbol.isConcatSpreadable 默认 false；
    console.log(['c'].concat(obj, 'd')); // ["c", Object, "d"]
    obj[Symbol.isConcatSpreadable] = true;
    console.log(['c'].concat(obj, 'd')); //["c", "a", "b", "d"]


    //Symbol.species

    //Symbol.match

    //Symbol.replace

    //Symbol.search

    //Symbol.spit

    //Symbol.iterator

    //Symbol.toPrimitive

    //Symbol.toStringTag

    let collection = {
        get [Symbol.toStringTag](){
            return "collection";
        }
    };
    console.log(Object.prototype.toString.call(collection)); //[object collection]

    console.groupEnd();
}