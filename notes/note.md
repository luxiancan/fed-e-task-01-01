# 卢显灿 ｜ Part 1 | 模块一 | 学习笔记


## 1 ECMAScript 新特性

### Proxy 对象
Proxy 对比 Object.defineProperty() 的优势？
- Proxy 除了有 set 和 get 监听之外，还有其他的对于对象的监听回调。has deleteProperty ownKeys apply 等等
- Proxy 更好的支持数组对象的监视
- Proxy 是以非侵入的方式监管了对象的读写


### Reflect 对象
Reflect 提供了一套统一的用于操作对象的API
操作对象时，有可能会使用 Object 上的方法，也有可能使用 delete in 这样的操作符，对于新手来说很乱没有规律
而 Reflect 解决了这个问题，它统一了对象的操作方式


### Set
数组去重

```
const arr = [1, 2, 1, 3, 4, 1];
// const result = Array.from(new Set(arr));
const result = [...new Set(arr)];
```


### Map
Map 与 Object 的最大区别：
- Map 可以使用任意数据类型作为键
- Object 实际只能使用字符串作为键


### Symbol
使用 Symbol 作为对象的键，最主要的作用就是为对象添加独一无二的值

截止 ES2019，ECMAScript 一共定义了6种原始类型

> string number boolean undefined null symbol

加上 object 数据类型一共是 7 种数据类型，未来还会新增一种原始类型，BigInt，准备在 ES2020 发布


### for...of 循环
for...of 的循环方式，以后会作为遍历所有数据结构的统一方式

```javascript
// arr.forEach()  // 不能跳出循环，除非主动报错
// arr.some();
// arr.every();

const arr = [100, 200, 300, 400];
for (const item of arr) {
    console.log(item);
    if (item > 100) {
        break; // 可以使用 break 关键字跳出循环
    }
}
```


### 迭代器 (Iterator)
所有可以被 for...of 遍历的数据类型内部都必须实现一个 Iterator 的接口


## 2 JavaScript 异步编程

### Promise
Promise 对象的 then 方法会返回一个全新的 Promise 对象，后面的 then 方法就是在为上一个 then 返回的 Promise 注册回调。前面 then 方法中回调函数的返回值会作为后面 then 方法回调的参数，如果回调中返回的是 Promise，那后面 then 方法的回调会等待它的结束。


可以使用 Promise.race 实现请求超时
```javascript
// 实现请求超时的方式，如果一个请求在 500ms 内没有相应，就认为超时
const promise = ajax('/api/users.json');
const timeout = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('timeout')), 500);
});

Promise.race([
    promise,
    timeout
])
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
});
```

### 宏任务和微任务
回调队列中的任务称之为 [宏任务]
宏任务执行过程中可以临时加上一些额外需求，可以选择作为一个新的宏任务进到队列中排队，也可以作为当前任务的微任务，直接在当前任务结束过后立即执行

promise 的回调会作为微任务执行。微任务的目的是，提高应用整体的响应能力

- 宏任务：目前大部分的异步调用都是作为宏任务执行
- 微任务：Promise & MutationObserver & node中 process.nextTick