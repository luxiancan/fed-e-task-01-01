// ECMAScript 2016

// Array.prototype.includes -----------------------

const arr = ['foo', 1, NaN, false];

console.log(arr.indexOf('foo')); // 0
console.log(arr.indexOf('bar')); // -1
console.log(arr.indexOf(NaN)); // -1

console.log(arr.includes('foo')); // true
console.log(arr.includes(NaN)); // true


// 指数运算符 --------------------------------------

console.log(Math.pow(2, 10)); // 1024

console.log(2 ** 10); // 1024

