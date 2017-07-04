{
    /**
     * 遍历器生成函数
     * @param array
     * @returns {{next: next}}
     */
    function makeIterator(array){
        let index = 0;

        return {
            next: function(){
                return index < array.length ? {value: array[index++], done: false} : {value: undefined, done: true};
            }
        }
    }

    //遍历器对象
    let iterator = makeIterator([1, 2]);
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

{
    console.group("数据结构的默认Iterator接口");

    //TODO 有三类数据结构原生具备Iterator接口: 数组、某些类似数组的对象、Set和Map结构。

    class RangeIterator{
        constructor(start, stop){
            this.start = start;
            this.stop = stop;
        }

        [Symbol.iterator](){ return this; }

        next(){
            let value = this.start;
            if(value <= this.stop){
                this.start++;
                return {value, done: false};
            }else{
                return {value: undefined, done: true};
            }
        }
    }

    for(value of new RangeIterator(1, 3)){
        console.log("RangeIterator " + value);
    }

    let iterable = {
        0: 'a',
        1: 'b',
        length: 2,
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    };

    for(let item of iterable){
        console.log(item);
    }

    console.groupEnd();
}

{
    //字符串的iterator
    let str = "hello";

    let strIterator = str[Symbol.iterator]();

    console.log(strIterator.next());

    //iterator方法的最简单实现，Generator函数
    let obj = {

        * [Symbol.iterator](){
            yield "hello";
            yield "world";
        }
    };

    for(item of obj){
        console.log(item);
    }
}

{
    console.group("for of");

    //数组
    let arr = ['blue', 'red', 'yellow'];
    arr.name = "color";

    let arrIterator = arr[Symbol.iterator]();

    for(let item of arr){
        console.log("for of " + item);
    }

    for(let item1 of arrIterator){
        console.log("for of iterator " + item1);
    }

    for(let i in arr){
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

