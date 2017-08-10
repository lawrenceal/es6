let age = 25;
let sex = 'women';
let name = 'lawrence';
let hobby = [];
let phone = '110';

setTimeout(() => {
    age = 26;
}, 1000);

let getName = () => {
    return name;
};

const setHobby = (hy) => {
    hobby.push(hy);
};

const getHobby = () => {
    return hobby.join(',');
};

//默认输出一个叫做default的变量，所以后面不能跟变量声明语句。
export default phone;

export {age, sex, getName, setHobby as hobbies, getHobby};

