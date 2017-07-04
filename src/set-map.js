{

    let arr = [1, 2, 3, 1, 3];

    let set = new Set();

    arr.map(item => { set.add(item) });

    for(let i of set){
        console.log(i);
    }
    console.log("set.size = " + set.size);

    //TODO 接收数组或者类数组作为参数，用来初始化
    console.log([...new Set([1, 2, 3, 1, 2])]); //TODO 数组去重
    console.log(new Set(document.querySelectorAll('li')));

    set.add(NaN);
    set.add(NaN);//认为NaN相等
    set.add(5);
    set.add('5');
    set.add({});
    set.add({});
    set.add(0);
    set.add(-0);//认为0与-0相等

    console.log(set);

}

{
    console.group("set实例的属性和方法");

    let set = new Set();

    set.add(1).add(2).add(3);// add()

    console.log(set.size); //size 属性

    console.log(set.has(1)); //has()

    set.delete(2); // delete()

    console.log(set.has(2));

    set.clear(); // clear()

    console.log(set);

    console.log(Array.from(new Set([1, 2, 1, 2])));//TODO 数组去重


    //keys() values() entries()
    let set1 = new Set(['hello', 'world']);

    for(let key of set1.keys()){
        console.log("key = " + key);
    }

    for(let value of set1.values()){
        console.log("value = " + value);
    }

    for(let item of set1.entries()){
        console.log(item);
    }

    console.log(Set.prototype.values === Set.prototype[Symbol.iterator]);//TODO 默认遍历器生成函数

    for(let x of set1){
        console.log(x);
    }


    //foreach()
    set1.forEach((value, key, set) => console.log("value = " + value + " key = " + key));


    //遍历的应用
    console.log([...new Set(['red', 'green', 'blue'])]);

    //数组的map filter用于set
    let set2 = new Set([1, 2, 3]);

    set2 = new Set([...set2].map(x => x * 2));

    console.log(set2);

    set2 = new Set([...set2].filter(x => x < 4));

    console.log(set2);

    //set的并集 交集 差集

    let set3 = new Set([1, 2, 3]), set4 = new Set([1, 4, 5]);

    console.log(new Set([...set3, ...set4]));// 并集

    console.log(new Set([...set3].filter(x => set4.has(x)))); //交集

    console.log(new Set([...set3].filter(x => !set4.has(x)))); //差集


    console.groupEnd();
}

{
    console.group("WeakSet");

    console.log(new WeakSet([[1, 2], [2, 3]]));

    let ws = new WeakSet(), obj = {};

    ws.add(window);

    ws.add(obj);

    console.log(ws.has(obj));

    ws.delete(obj);

    console.log(ws.has(obj));


    console.groupEnd();
}

{
    console.group("Map");

    let obj = {
        "": undefined
    };

    console.log(obj);
    console.log(obj[""]);

    let ul = document.querySelector("ul");

    obj[ul] = "ul";
    console.log(obj['[object HTMLUListElement]']);
    console.log(obj[ul]); //TODO 实质上调用的是 toString();

    let map = new Map();
    map.set(obj, "obj"); //set
    console.log(map.get(obj)); //get
    console.log(map.has(obj)); //has
    map.delete(obj); //delete return Boolean
    console.log(map.has(obj));
    map.clear();
    console.log(map);

    console.log(new Map([["name", "lawrence"], ["age", 21]]).size);

    map.set(['a'], 'a');
    console.log(map.get(['a'])); //TODO undefined 绑定的是地址

    map.set(NaN, "NaN1");
    map.set(NaN, "NaN2");
    console.log(map.get(NaN));// 认为NaN等于NaN

    map.set(0, "+0");
    map.set(-0, "-0");
    console.log(map.get(0));// 认为0等于-0

    //keys values entries foreach

    console.log(map[Symbol.iterator] == map.entries); //默认遍历接口

    console.log([...map.keys()]); //TODO 转为数组

    console.log([...map.values()]);

    console.log([...map.entries()]);




    console.groupEnd();
}

