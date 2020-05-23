// JavaScript 弱类型产生的问题

// const obj = {};

// // obj.foo();  运行时才报错

// setTimeout(() => {
//     obj.foo(); // 过一段时间才运行可能会出错的代码
// }, 100000);

// ===============================================

function sum (a, b) {
    return a + b;
}

console.log(sum(100, 100)); // 200
console.log(sum(100, '100')); // "100100"

// ===============================================

const obj = {};

obj[true] = 100;

console.log(obj['true']); // 100
