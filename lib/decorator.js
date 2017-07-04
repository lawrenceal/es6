'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
    var _class, _dec, _class2, _desc, _value, _class3;

    var setName = function setName(target) {
        target.username = 'dog';
        target.prototype.age = 12;
    };

    var mixins = function mixins() {
        for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
            list[_key] = arguments[_key];
        }

        return function (target) {
            Object.assign.apply(Object, [target.prototype].concat(list));
        };
    };

    var readonly = function readonly(target, name, desc) {
        desc.writable = false;
        return desc;
    };

    var newName = function newName() {
        return 'new bar name';
    };

    var Person = setName(_class = function Person() {
        _classCallCheck(this, Person);
    }) || _class;

    console.log(Person.username);
    console.log(new Person().age);

    var func = {
        foo: function foo() {
            console.log('foo');
        },
        foo1: function foo1() {
            console.log('foo1');
        }
    };

    var Bar = (_dec = mixins(func), _dec(_class2 = (_class3 = function () {
        function Bar() {
            _classCallCheck(this, Bar);
        }

        _createClass(Bar, [{
            key: 'oldName',
            value: function oldName() {
                return 'bar name';
            }
        }]);

        return Bar;
    }(), (_applyDecoratedDescriptor(_class3.prototype, 'oldName', [readonly], Object.getOwnPropertyDescriptor(_class3.prototype, 'oldName'), _class3.prototype)), _class3)) || _class2);

    console.log(new Bar().foo());
    var bar = new Bar();
    console.log(bar.oldName());
    try {
        bar.oldName = newName;
    } catch (error) {
        console.log(error);
    }
}