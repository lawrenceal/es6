'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

{
    //promise generator

    var foo = function foo(data) {
        return new Promise(function (resolve) {
            resolve(data + 1);
        });
    };

    var gen = regeneratorRuntime.mark(function gen(data) {
        var value, value1;
        return regeneratorRuntime.wrap(function gen$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return foo(data);

                    case 2:
                        value = _context.sent;
                        _context.next = 5;
                        return foo(value);

                    case 5:
                        value1 = _context.sent;
                        return _context.abrupt('return', value1 + 1);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, gen, this);
    });

    var run = function run(g, initial) {
        var it = g(initial);

        function next(data) {
            var result = it.next(data);
            if (result.done) {
                console.log(result.value);
                return;
            }
            result.value.then(function (value) {
                next(value);
            }).catch(function (error) {
                console.log(error);
            });
        }

        next();
    };

    var f = function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            throw new Error('async inner error');

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function f() {
            return _ref2.apply(this, arguments);
        };
    }();

    var fun = function () {
        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return Promise.reject('reject error catch');

                        case 3:
                            _context4.next = 7;
                            break;

                        case 5:
                            _context4.prev = 5;
                            _context4.t0 = _context4['catch'](0);

                        case 7:
                            _context4.next = 9;
                            return Promise.resolve('success');

                        case 9:
                            return _context4.abrupt('return', Promise.resolve('return success'));

                        case 10:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee3, this, [[0, 5]]);
        }));

        return function fun() {
            return _ref3.apply(this, arguments);
        };
    }();

    var timeOut = function timeOut(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    };

    var asyneTimeOut = function () {
        var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(value, time) {
            return regeneratorRuntime.wrap(function _callee4$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return timeOut(time);

                        case 2:
                            console.log(value);

                        case 3:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function asyneTimeOut(_x2, _x3) {
            return _ref4.apply(this, arguments);
        };
    }();

    run(gen, 1);

    //TODO  最爽的异步 async
    var asyncFun = function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(data) {
            var value, value1;
            return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return foo(data);

                        case 2:
                            value = _context2.sent;
                            _context2.next = 5;
                            return foo(value);

                        case 5:
                            value1 = _context2.sent;
                            return _context2.abrupt('return', value1 + 1);

                        case 7:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee, this);
        }));

        return function asyncFun(_x) {
            return _ref.apply(this, arguments);
        };
    }();
    asyncFun(1).then(function (value) {
        //TODO return Promise
        console.log(value);
    });

    f().catch(function (error) {
        console.log(error);
    });

    fun().then(function (value) {
        console.log(value);
    }).catch(function (error) {
        console.log(error);
    });

    asyneTimeOut("hello world", 1000);

    //TODO await后面的promise对象可能返回 reject 最好用在try catch中。
}

{
    //不存在继承关系，要同时触发。

    var baz = function baz() {
        return new Promise(function (resolve) {
            resolve('baz');
        });
    };

    var bar = function bar() {
        return new Promise(function (resolve) {
            resolve('bar');
        });
    };

    var _asyncFun = function () {
        var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
            var fun1, fun2, result;
            return regeneratorRuntime.wrap(function _callee5$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            fun1 = baz(), fun2 = bar(), result = [];
                            _context6.t0 = result;
                            _context6.next = 4;
                            return fun1;

                        case 4:
                            _context6.t1 = _context6.sent;

                            _context6.t0.push.call(_context6.t0, _context6.t1);

                            _context6.t2 = result;
                            _context6.next = 9;
                            return fun2;

                        case 9:
                            _context6.t3 = _context6.sent;

                            _context6.t2.push.call(_context6.t2, _context6.t3);

                            return _context6.abrupt('return', result);

                        case 12:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function _asyncFun() {
            return _ref5.apply(this, arguments);
        };
    }();

    _asyncFun().then(function (value) {
        console.log(value);
    });
}