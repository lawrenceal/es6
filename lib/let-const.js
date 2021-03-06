"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

    //只在代码块内有效
    {
        var a = 1;
        var _b = 2;
    }

    console.log(a);

    try {
        console.log(b);
    } catch (error) {
        console.log("let 只在代码块内有效");
    }

    for (var i = 0; i < 1; i++) {
        console.log("i = " + i);
    }

    var arr = [];

    var _loop = function _loop(j) {
        arr[j] = function () {
            console.log("j = " + j);
        };
    };

    for (var j = 0; j < 2; j++) {
        _loop(j);
    }
    arr[0]();

    //不存在变量提升
    console.log(c);
    try {
        console.log(d);
    } catch (error) {
        console.log("let 不存在变量提升");
    }

    var c = 3;
    var d = 4;

    //暂时性死区 temporal dead zone TDZ 导致 typeof 可能会报错

    if (true) {
        try {
            _d = 5;
        } catch (error) {
            console.log("暂时性死区: let绑定块级作用域");
        }

        try {
            console.log(typeof _d === "undefined" ? "undefined" : _typeof(_d));
        } catch (error) {
            console.log("TDZ导致typeof报错");
        }

        console.log("typeof没有声明的变量 = " + (typeof undeclared_variable === "undefined" ? "undefined" : _typeof(undeclared_variable)));

        var _d = 5;
        console.log("d = " + _d);
    }

    //同一模块不允许重复声明
    function func(arg) {
        //let arg = 1;
    }
    func(1);

    //块级作用域
    {
        var e = 6;
        {
            var _e = 7;
            console.log("e = " + _e);
        }
    }

    //TODO 块级作用域的出现使得IIFE不在必要了
    //IIFE 写法
    (function () {
        var temp = "1";
    })();

    //块级作用域写法
    {
        var temp = "1";
    }

    //TODO ES5规定函数只能在函数作用域和顶级作用域中声明， 不能在块级作用域总声明。严格模式下会报错
    //TODO ES6引入块级作用域，明确规定允许在块级作用域中声明函数
    "use strict";

    /*if(true){
        function func1(){console.log("this is func1")}
    }
    func1();*/

    function func2() {
        console.log("outside");
    }
    (function () {
        /* if(false){
             function func2(){console.log("inside")} //error
         }*/
        try {
            func2();
        } catch (error) {
            console.log(error);
        }

        function func2() {
            console.log("inside");
        }
    })();

    //TODO 环境差异较大，避免在块级作用域中声明函数，如果确实需要，写成函数表达式。

    //const 常量，值不能改变，一旦声明必须初始化，块级作用域有效，存在TDZ

    var foo = {};
    foo.prop = 123;
    console.log("复合数据的const保存的是地址" + foo.prop);

    //es5只有两种声明变量的方法： var function es6: let const var function class import

    //TODO let const class命令声明的全局变量，不再是"全局对象的属性"，为了保持兼容var和function声明的全局变量依旧是全局对象的属性

})();