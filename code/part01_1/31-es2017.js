// ECMAScript 2017

// const obj = {
//     foo: 'value1',
//     bar: 'value2'
// };

// Object.values ----------------------------------------

// console.log(Object.values(obj));


// Object.entries ---------------------------------------

// console.log(Object.entries(obj));

// for (const [key, value] of Object.entries(obj)) {
//     console.log(key, value);
// }

// console.log(new Map(Object.entries(obj)));


// Object.getOwnPropertyDescriptors --------------------

/* 
const p1 = {
    firstName: 'Xcan',
    lastName: 'Lu',
    get fullName () {
        return this.firstName + ' ' + this.lastName;
    }
};

// console.log(p1.fullName);

// const p2 = Object.assign({}, p1);
// p2.firstName = 'ccan';
// console.log(p2.fullName); // Xcan Lu

const descriptors = Object.getOwnPropertyDescriptors(p1);
// console.log(descriptors);
const p2 = Object.defineProperties({}, descriptors);
p2.firstName = 'ccan';
console.log(p2.fullName); // ccan Lu
 */


// String.prototype.padStart / String.prototype.padEnd -----

const books = {
    html: 5,
    css: 16,
    javascript: 128,
};

// for (const [name, count] of Object.entries(books)) {
//     console.log(name, count);
// }

// 格式化字符串，文本对齐
for (const [name, count] of Object.entries(books)) {
    console.log(`${name.padEnd(16, '-')}|${count.toString().padStart(3, '0')}`);
}


// 在函数参数中添加尾逗号 -----------------------------

function foo (
    bar,
    baz,
) {

}

const arr = [
    100,
    200,
    300,
    400,
]
