"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
    var helloWorldGenerator = regeneratorRuntime.mark(function helloWorldGenerator() {
        return regeneratorRuntime.wrap(function helloWorldGenerator$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return "hello";

                    case 2:
                        _context.next = 4;
                        return "world";

                    case 4:
                        return _context.abrupt("return", "ending");

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, helloWorldGenerator, this);
    });


    var iterator = helloWorldGenerator();

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = helloWorldGenerator()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

    var obj = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return 1;

                    case 2:
                        _context2.next = 4;
                        return 2;

                    case 4:
                        _context2.next = 6;
                        return 3;

                    case 6:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee, this);
    }));

    console.log([].concat(_toConsumableArray(obj)));

    console.log(iterator[Symbol.iterator]() === iterator); //true
}

{
    var yoo = regeneratorRuntime.mark(function yoo(x) {
        var y, z;
        return regeneratorRuntime.wrap(function yoo$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return x + 1;

                    case 2:
                        _context3.t0 = _context3.sent;
                        y = 2 * _context3.t0;
                        _context3.next = 6;
                        return y / 3;

                    case 6:
                        z = _context3.sent;
                        return _context3.abrupt("return", x + y + z);

                    case 8:
                    case "end":
                        return _context3.stop();
                }
            }
        }, yoo, this);
    });

    console.group("next");

    var iterator1 = yoo(5);

    console.log(iterator1.next());
    console.log(iterator1.next());
    console.log(iterator1.next());

    var iterator2 = yoo(5);

    console.log(iterator2.next());
    console.log(iterator2.next(6));
    console.log(iterator2.next(1)); // y: 12 z: 1 x: 5

    console.groupEnd();
}

{
    var foo = regeneratorRuntime.mark(function foo() {
        return regeneratorRuntime.wrap(function foo$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return 1;

                    case 2:
                        _context4.next = 4;
                        return 2;

                    case 4:
                        return _context4.abrupt("return", 3);

                    case 5:
                    case "end":
                        return _context4.stop();
                }
            }
        }, foo, this);
    });
    var fibonacci = regeneratorRuntime.mark(function fibonacci() {
        var prev, curr, _ref;

        return regeneratorRuntime.wrap(function fibonacci$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        prev = 0, curr = 1;

                    case 1:
                        if (!(curr < Number.MAX_VALUE)) {
                            _context5.next = 9;
                            break;
                        }

                        _ref = [curr, prev + curr]; //TODO 避免无限循环

                        prev = _ref[0];
                        curr = _ref[1];
                        _context5.next = 7;
                        return curr;

                    case 7:
                        _context5.next = 1;
                        break;

                    case 9:
                    case "end":
                        return _context5.stop();
                }
            }
        }, fibonacci, this);
    });

    console.group("for of");

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {

        for (var _iterator2 = foo()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;
            // 1 ,2 TODO 没有3 为true停止且不包含
            console.log(item);
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

        for (var _iterator3 = fibonacci()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var val2 = _step3.value;

            if (val2 > 30) {
                break;
            }
            console.log(val2);
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

    var prev = 3,
        curr = 4;


    var x = curr;
    curr = prev + curr;
    prev = x;

    //[prev, curr] = [curr, prev + curr];  //4 , 7

    console.log(prev);
    console.log(curr);

    console.groupEnd();
}

{
    console.group("throw()");

    var g = regeneratorRuntime.mark(function g() {
        return regeneratorRuntime.wrap(function g$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.prev = 0;
                        _context6.next = 3;
                        return 1;

                    case 3:
                        _context6.next = 8;
                        break;

                    case 5:
                        _context6.prev = 5;
                        _context6.t0 = _context6["catch"](0);

                        console.log('inner error ' + _context6.t0);

                    case 8:
                    case "end":
                        return _context6.stop();
                }
            }
        }, g, this, [[0, 5]]);
    });

    var _i = g();
    _i.next();

    try {
        _i.throw('a');
        _i.throw('b'); //TODO 被外部捕获 如果Generator函数没有try catch代码块，那么也会被外部捕获
    } catch (error) {
        console.log('outer error ' + error);
    }

    var gen = regeneratorRuntime.mark(function gen() {
        return regeneratorRuntime.wrap(function gen$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.prev = 0;
                        _context7.next = 3;
                        return console.log('a');

                    case 3:
                        _context7.next = 8;
                        break;

                    case 5:
                        _context7.prev = 5;
                        _context7.t0 = _context7["catch"](0);

                        console.log("error a " + _context7.t0);

                    case 8:
                        _context7.prev = 8;
                        _context7.next = 11;
                        return console.log('b');

                    case 11:
                        _context7.next = 16;
                        break;

                    case 13:
                        _context7.prev = 13;
                        _context7.t1 = _context7["catch"](8);

                        console.log("error b " + _context7.t1);

                    case 16:
                        _context7.next = 18;
                        return console.log('c');

                    case 18:
                    case "end":
                        return _context7.stop();
                }
            }
        }, gen, this, [[0, 5], [8, 13]]);
    });

    var it = gen();

    it.next();

    it.throw('b'); //TODO throw方法被捕获后，会附带执行下一次的next方法

    it.next();

    var generator = regeneratorRuntime.mark(function generator() {
        return regeneratorRuntime.wrap(function generator$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        _context8.next = 2;
                        return 1;

                    case 2:
                        console.log("第一次调用了？");
                        throw new Error("报错了！");

                    case 6:
                        _context8.next = 8;
                        return 3;

                    case 8:
                    case "end":
                        return _context8.stop();
                }
            }
        }, generator, this);
    });

    var _iterator4 = generator();

    console.log(_iterator4.next());
    try {
        _iterator4.throw("iterator throw");
    } catch (error) {
        console.log(error);
    }
    console.log(_iterator4.next());

    console.groupEnd();
}

