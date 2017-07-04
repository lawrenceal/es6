(() => {

    //二进制和八进制表示法
    console.log(0o11);
    console.log(0b11);

    console.log(Number('0o11')); //二进制和八进制字符串 要用Number转换
    console.log(parseInt('0o11', 10)); //TODO parseInt不识别

    console.log(Number('0b11'));
    console.log(parseInt('0b11', 10));


    //Number.isFinite(), Number.isNaN()

    //TODO isFinite isNaN会将非数值转换为数值， Number.isFinite(), Number.isNaN()只对数值有效
    console.log("isFinite('1') = " + isFinite("1"));
    console.log("Number.isFinite('1') = " + Number.isFinite('1'));
    console.log("isNaN(true'1') = " + isNaN(true));
    console.log("Number.isNaN(true) = " + Number.isNaN(true));


    //Number.parseInt(), Number.parseFloat() 与全局 parseInt parseFloat行为完全一样


    //Number.isInteger() TODO 不做类型转换
    console.log("Number.isInteger(1) = " + Number.isInteger(1));
    console.log("Number.isInteger(1.0) = " + Number.isInteger(1.0));
    console.log("Number.isInteger(true) = " + Number.isInteger(true)); //false
    console.log("Number.isInteger('1') = " + Number.isInteger('1'));


    // Number.EPSILON 用户浮点数计算误差
    console.log(Number.EPSILON);
    console.log("Number.EPSILON.toFixed(20) = " + Number.EPSILON.toFixed(20));

    console.log("0.1 + 0.2 - 0.3 < Number.EPSILON = " + (0.1 + 0.2 - 0.3 < Number.EPSILON));


    //Number.isSafeInteger() TODO 不做类型转换
    //Number.MAX_SAFE_INTEGER Number.MIN_SAFE_INTEGER

})();

//Math对象的扩展
{
    //Math.trunc() TODO 会进行数值转换
    Math.trunc = Math.trunc || function(x) { return x < 0 ? Math.ceil(x) : Math.floor(x);};
    console.log("Math.trunc(1.0) = " + Math.trunc(1.1));
    console.log("Math.trunc(-1.1) = " + Math.trunc(-1.1));
    console.log("Math.trunc(-0.12) = " + Math.trunc(-0.12));

    console.log("Math.trunc(true) = " + Math.trunc(true));
    console.log("Math.trunc('true') = " + Math.trunc('true'));


    //Math.sign TODO 会进行数值转换
    console.log("Math.sign(2.2) = " + Math.sign(2.2));
    console.log("Math.sign(-2.2) = " + Math.sign(-2.2));
    console.log("Math.sign(-0) = " + Math.sign(-0));
    console.log("Math.sign(0) = " + Math.sign(0));
    console.log("Math.sign(true) = " + Math.sign(true));
    console.log("Math.sign('true') = " + Math.sign("true"));


    //Math.cbrt() 立方根


    //Math.clz32 32位二进制形式表示有多少个前导0


    //...


    //指数运算符
    console.log("2 ** 3 = " + (2 ** 3));
}

