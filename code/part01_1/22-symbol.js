// Symbol 数据类型

/* 
// shared.js =================================
const cache = {};

// a.js ======================================
cache['a_foo'] = Math.random();

// b.js ======================================
cache['b_foo'] = '123';

console.log(cache);
 */


/*  
 const s = Symbol();
 console.log(s);
 console.log(typeof s); // symbol
 console.log(Symbol() === Symbol()); // fasle

 console.log(Symbol('foo'));
 console.log(Symbol('bar'));
 console.log(Symbol('baz'));
  */
 

// const obj = {};
// obj[Symbol()] = '123';
// obj[Symbol()] = '456';
// console.log(obj);

// const obj = {
//     [Symbol()]: 123
// };
// console.log(obj);


// 模拟实现对象的私有成员

// a.js ======================================
const name = Symbol();
const person = {
    [name]: 'lxcan', // 私有成员
    say () {
        console.log(this[name]);
    }
};

// b.js ======================================
// person[Symbol()];
person.say();


// 使用 Symbol 作为对象的键，最主要的作用就是为对象添加独一无二的值


// 截止 ES2019
// ECMAScript 一共定义了6种原始类型
// string number boolean undefined null symbol
// 加上 object 数据类型一共是 7 种数据类型
// 未来还会新增一种原始类型，BigInt，准备在 ES2020 发布
