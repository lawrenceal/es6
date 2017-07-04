{

    //Array.from TODO 类数组对象(本质一点必须就有length属性)， 可遍历对象转换成真正的数组

    let arrayLike = {
        0: "hello",
        1: true,
        length: 2,
    };

    console.log(arrayLike);

    console.log(Array.prototype.slice.call(arrayLike)); //es5

    console.log(Array.from(arrayLike));//es6

    console.log(Array.from('hello world'));//iterator接口

    //TODO 扩展运算符也可以将某些数据结构转换为数组，底层调用的是symbol.iterator,所以只有具有iterator接口才能转换

    function func(){
        let arg = [...arguments];
        let arg1 = Array.from(arguments);
        console.log(arg);
        console.log(arg1);
    }

    func(1, 2, 3);

    try {
        let arr = [...arrayLike]; //error
    } catch (error){
        console.log(error);
    }


    let backArr = Array.from(arrayLike, item => typeof item);
    console.log(backArr);

    console.log("𠮷𠮷𠮷".length); //6
    console.log(Array.from("𠮷𠮷𠮷").length); // 3 TODO 获取字符串长度

}

{
    //Array.of() 弥补Array构造函数的不足

    console.log([3]);
    console.log(new Array(3)); //[undefined, undefined, undefined];
    console.log(Array.of(3)); //[3]
    console.log(Array.of());

    function ArrayOf(){
        return Array.from(arguments);
    }
    console.log(ArrayOf(3));//[3]

}

{
    //数组实例 copyWithin
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 5));

    console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));
}

{
    //find findIndex (找到符合条件的第一个): filter indexOf
    console.log([1, 2, 3, -1].find((item, index ,arr) => item < 0)); //没有找到返回undefined

    console.log([1, 2, 3, -1].findIndex((item, index ,arr) => item < 0)); //没有找到返回-1

    console.log([NaN].indexOf(NaN));//-1

    console.log([NaN].findIndex(y => Object.is(NaN, y))); //0 TODO Object.is

}

{
    //fill填充数组
    console.log(['a', 'b', 'c'].fill(7, 1, 3));

    console.log(['a', 'b', 'c'].fill(7));
}

{
    //数组实例的 entries()，keys()和values() 返回一个一个遍历器对象
    console.log(['a', 'b'].keys());

    try {
        ['a', 'b'].values();
    }catch(error) {
        console.log(error);
    }

    console.log(['a', 'b'].entries());

}

{
    //includes indexOf()后者不能识别NaN 切不够语义化需要比较结果 -1
    console.log("[1, NaN].includes(NaN) = " + [1, NaN].includes(NaN));//true

    console.log("[1, NaN, 2].includes(NaN, 2) = " + [1, NaN, 2].includes(NaN, 2)); //true

    console.log("[1, NaN, 2].includes(NaN, 2) = " + [1, NaN, 2].includes(NaN, -2));//true

    console.log("[1, NaN, 2].includes(NaN, 2) = " + [1, NaN, 2].includes(NaN, -4)); //从0开始
}

{
    //数组的空位 不是undefined

    console.log("0 in [undefined, undefined] = " + ( 0 in [undefined, undefined]));

    console.log("0 in [ , ] = " + (0 in [ , ]));

    //forEach filter some every都会跳过空位
    //map会跳过空位，但会保留这个值
    // toString join 会将空位视为undefined, 而undefined和null会被处理成空字符串。

    console.log("[ , 'a', null, 'b', undefined].toString() = " + [ , 'a', null, 'b', undefined].toString());

    //TODO ES6明确将空位转换为undefined
    console.log(Array.from(['a',,'b']));
    console.log([...['a',,'b']]);

    let arr = [ , , ];
    for(let i = 0; i < arr.length; i++){
        console.log(1);
    }

}