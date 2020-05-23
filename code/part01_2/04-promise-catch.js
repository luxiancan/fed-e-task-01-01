// Promise 方式的 AJAX

function ajax (url) {
    return new Promise ((resolve, reject) => {
        // foo();
        // throw new Error();
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

// ajax('/api/users.json')
//     .then(function (res) {
//         console.log(res);
//     }, function (error) {
//         console.log(error);
//     });

// ajax('/api/users123.json')
//     .then(function (res) {
//         console.log(res);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// 等同于
// ajax('/api/users123.json')
//     .then(function (res) {
//         console.log(res);
//     })
//     .then(undefined, function (error) {
//         console.log(error);
//     });

ajax('/api/users.json')
    .then(function (res) {
        console.log(res);
        return ajax('/error-url');
    }, function (error) {
        console.log(error); // 捕获不到 .then 里的错误
    });

ajax('/api/users.json')
    .then(function (res) {
        console.log(res);
        return ajax('/error-url');
    })
    .catch(function (error) {
        console.log(error);  // 可以捕获 .then 里的错误
    });


    // unhandledrejection
    // 全局处理我们在代码中没有被手动捕获的异常