// Map 数据结构

// const obj = {};
// obj[true] = 'value';
// obj[123] = 'value';
// obj[{ a: 1 }] = 'value';

// console.log(Object.keys(obj)); // [ '123', 'true', '[object Object]' ]
// console.log(obj['[object Object]']);


const m = new Map();
const lxc = { name: 'lxc' };
m.set(lxc, 18);

console.log(m);
console.log(m.get(lxc));

// m.has();
// m.delete();
// m.clear();

m.forEach((value, key) => {
    console.log(value, key);
});


// Map 与 Object 的最大区别

// Map 可以使用任意数据类型作为键
// Object 实际只能使用字符串作为键