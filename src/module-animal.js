let name = 'animal';
let color = 'black';

const setName = (newName) => {
    name = newName;
    console.log('animal name = ' + name);
};

const setColor = (newColor) => {
    color = newColor;
    console.log('animal color = ' + color);
};

export default name;

export {setName, setColor};