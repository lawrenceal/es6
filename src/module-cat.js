
let age = 2;

const setAge = (newAge) => {
    age = newAge;
    console.log('animal age = ' + age);
};

const getAge = () => {
    return age;
};

//继承
export * from './module-animal';
export default age;

//可以写成多个export
export { setAge };
export { getAge };



