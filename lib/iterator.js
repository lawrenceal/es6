"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
    /**
     * 遍历器生成函数
     * @param array
     * @returns {{next: next}}
     */
    var makeIterator = function makeIterator(array) {
        var index = 0;

        return {
            next: function next() {
                return index < array.length ? { value: array[index++], done: false } : { value: undefined, done: true };
            }
        };
    };

    //遍历器对象


    var iterator = makeIterator([1, 2]);
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

{
    console.group("数据结构的默认Iterator接口");

    //TODO 有三类数据结构原生具备Iterator接口: 数组、某些类似数组的对象、Set和Map结构。

    var RangeIterator = function () {
        function RangeIterator(start, stop) {
            _classCallCheck(this, RangeIterator);

            this.start = start;
            this.stop = stop;
        }

        _createClass(RangeIterator, [{
            key: Symbol.iterator,
            value: function value() {
                return this;
            }
        }, {
            key: "next",
            value: function next() {
                var value = this.start;
                if (value <= this.stop) {
                    this.start++;
                    return { value: value, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        }]);

        return RangeIterator;
    }();

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {

        for (var _iterator = new RangeIterator(1, 3)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            value = _step.value;

            console.log("RangeIterator " + value);
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

    var iterable = _defineProperty({
        0: 'a',
        1: 'b',
        length: 2
    }, Symbol.iterator, Array.prototype[Symbol.iterator]);

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _item = _step2.value;

            console.log(_item);
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

    console.groupEnd();
}

{
    //字符串的iterator
    var str = "hello";

    var strIterator = str[Symbol.iterator]();

    console.log(strIterator.next());

    //iterator方法的最简单实现，Generator函数
    var obj = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return "hello";

                    case 2:
                        _context.next = 4;
                        return "world";

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = obj[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            item = _step3.value;

            console.log(item);
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
}

{
    console.group("for of");

    //数组
    var arr = ['blue', 'red', 'yellow'];
    arr.name = "color";

    var arrIterator = arr[Symbol.iterator]();

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = arr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _item2 = _step4.value;

            console.log("for of " + _item2);
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

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = arrIterator[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var item1 = _step5.value;

            console.log("for of iterator " + item1);
        }
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

    for (var i in arr) {
        console.log("for in " + i);
    }

    //set map

    //keys() values() entries()

    //类似数组的对象 arguments string NodeList TODO 不具备Iterator接口的 Array.from()转为数组

    //对象 keys() TODO 直接复制Array.prototype[Symbol.iterator]


    /**
     * 与其他语法比较
     * for 语法繁琐
     * forEach 无法跳出循环 break命令和return命令都不能
     * for in 适合枚举对象 对于数组枚举的键名书数组 0、1，还会遍历其他的属性，包括原型上的属性
     * */

    console.groupEnd();
}