'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{

    var arr = [1, 2, 3, 1, 3];

    var set = new Set();

    arr.map(function (item) {
        set.add(item);
    });

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            console.log(i);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    console.log("set.size = " + set.size);

    //TODO 接收数组或者类数组作为参数，用来初始化
    console.log([].concat(_toConsumableArray(new Set([1, 2, 3, 1, 2])))); //TODO 数组去重
    console.log(new Set(document.querySelectorAll('li')));

    set.add(NaN);
    set.add(NaN); //认为NaN相等
    set.add(5);
    set.add('5');
    set.add({});
    set.add({});
    set.add(0);
    set.add(-0); //认为0与-0相等

    console.log(set);
}

{
    console.group("set实例的属性和方法");

    var _set = new Set();

    _set.add(1).add(2).add(3); // add()

    console.log(_set.size); //size 属性

    console.log(_set.has(1)); //has()

    _set.delete(2); // delete()

    console.log(_set.has(2));

    _set.clear(); // clear()

    console.log(_set);

    console.log(Array.from(new Set([1, 2, 1, 2]))); //TODO 数组去重


    //keys() values() entries()
    var set1 = new Set(['hello', 'world']);

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = set1.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            console.log("key = " + key);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = set1.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var value = _step3.value;

            console.log("value = " + value);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = set1.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var item = _step4.value;

            console.log(item);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    console.log(Set.prototype.values === Set.prototype[Symbol.iterator]); //TODO 默认遍历器生成函数

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = set1[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var x = _step5.value;

            console.log(x);
        }

        //foreach()
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    set1.forEach(function (value, key, set) {
        return console.log("value = " + value + " key = " + key);
    });

    //遍历的应用
    console.log([].concat(_toConsumableArray(new Set(['red', 'green', 'blue']))));

    //数组的map filter用于set
    var set2 = new Set([1, 2, 3]);

    set2 = new Set([].concat(_toConsumableArray(set2)).map(function (x) {
        return x * 2;
    }));

    console.log(set2);

    set2 = new Set([].concat(_toConsumableArray(set2)).filter(function (x) {
        return x < 4;
    }));

    console.log(set2);

    //set的并集 交集 差集

    var set3 = new Set([1, 2, 3]),
        set4 = new Set([1, 4, 5]);

    console.log(new Set([].concat(_toConsumableArray(set3), _toConsumableArray(set4)))); // 并集

    console.log(new Set([].concat(_toConsumableArray(set3)).filter(function (x) {
        return set4.has(x);
    }))); //交集

    console.log(new Set([].concat(_toConsumableArray(set3)).filter(function (x) {
        return !set4.has(x);
    }))); //差集


    console.groupEnd();
}

{
    console.group("WeakSet");

    console.log(new WeakSet([[1, 2], [2, 3]]));

    var ws = new WeakSet(),
        obj = {};

    ws.add(window);

    ws.add(obj);

    console.log(ws.has(obj));

    ws.delete(obj);

    console.log(ws.has(obj));

    console.groupEnd();
}

{
    console.group("Map");

    var _obj = {
        "": undefined
    };

    console.log(_obj);
    console.log(_obj[""]);

    var ul = document.querySelector("ul");

    _obj[ul] = "ul";
    console.log(_obj['[object HTMLUListElement]']);
    console.log(_obj[ul]); //TODO 实质上调用的是 toString();

    var map = new Map();
    map.set(_obj, "obj"); //set
    console.log(map.get(_obj)); //get
    console.log(map.has(_obj)); //has
    map.delete(_obj); //delete return Boolean
    console.log(map.has(_obj));
    map.clear();
    console.log(map);

    console.log(new Map([["name", "lawrence"], ["age", 21]]).size);

    map.set(['a'], 'a');
    console.log(map.get(['a'])); //TODO undefined 绑定的是地址

    map.set(NaN, "NaN1");
    map.set(NaN, "NaN2");
    console.log(map.get(NaN)); // 认为NaN等于NaN

    map.set(0, "+0");
    map.set(-0, "-0");
    console.log(map.get(0)); // 认为0等于-0

    //keys values entries foreach

    console.log(map[Symbol.iterator] == map.entries); //默认遍历接口

    console.log([].concat(_toConsumableArray(map.keys()))); //TODO 转为数组

    console.log([].concat(_toConsumableArray(map.values())));

    console.log([].concat(_toConsumableArray(map.entries())));

    console.groupEnd();
}