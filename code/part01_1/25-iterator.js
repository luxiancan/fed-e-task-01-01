// 迭代器 (Iterator)

// 所有可以被 for...of 遍历的数据类型内部都必须实现一个 Iterator 的接口

const set = new Set(['foo', 'bar', 'baz']);

const iterator = set[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
