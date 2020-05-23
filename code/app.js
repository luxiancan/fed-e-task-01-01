// # 卢显灿 ｜ Part 1 | 模块一


// 1
// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     }
// }
// a[6](); // 10


// 2
// var temp = 123;
// if (true) {
//     console.log(tmp);
//     let tmp;
// }
// ReferenceError: Cannot access 'tmp' before initialization 


// 3
// var arr = [12, 34, 32, 89, 4];
// console.log(Math.min(...arr));


// 4
// var a = 10;
// var obj = {
//     a: 20,
//     fn() {
//         setTimeout(() => {
//             console.log(this.a);
//         });
//     }
// };
// obj.fn(); // 20


// 9
// setTimeout(function () {
//     var a = 'hello ';
//     setTimeout(function () {
//         var b = 'lagou ';
//         setTimeout(function () {
//             var c = 'I Love U';
//             console.log(a + b + c);
//         }, 10);
//     }, 10);
// }, 10);


function task (msg) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(msg);
        }, 10);
    });
};

task('hello ')
    .then(msg => task(msg + 'lagou '))
    .then(msg => task(msg + 'I Love U'))
    .then(msg => console.log(msg));



