import phone, {getName, age, sex, hobbies as addHobby, getHobby} from './module-export1';
import * as circle from './module-export2';
import catAge, {setAge, setName, setColor, getAge} from './module-cat';

console.log(name);
//import具有提升效果
import {name} from './module-export';

addHobby('eat');
addHobby('sleep');

console.log('name = ' + getName() + ' age = ' + age + ' sex = ' + sex + ' hobby = ' + getHobby() + ' phone = ' + phone);

//动态绑定 能够获取实时的值
setTimeout(() => {
    console.log('name = ' + getName() + ' age = ' + age + ' sex = ' + sex );
}, 2000);

console.log('radius = 4 圆面积 = ' + circle.area(4));
console.log('radius = 4 圆周长 = ' + circle.circumference(4));

console.log('cat age = ' + catAge);
setAge(12);
setName('cat');
setColor('white');
console.log('cat new age = ' + getAge());