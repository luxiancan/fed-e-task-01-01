// 微任务

console.log('global start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve()
    .then(() => {
        console.log('promise');
    })
    .then(() => {
        console.log('promise 2');
    })
    .then(() => {
        console.log('promise 3');
    });

console.log('global end');


// 回调队列中的任务称之为 [宏任务]
// 宏任务执行过程中可以临时加上一些额外需求，可以选择作为一个新的宏任务进到队列中排队，
// 也可以作为当前任务的微任务，直接在当前任务结束过后立即执行
// promise 的回调会作为微任务执行
// 微任务的目的是，提高应用整体的响应能力

// [宏任务]：目前大部分的异步调用都是作为宏任务执行
// [微任务]：Promise & MutationObserver & node中 process.nextTick

