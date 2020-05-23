// Symbol 补充

// console.log(
//     Symbol() === Symbol(), // false
//     Symbol('foo') === Symbol('foo'), // false
// );

// const s1 = Symbol.for('foo');
// const s2 = Symbol.for('foo');
// console.log(s1 === s2); // true


// Symbol.for() 的参数如果不是字符串，方法内部会自动转化为字符串
// console.log(Symbol.for(true) === Symbol.for('true')); // true

// console.log(Symbol.iterator);
// console.log(Symbol.hasInstance);

// 自定义对象的 toString() 返回值
// const obj = {
//     [Symbol.toStringTag]: 'XObject'
// };
// console.log(obj.toString()); // [object XObject]


const obj = {
    [Symbol()]: 'symbol value',
    foo: 'normal value'
};

// 以下方法取不到对象中以 symbol 作为属性的值
for (var key in obj) {
    console.log(key);
}
console.log(Object.keys(obj));
console.log(JSON.stringify(obj));

// 只取 symbol 类型的数据
console.log(Object.getOwnPropertySymbols(obj));
