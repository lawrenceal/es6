"use strict";

{
    var promise = new Promise(function (resolve, reject) {
        //TODO 立即执行
        console.log("初始化了");
        setTimeout(function () {
            resolve("hello world");
        }, 1000);
    });

    promise.then(function (value) {
        console.log(value);
    });

    var getJSON = function getJSON(url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    var status = xhr.status;
                    if (status >= 200 && status <= 300 || status == 302) {
                        resolve(xhr.responseText);
                    } else {
                        reject(new Error(xhr.statusText));
                    }
                }
            };
            xhr.responseType = "json";
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send(null);
        });
    };

    /* let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {reject(new Error("p1 error"))}, 1000);
     });
      let p2 = new Promise((resolve, reject) => {
         setTimeout(() => {resolve(p1)}, 1000);
     });
      p2.then(value => {console.log(value)}).catch(value => {console.log(value)});*/
}

{
    console.group("then catch");

    var p1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("p1 value");
        }, 3000);
    });

    var p2 = new Promise(function (resolve, reject) {
        resolve("p2 value");
    });

    p2.then(function (value) {
        console.log(value);
        return "p2 return value"; //return p1;  TODO 会将返回结果作为参数，传入后一个回调函数
    }).then(function (p) {
        console.log(p);
    });

    var p3 = new Promise(function (resolve, reject) {
        resolve("p3");
        //x = x + 1; //chrome会显示内部抛出的错误
        throw new Error("error"); //TODO == reject(); 并且不会执行了
    });

    p3.then(function (value) {
        console.log(value);
        //throw new Error("then error"); //TODO 抛出的错误会显示在"外边"
    }).catch(function (error) {
        console.log(error);
    });

    var p4 = new Promise(function (resolve, reject) {
        resolve('p4');
        //setTimeout(() => { throw new Error('task promise inner error'); }, 1000); //TODO
    });

    p4.then(function (value) {
        console.log(value);
    });

    console.groupEnd();
}

{
    console.group("all race resolve() reject()");
    //TODO promise.all() 参数可以是具有Iterator接口，且返回的每个成员都是Promise实例（如果不是，自动调用resolve转换） e.g. Array

    var thenable = {
        then: function then() {
            console.log('this is thenable');
        }
    };
    Promise.resolve(thenable); //立即执行then方法

    var p = Promise.resolve("lawrence");
    p.then(function (value) {
        console.log(value + " resolved");
    });

    var _p = Promise.resolve();
    _p.then(function () {
        console.log("resolved");
    });

    console.groupEnd();
}

{
    var foo = function foo(val) {
        return new Promise(function (resolve) {
            resolve(val + 1);
        });
    };

    var gen = regeneratorRuntime.mark(function gen(param) {
        var val, val1, val2;
        return regeneratorRuntime.wrap(function gen$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return foo(param);

                    case 2:
                        val = _context.sent;
                        _context.next = 5;
                        return foo(val);

                    case 5:
                        val1 = _context.sent;
                        _context.next = 8;
                        return foo(val1);

                    case 8:
                        val2 = _context.sent;
                        return _context.abrupt("return", val2);

                    case 10:
                    case "end":
                        return _context.stop();
                }
            }
        }, gen, this);
    });

    var run = function run(g, value) {
        var iterator = g(value);

        function go(obj) {
            if (obj.done) {
                console.log("end value " + obj.value);
                return;
            }
            obj.value.then(function (value) {
                go(iterator.next(value));
            }).catch(function (value) {
                console.log("error " + value);
            });
        }

        go(iterator.next());
    };

    console.group("promise 应用");

    //加载图片
    var preloadImg = function preloadImg(path) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            image.onload = resolve;
            image.onerror = reject;
            image.src = path;
        });
    };

    run(gen, 1);

    console.groupEnd();
}