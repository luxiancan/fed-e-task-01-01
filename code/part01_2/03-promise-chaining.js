// Promise 方式的 AJAX

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

// var promise = ajax('/api/users.json');
// var promise2 = promise.then(function (res) {
//     console.log(res);
// }, function (error) {
//     console.log(error);
// });
// console.log(promise === promise2); // false

ajax('/api/users.json')
    .then(function (value) {
        console.log(111);
        return ajax('/api/urls.json')
    })
    .then(function (value) {
        console.log(222);
        console.log(value);
        return ajax('/api/urls.json')
    })
    .then(function (value) {
        console.log(333);
        return ajax('/api/urls.json')
    })
    .then(function (value) {
        console.log(444);
        return 'foo';
    })
    .then(function (value) {
        console.log(555);
        console.log(value);
    });


// Promise 对象的 then 方法会返回一个全新的 Promise 对象
// 后面的 then 方法就是在为上一个 then 返回的 Promise 注册回调
// 前面 then 方法中回调函数的返回值会作为后面 then 方法回调的参数
// 如果回调中返回的是 Promise，那后面 then 方法的回调会等待它的结束