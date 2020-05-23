// 常用的 Promise 静态方法

function ajax (url) {
    return new Promise ((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        xhr.send();
    });
}

// Promise.resolve() =============================
// Promise.resolve('foo')
//     .then(function (value) {
//         console.log(value);
//     });

// ===

// new Promise(function (resolve, reject) {
//     resolve('foo');
// });


// var promise = ajax('/api/users.json');
// var promise2 = Promise.resolve(promise);
// console.log(promise === promise2); // true

// 这种传参方式了解即可
// Promise.resolve({
//     then: function (onFulfilled, onRejected) {
//         onFulfilled('foo');
//     }
// })
// .then(function (value) {
//     console.log(value);
// });


// Promise.reject() =============================
// Promise.reject(new Error('rejected'))
//     .catch(function (error) {
//         console.log(error);
//     });

Promise.reject('anything')
    .catch(function (error) {
        console.log(error);
    });
