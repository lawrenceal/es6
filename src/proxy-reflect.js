{
    console.group("proxy概念");


    let target = {};
    let proxy = new Proxy(target, {
        get(target, property){
            console.log(target);
            return "hello proxy property = " + property;
        }
    });
    console.log(proxy.title);


    let proxy1 = new Proxy(target, {});
    proxy1.a = "a";
    console.log(target.a);


    console.groupEnd();
}

{
    console.group("拦截器方法");

    let createArray = function(){
        let arr = [...arguments];

        return new Proxy(arr, {
            get(target, propKey, receiver){
                let index = Number(propKey);
                if(index < 0){
                    propKey = index + target.length;
                }
                console.log(propKey);
                return Reflect.get(target, propKey, receiver);
            }
        });
    };
    console.log("createArray(1, 2, 3)[-1] = " + (createArray(1, 2, 3)[-1]));


    console.groupEnd();
}