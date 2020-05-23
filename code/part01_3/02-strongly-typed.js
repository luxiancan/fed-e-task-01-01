// 强类型的优势

// function render (element) {
//     element.className = 'container';
//     element.innerHtml = 'hello world'; // 属性拼写错误
// }

// ======================================

// const util = {
//     aaa: () => {
//         console.log('util func');
//     }
// }

// ======================================

function sum (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('arguments must be a number');
    }

    return a + b;
}