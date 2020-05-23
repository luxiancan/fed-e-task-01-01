// if (true) {
//     // var foo = 'lxcan';
//     let foo = 'lxcan';
// }
// console.log(foo);

// --------------------------------------------

// for (var i = 0; i < 3; i++) {
//     for (var i = 0; i < 3; i++) {
//         console.log(i);
//     }
//     console.log('内层结束 i = ' + i);
// }

// for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 3; i++) {
//         console.log(i);
//     }
//     console.log('内层结束 i = ' + i);
// }

// --------------------------------------------


// var elements = [{}, {}, {}];
// for (var i = 0; i < elements.length; i++) {
//     elements[i].onclick = function () {
//         console.log(i);
//     }
// }
// elements[0].onclick();

// var elements = [{}, {}, {}];
// for (var i = 0; i < elements.length; i++) {
//     elements[i].onclick = (function (i) {
//         return function () {
//             console.log(i);
//         }
//     })(i);
// }
// elements[1].onclick();

// var elements = [{}, {}, {}];
// for (let i = 0; i < elements.length; i++) {
//     elements[i].onclick = function () {
//         console.log(i);
//     }
// }
// elements[0].onclick();

// --------------------------------------------

// 外层作用域
// for (let i = 0; i < 3; i++) {
//     // 内层作用域
//     let i = 'foo';
//     console.log(i);
// }

// --------------------------------------------

// console.log(foo); // undefined
// var foo = 'lxcan';

// console.log(foo);
// let foo = 'lxcan';