{
    var _gen = regeneratorRuntime.mark(function _gen() {
        return regeneratorRuntime.wrap(function _gen$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _context9.next = 2;
                        return 1;

                    case 2:
                        _context9.next = 4;
                        return 2;

                    case 4:
                    case "end":
                        return _context9.stop();
                }
            }
        }, _gen, this);
    });

    var _g = regeneratorRuntime.mark(function _g() {
        return regeneratorRuntime.wrap(function _g$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        _context10.next = 2;
                        return 1;

                    case 2:
                        _context10.prev = 2;
                        _context10.next = 5;
                        return 2;

                    case 5:
                        _context10.next = 7;
                        return 3;

                    case 7:
                        _context10.prev = 7;
                        _context10.next = 10;
                        return 4;

                    case 10:
                        return _context10.finish(7);

                    case 11:
                        _context10.next = 13;
                        return 6;

                    case 13:
                    case "end":
                        return _context10.stop();
                }
            }
        }, _g, this, [[2,, 7, 11]]);
    });

    console.group("return()");


    var _i2 = _gen();
    console.log(_i2.return(3));
    console.log(_i2.next());

    var _it = _g();
    console.log(_it.next());
    console.log(_it.next());
    console.log(_it.return(7)); //{value: 4, done: false}
    console.log(_it.next()); //Object {value: 7, done: true}
    console.log(_it.next());

    console.groupEnd();
}

