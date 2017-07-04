"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(["Hi\n", "!"], ["Hi\\n", "!"]),
    _templateObject2 = _taggedTemplateLiteral(["hello ", " world ", ""], ["hello ", " world ", ""]),
    _templateObject3 = _taggedTemplateLiteral(["The total is ", " (", " with tax)"], ["The total is ", " (", " with tax)"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

{
    var is32Bit = function is32Bit(c) {
        return c.codePointAt(0) > 0xFFFF;
    };

    //字符的unicode表示法 \u0000-\uFFFF
    console.log("\uD842\uDFB7"); //TODO 𠮷 四个字节 两个字符
    console.log("\u20BB7"); //₻7
    console.log("\uD842\uDFB7"); //𠮷

    //TODO JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。需要4个字节储存的字符(Unicode码点大于0xFFFF的字符)，JavaScript会认为它们是两个字符。

    var s = "𠮷";
    console.log(s.length);
    console.log(s.charAt(0));
    console.log(s.charAt(1));
    console.log(s.charCodeAt(0));
    console.log(s.charCodeAt(1));

    //codePointAt
    var s1 = '𠮷a'; //识别为三个字符
    console.log(s1.codePointAt(0).toString(16)); // 十进制 = 134071 十六进制 = 20bb7
    console.log(s1.codePointAt(1)); //𠮷的后两个字节
    console.log(s1.codePointAt(2)); //

    console.log(s1.charCodeAt(0).toString(16));
    console.log(s1.charCodeAt(1)); //𠮷的后两个字节
    console.log(s1.charCodeAt(2)); // 97

    //TODO 解决codePointAt位置识别问题 for of循环， for of能够正确识别32位的UFT-16字符
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = s1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var ch = _step.value;

            console.log(ch + " 16位码点 = " + ch.codePointAt(0).toString(16));
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

    console.log(is32Bit("𠮷"));
    console.log(is32Bit("a"));

    //fromCodePoint
    console.log(String.fromCodePoint(0x20BB7));
    console.log(String.fromCodePoint(0x78, 0x1f680, 0x79));

    //at() TODO 提案中
    try {
        console.log("𠮷abc".at(0));
        console.log("𠮷abc".at(1));
    } catch (error) {
        console.log(error);
    }

    //includes() startsWith endsWith
    var str = "hello world";
    console.log(str + " includes o = " + str.includes("o"));
    console.log(str + " startsWith he = " + str.startsWith("he"));
    console.log(str + " endsWith ld = " + str.endsWith("ld"));

    console.log(str + " includes o from 3 = " + str.includes("o", 3));
    console.log(str + " startsWith wo from 6 = " + str.startsWith("wo", 6));
    console.log(str + " endsWith lo before 5 = " + str.endsWith("lo", 5)); //TODO 第二个参数针对的是前五个字符


    //repeat
    console.log("x repeat 4 = " + 'x'.repeat(4));
    console.log("x repeat 0 = " + 'x'.repeat(0));
    console.log("x repeat 2.9 = " + 'x'.repeat(2.9));
    console.log("x repeat NaN = " + 'x'.repeat(NaN));
    console.log("x repeat -0.1 = " + 'x'.repeat(-0.1)); //转换为 -0 相当于 0；
    try {
        console.log("x repeat -2 = " + 'x'.repeat(-2));
    } catch (error) {
        console.log(error);
    }

    //padStart() padEnd()补全
    console.log("x".padStart(5, "abc")); //abcax
    console.log("x".padEnd(5, "abc")); //xabca
    console.log("xxx".padStart(1, "a")); //xxx
    console.log("x".padStart(5)); //    x
    '12'.padStart(10, 'YYYY-MM-DD'); // "YYYY-MM-12"
    '09-12'.padStart(10, 'YYYY-MM-DD'); // "YYYY-09-12"


    //raw TODO 往往用来充当模板字符串的处理函数，返回一个斜杠都被转义的字符串
    console.group("raw");

    console.log(String.raw(_templateObject, 2 + 3));

    console.groupEnd();
}

{
    var add = function add(_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            x = _ref2[0],
            y = _ref2[1];

        return x + y;
    };

    var compile = function compile(template) {
        var evalExpr = /<%=(.+?)%>/g;
        var expr = /<%([\s\S]+?)%>/g;

        template = template.replace(evalExpr, '`); \n echo( $1 ); \n echo(`').replace(expr, '`); \n $1 \n echo(`');
        template = 'echo(`' + template + '`);';
        console.log(template);

        var script = "(function parse(data){\n            var output = \"\";\n            function echo(html){ output += html;}\n            " + template + "\n            return output; })";
        return script;
    };

    var tagFunc = function tagFunc(strArr, param1, param2) {
        console.log(arguments.length); //3
        console.log(strArr);
        console.log(param1);
        console.log(param2);
    };

    //模板字符串
    var str1 = "this is str";
    var str2 = "this is \n    not legal";
    console.log(str1);
    console.log(str2);
    var name = "kitty",
        me = "lawrence";
    var str3 = "hi " + name + ", this is " + me;
    console.log(str3);

    var list = document.getElementById("list");
    var htmlStr = " <ul>\n         <li>1</li>\n         <li>2</li>\n         </ul> \n        ";
    list.innerHTML = htmlStr.trim();

    console.log("1 + 2 = " + (1 + 2));
    console.log("1 + 2 = " + add([1, 2]));

    var temp = function temp(data) {
        return "<table>" + data.map(function (item) {
            return "<tr><td>" + item.name + "</td><td>" + item.age + "</td></tr>";
        }).join('') + "</table>";
    }; //TODO join
    var persons = [{ name: "kitty", age: 24 }, { name: "Tom", age: 22 }, { name: "lawrence", age: 20 }];
    document.body.insertAdjacentHTML("beforeend", temp(persons));

    //模板字符串实例: 模板编译
    var template = "<ul><% for(var i=0; i < data.supplies.length; i++) { %> \n                            <li><%= data.supplies[i] %></li>\n                        <% } %> \n                    </ul>";

    var parse = eval(compile(template));
    document.getElementById("list1").innerHTML = parse({ supplies: ["broom", "mop", "cleaner"] });

    //标签模板
    //alert`123`;

    var a = 10,
        b = 20;

    tagFunc(_templateObject2, a + b, a * b);
}

{
    var passthru = function passthru(literals) {
        console.log(literals);
        console.log(arguments);
        var result = '';
        var i = 0;
        while (i < literals.length) {
            result += literals[i++];
            if (i < arguments.length) {
                result += arguments[i];
            }
        }
        return result;
    };

    var total = 30;
    var msg = passthru(_templateObject3, total, total * 1.05);

    console.log(msg);
}