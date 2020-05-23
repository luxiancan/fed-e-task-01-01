// for...of 循环

// for...of 的循环方式，以后会作为遍历所有数据结构的统一方式

// const arr = [100, 200, 300, 400];

// arr.forEach(item => {
//     console.log(item);
// });

// for (const item of arr) {
//     console.log(item);
// }

// for (const item of arr) {
//     console.log(item);
//     if (item > 100) {
//         break; // 可以使用 break 关键字跳出循环
//     }
// }

// arr.forEach()  // 不能跳出循环，除非主动报错
// arr.some();
// arr.every();


// const s = new Set(['foo', 'bar']);
// for (let item of s) {
//     console.log(item);
// }

// const m = new Map();
// m.set('foo', '123');
// m.set('bar', '456');
// for (let [key, value] of m) {
//     console.log(key, value);
// }

const obj = { foo: 123, bar: 456 };
for (const item of obj) {
    console.log(item);
}