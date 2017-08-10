/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moduleExport = __webpack_require__(2);

var _moduleExport2 = _interopRequireDefault(_moduleExport);

var _moduleExport3 = __webpack_require__(3);

var circle = _interopRequireWildcard(_moduleExport3);

var _moduleCat = __webpack_require__(4);

var _moduleCat2 = _interopRequireDefault(_moduleCat);

var _moduleExport4 = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_moduleExport4.name);
//import具有提升效果


(0, _moduleExport.hobbies)('eat');
(0, _moduleExport.hobbies)('sleep');

console.log('name = ' + (0, _moduleExport.getName)() + ' age = ' + _moduleExport.age + ' sex = ' + _moduleExport.sex + ' hobby = ' + (0, _moduleExport.getHobby)() + ' phone = ' + _moduleExport2.default);

//动态绑定 能够获取实时的值
setTimeout(function () {
    console.log('name = ' + (0, _moduleExport.getName)() + ' age = ' + _moduleExport.age + ' sex = ' + _moduleExport.sex);
}, 2000);

console.log('radius = 4 圆面积 = ' + circle.area(4));
console.log('radius = 4 圆周长 = ' + circle.circumference(4));

console.log('cat age = ' + _moduleCat2.default);
(0, _moduleCat.setAge)(12);
(0, _moduleCat.setName)('cat');
(0, _moduleCat.setColor)('white');
console.log('cat new age = ' + (0, _moduleCat.getAge)());

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var age = 25;
var sex = 'women';
var name = 'lawrence';
var hobby = [];
var phone = '110';

setTimeout(function () {
    exports.age = age = 26;
}, 1000);

var getName = function getName() {
    return name;
};

var setHobby = function setHobby(hy) {
    hobby.push(hy);
};

var getHobby = function getHobby() {
    return hobby.join(',');
};

//默认输出一个叫做default的变量，所以后面不能跟变量声明语句。
exports.default = phone;
exports.age = age;
exports.sex = sex;
exports.getName = getName;
exports.hobbies = setHobby;
exports.getHobby = getHobby;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var defaultRadius = 4;

var area = function area() {
    var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRadius;

    return Math.PI * radius * radius;
};

var circumference = function circumference() {
    var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRadius;

    return 2 * Math.PI * radius;
};

exports.area = area;
exports.circumference = circumference;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moduleAnimal = __webpack_require__(5);

Object.keys(_moduleAnimal).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _moduleAnimal[key];
        }
    });
});

var age = 2;

var setAge = function setAge(newAge) {
    age = newAge;
    console.log('animal age = ' + age);
};

var getAge = function getAge() {
    return age;
};

//继承
exports.default = age;

//可以写成多个export

exports.setAge = setAge;
exports.getAge = getAge;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var name = 'animal';
var color = 'black';

var setName = function setName(newName) {
    name = newName;
    console.log('animal name = ' + name);
};

var setColor = function setColor(newColor) {
    color = newColor;
    console.log('animal color = ' + color);
};

exports.default = name;
exports.setName = setName;
exports.setColor = setColor;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var name = exports.name = 'kitty';

/***/ })
/******/ ]);