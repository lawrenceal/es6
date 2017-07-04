'use strict';

{
    //RegExp构造函数
    console.log(new RegExp(/[a-z]+/ig));
    console.log(new RegExp('xyz', 'i'));
    console.log(new RegExp(/xyz/gi, 'i')); //TODO ES5不允许ES5不允许此时使用第二个参数，添加修饰符。ES6会覆盖忽略原修有的饰


    //u修饰符
    console.log(/^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDC2A'));
    console.log(/^\uD83D/.test('\uD83D\uDC2A'));

    var s = '𠮷';
    console.log(/^.$/.test(s)); //.在正则表达式中代表的是换行符以外的单个字符，大于\uFFFF不能识别，必须加上u修饰符
    console.log(/^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(s));

    console.log(/\u{61}/.test('a'));
    console.log(/a/.test('a'));

    console.log(/^\S$/.test(' ')); //\S匹配所有不是空格的字符
    console.log(/^(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(' '));

    //y修饰符 TODO 剩余的第一个位置开始
    var s1 = 'aaa_aa_a';
    var r1 = /a+/g;
    r2 = new RegExp('a+', 'y');
    r1.exec(s1); // ["aaa"]
    r2.exec(s1); // ["aaa"]

    r1.exec(s1); // ["aa"]
    r2.exec(s1); // null
    console.log("r2.sticky = " + r2.sticky);

    //flags属性
    var reg1 = /[\d]+/ig;
    console.log("reg1.source = " + reg1.source);
    console.log("reg1.flags = " + reg1.flags);

    //RegExp.escape()
    try {
        RegExp.escape('Buy it. use it. break it. fix it.');
    } catch (error) {
        console.log(error);
    }
}