{
    var baz = regeneratorRuntime.mark(function baz() {
        return regeneratorRuntime.wrap(function baz$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        _context11.next = 2;
                        return 'a';

                    case 2:
                        _context11.next = 4;
                        return 'b';

                    case 4:
                    case "end":
                        return _context11.stop();
                }
            }
        }, baz, this);
    });
    var bar = regeneratorRuntime.mark(function bar() {
        return regeneratorRuntime.wrap(function bar$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        _context12.next = 2;
                        return 'c';

                    case 2:
                        return _context12.delegateYield(baz(), "t0", 3);

                    case 3:
                    case "end":
                        return _context12.stop();
                }
            }
        }, bar, this);
    });

    var _gen2 = regeneratorRuntime.mark(function _gen2() {
        return regeneratorRuntime.wrap(function _gen2$(_context13) {
            while (1) {
                switch (_context13.prev = _context13.next) {
                    case 0:
                        return _context13.delegateYield(['a', 'b'], "t0", 1);

                    case 1:
                        return _context13.delegateYield("hi", "t1", 2);

                    case 2:
                    case "end":
                        return _context13.stop();
                }
            }
        }, _gen2, this);
    });

    var ge = regeneratorRuntime.mark(function ge() {
        return regeneratorRuntime.wrap(function ge$(_context14) {
            while (1) {
                switch (_context14.prev = _context14.next) {
                    case 0:
                        _context14.next = 2;
                        return 2;

                    case 2:
                        return _context14.abrupt("return", "ge");

                    case 3:
                    case "end":
                        return _context14.stop();
                }
            }
        }, ge, this);
    });

    var _foo = regeneratorRuntime.mark(function _foo() {
        var v;
        return regeneratorRuntime.wrap(function _foo$(_context15) {
            while (1) {
                switch (_context15.prev = _context15.next) {
                    case 0:
                        _context15.next = 2;
                        return 1;

                    case 2:
                        return _context15.delegateYield(ge(), "t0", 3);

                    case 3:
                        v = _context15.t0;

                        console.log(v);

                    case 5:
                    case "end":
                        return _context15.stop();
                }
            }
        }, _foo, this);
    });

    var test = regeneratorRuntime.mark(function test() {
        return regeneratorRuntime.wrap(function test$(_context16) {
            while (1) {
                switch (_context16.prev = _context16.next) {
                    case 0:
                        console.log("11");
                        _context16.next = 3;
                        return console.log("21");

                    case 3:
                    case "end":
                        return _context16.stop();
                }
            }
        }, test, this);
    });
    var iteTree = regeneratorRuntime.mark(function iteTree(tree) {
        var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator8, _step6, _i3;

        return regeneratorRuntime.wrap(function iteTree$(_context17) {
            while (1) {
                switch (_context17.prev = _context17.next) {
                    case 0:
                        if (!Array.isArray(tree)) {
                            _context17.next = 28;
                            break;
                        }

                        _iteratorNormalCompletion6 = true;
                        _didIteratorError6 = false;
                        _iteratorError6 = undefined;
                        _context17.prev = 4;
                        _iterator8 = tree[Symbol.iterator]();

                    case 6:
                        if (_iteratorNormalCompletion6 = (_step6 = _iterator8.next()).done) {
                            _context17.next = 12;
                            break;
                        }

                        _i3 = _step6.value;
                        return _context17.delegateYield(iteTree(_i3), "t0", 9);

                    case 9:
                        _iteratorNormalCompletion6 = true;
                        _context17.next = 6;
                        break;

                    case 12:
                        _context17.next = 18;
                        break;

                    case 14:
                        _context17.prev = 14;
                        _context17.t1 = _context17["catch"](4);
                        _didIteratorError6 = true;
                        _iteratorError6 = _context17.t1;

                    case 18:
                        _context17.prev = 18;
                        _context17.prev = 19;

                        if (!_iteratorNormalCompletion6 && _iterator8.return) {
                            _iterator8.return();
                        }

                    case 21:
                        _context17.prev = 21;

                        if (!_didIteratorError6) {
                            _context17.next = 24;
                            break;
                        }

                        throw _iteratorError6;

                    case 24:
                        return _context17.finish(21);

                    case 25:
                        return _context17.finish(18);

                    case 26:
                        _context17.next = 30;
                        break;

                    case 28:
                        _context17.next = 30;
                        return tree;

                    case 30:
                    case "end":
                        return _context17.stop();
                }
            }
        }, iteTree, this, [[4, 14, 18, 26], [19,, 21, 25]]);
    });

    console.group("yield* 语句");

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {

        for (var _iterator6 = bar()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator6.next()).done); _iteratorNormalCompletion4 = true) {
            var _i4 = _step4.value;

            console.log(_i4);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator6.return) {
                _iterator6.return();
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

        for (var _iterator7 = _gen2()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator7.next()).done); _iteratorNormalCompletion5 = true) {
            var _item = _step5.value;

            console.log(_item);
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator7.return) {
                _iterator7.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    var _iterator5 = _foo();
    console.log(_iterator5.next());
    console.log(_iterator5.next());
    _iterator5.next();

    var testIte = test();
    testIte.next();

    var arr = ['a', ['b', 'c', ['d']], 'e', ['f', ['j']]];
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
        for (var _iterator9 = iteTree(arr)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator9.next()).done); _iteratorNormalCompletion7 = true) {
            var _item2 = _step7.value;

            console.log(_item2);
        }
    } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion7 && _iterator9.return) {
                _iterator9.return();
            }
        } finally {
            if (_didIteratorError7) {
                throw _iteratorError7;
            }
        }
    }

    console.groupEnd();
}

