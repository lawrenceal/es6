"use strict";

{
    console.group("proxy概念");

    var target = {};
    var proxy = new Proxy(target, {
        get: function get(target, property) {
            console.log(target);
            return "hello proxy property = " + property;
        }
    });
    console.log(proxy.title);

    var proxy1 = new Proxy(target, {});
    proxy1.a = "a";
    console.log(target.a);

    console.groupEnd();
}

{
    console.group("拦截器方法");

    var createArray = function createArray() {
        var arr = [].concat(Array.prototype.slice.call(arguments));

        return new Proxy(arr, {
            get: function get(target, propKey, receiver) {
                var index = Number(propKey);
                if (index < 0) {
                    propKey = index + target.length;
                }
                console.log(propKey);
                return Reflect.get(target, propKey, receiver);
            }
        });
    };
    console.log("createArray(1, 2, 3)[-1] = " + createArray(1, 2, 3)[-1]);

    console.groupEnd();
}