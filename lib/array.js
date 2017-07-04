"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
    //iterator接口

    //TODO 扩展运算符也可以将某些数据结构转换为数组，底层调用的是symbol.iterator,所以只有具有iterator接口才能转换

    var func = function func() {
        var arg = [].concat(Array.prototype.slice.call(arguments));
        var arg1 = Array.from(arguments);
        console.log(arg);
        console.log(arg1);
    };

    //Array.from TODO 类数组对象(本质一点必须就有length属性)， 可遍历对象转换成真正的数组

    var arrayLike = {
        0: "hello",
        1: true,
        length: 2
    };

    console.log(arrayLike);

    console.log(Array.prototype.slice.call(arrayLike)); //es5

    console.log(Array.from(arrayLike)); //es6

    console.log(Array.from('hello world'));

    func(1, 2, 3);

    try {
        var arr = [].concat(_toConsumableArray(arrayLike)); //error
    } catch (error) {
        console.log(error);
    }

    var backArr = Array.from(arrayLike, function (item) {
        return typeof item === "undefined" ? "undefined" : _typeof(item);
    });
    console.log(backArr);

    console.log("𠮷𠮷𠮷".length); //6
    console.log(Array.from("𠮷𠮷𠮷").length); // 3 TODO 获取字符串长度
}

{
    var ArrayOf = function ArrayOf() {
        return Array.from(arguments);
    };

    //Array.of() 弥补Array构造函数的不足

    console.log([3]);
    console.log(new Array(3)); //[undefined, undefined, undefined];
    console.log(Array.of(3)); //[3]
    console.log(Array.of());

    console.log(ArrayOf(3)); //[3]
}

{
    //数组实例 copyWithin
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 5));

    console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));
}

{
    //find findIndex (找到符合条件的第一个): filter indexOf
    console.log([1, 2, 3, -1].find(function (item, index, arr) {
        return item < 0;
    })); //没有找到返回undefined

    console.log([1, 2, 3, -1].findIndex(function (item, index, arr) {
        return item < 0;
    })); //没有找到返回-1

    console.log([NaN].indexOf(NaN)); //-1

    console.log([NaN].findIndex(function (y) {
        return Object.is(NaN, y);
    })); //0 TODO Object.is
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
    } catch (error) {
        console.log(error);
    }

    console.log(['a', 'b'].entries());
}

{
    //includes indexOf()后者不能识别NaN 切不够语义化需要比较结果 -1
    console.log("[1, NaN].includes(NaN) = " + [1, NaN].includes(NaN)); //true

    console.log("[1, NaN, 2].includes(NaN, 2) = " + [1, NaN, 2].includes(NaN, 2)); //true

    console.log("[1, NaN, 2].includes(NaN, 2) = " + [1, NaN, 2].includes(NaN, -2)); //true

    console.log("[1, NaN, 2].includes(NaN, 2) = " + [1, NaN, 2].includes(NaN, -4)); //从0开始
}

{
    //数组的空位 不是undefined

    console.log("0 in [undefined, undefined] = " + (0 in [undefined, undefined]));

    console.log("0 in [ , ] = " + (0 in [,]));

    //forEach filter some every都会跳过空位
    //map会跳过空位，但会保留这个值
    // toString join 会将空位视为undefined, 而undefined和null会被处理成空字符串。

    console.log("[ , 'a', null, 'b', undefined].toString() = " + [, 'a', null, 'b', undefined].toString());

    //TODO ES6明确将空位转换为undefined
    console.log(Array.from(['a',, 'b']));
    console.log(['a',, 'b'].concat());

    var _arr = [,,];
    for (var i = 0; i < _arr.length; i++) {
        console.log(1);
    }
}