{
    var _gen3 = regeneratorRuntime.mark(function _gen3(name, age) {
        return regeneratorRuntime.wrap(function _gen3$(_context18) {
            while (1) {
                switch (_context18.prev = _context18.next) {
                    case 0:
                        _context18.next = 2;
                        return this.name = name;

                    case 2:
                        _context18.next = 4;
                        return this.age = age;

                    case 4:
                    case "end":
                        return _context18.stop();
                }
            }
        }, _gen3, this);
    });

    console.group("this");

    var _iterator10 = _gen3.call(_gen3.prototype, "lawrence", 25);

    console.log(_iterator10.next());
    console.log(_iterator10.name);
    console.log(_iterator10.age);
    console.log(_iterator10.next());
    console.log(_iterator10.age);

    console.groupEnd();
}

{
    //异步操作的同步化表达

    //控制流管理

    var step = function step(value) {
        return value + 1;
    };

    var runningTask = regeneratorRuntime.mark(function runningTask(value) {
        var value1, value2, value3, value4;
        return regeneratorRuntime.wrap(function runningTask$(_context19) {
            while (1) {
                switch (_context19.prev = _context19.next) {
                    case 0:
                        _context19.next = 2;
                        return step(value);

                    case 2:
                        value1 = _context19.sent;
                        _context19.next = 5;
                        return step(value1);

                    case 5:
                        value2 = _context19.sent;
                        _context19.next = 8;
                        return step(value2);

                    case 8:
                        value3 = _context19.sent;
                        _context19.next = 11;
                        return step(value3);

                    case 11:
                        value4 = _context19.sent;
                        return _context19.abrupt("return", value4);

                    case 13:
                    case "end":
                        return _context19.stop();
                }
            }
        }, runningTask, this);
    });

    var schedule = function schedule(iterator) {
        //TODO 借助iterator对象传递参数
        var task = iterator.next(iterator.value);
        if (!task.done) {
            iterator.value = task.value;
            schedule(iterator);
        } else {
            console.log(task.value);
        }
    };

    //部署iterator接口

    var iteratorEntries = regeneratorRuntime.mark(function iteratorEntries() {
        var keys, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator12, _step8;

        return regeneratorRuntime.wrap(function iteratorEntries$(_context20) {
            while (1) {
                switch (_context20.prev = _context20.next) {
                    case 0:
                        keys = Object.keys(this);
                        _iteratorNormalCompletion8 = true;
                        _didIteratorError8 = false;
                        _iteratorError8 = undefined;
                        _context20.prev = 4;
                        _iterator12 = keys[Symbol.iterator]();

                    case 6:
                        if (_iteratorNormalCompletion8 = (_step8 = _iterator12.next()).done) {
                            _context20.next = 13;
                            break;
                        }

                        key = _step8.value;
                        _context20.next = 10;
                        return [key, this[key]];

                    case 10:
                        _iteratorNormalCompletion8 = true;
                        _context20.next = 6;
                        break;

                    case 13:
                        _context20.next = 19;
                        break;

                    case 15:
                        _context20.prev = 15;
                        _context20.t0 = _context20["catch"](4);
                        _didIteratorError8 = true;
                        _iteratorError8 = _context20.t0;

                    case 19:
                        _context20.prev = 19;
                        _context20.prev = 20;

                        if (!_iteratorNormalCompletion8 && _iterator12.return) {
                            _iterator12.return();
                        }

                    case 22:
                        _context20.prev = 22;

                        if (!_didIteratorError8) {
                            _context20.next = 25;
                            break;
                        }

                        throw _iteratorError8;

                    case 25:
                        return _context20.finish(22);

                    case 26:
                        return _context20.finish(19);

                    case 27:
                    case "end":
                        return _context20.stop();
                }
            }
        }, iteratorEntries, this, [[4, 15, 19, 27], [20,, 22, 26]]);
    });

    console.group("generator 应用");

    var _iterator11 = runningTask(1);
    var task = _iterator11.next();
    while (!task.done) {
        task = _iterator11.next(task.value);
    }
    console.log(task.value);

    schedule(runningTask(1));

    var _obj2 = _defineProperty({
        hobby: "eat",
        love: "cat"
    }, Symbol.iterator, iteratorEntries);

    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
        for (var _iterator13 = _obj2[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator13.next()).done); _iteratorNormalCompletion9 = true) {
            var _step9$value = _slicedToArray(_step9.value, 2),
                k = _step9$value[0],
                v = _step9$value[1];

            console.log(k + " = " + v);
        }

        //作为数据结构 TODO Array
    } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion9 && _iterator13.return) {
                _iterator13.return();
            }
        } finally {
            if (_didIteratorError9) {
                throw _iteratorError9;
            }
        }
    }

    console.groupEnd();
}