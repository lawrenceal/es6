let defaultRadius = 4;

const area = (radius = defaultRadius) => {
    return Math.PI * radius * radius;
};

const circumference = (radius = defaultRadius) => {
    return 2 * Math.PI * radius;
};

export {area, circumference};