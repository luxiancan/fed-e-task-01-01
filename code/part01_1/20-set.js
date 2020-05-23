// Set 数据结构

const s = new Set();

s.add(1).add(2).add(3).add(4).add(2);

// console.log(s);

// s.forEach(i => console.log(i));
// for (let i of s) {
//     console.log(i);
// }

// console.log(s.size);
// console.log(s.has(100));

// console.log(s.delete(3));
// console.log(s);

// s.clear();
// console.log(s);

// 数组去重
const arr = [1, 2, 1, 3, 4, 1];
// const result = Array.from(new Set(arr));
const result = [...new Set(arr)];

console.log(result);
