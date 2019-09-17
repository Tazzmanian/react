console.log('util is runnung');

// export const square = (x) => x * x;
// export const add = (a,b) => a + b;
const square = (x) => x * x;
const add = (a,b) => a + b;

const substract = (a,b) => a - b;

export {
    square,
    add,
    substract as default
};

// export default substract;