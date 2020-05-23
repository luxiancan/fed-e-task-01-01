# 卢显灿 ｜ Part 1 | 模块一

## 简答题

### 第1题
请说出下列代码最终的执行结果，并解释为什么？
```javascript
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}
a[6]();
```

最终执行结果为：打印 10。

原因：for 循环时是使用 var 定义循环变量 i （存在变量提升），然后依次为 a 数组元素赋值为一个函数，函数内打印 i；循环结束后调用 `a[6]()` ，相当于在全局环境下打印 i，而此时 i 已经变为 10。


### 第2题
请说出下列代码最终的执行结果，并解释为什么？
```javascript
var temp = 123;
if (true) {
    console.log(tmp);
    let tmp;
}
```

最终执行结果为：报出引用错误，在初始化之前不能访问 'tmp'。

原因是因为，块级作用域内使用了 let/const 关键字声明变量，就存在暂时性死区，在声明之前使用这些变量会报错。
ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。


### 第3题
结合 ES6 新语法，用最简单的方式找出数组中的最小值？
```javascript
var arr = [12, 34, 32, 89, 4];
```

答案： `Math.min(...arr)`


### 第4题
请详细说明 var，let，const 三种声明变量的方式之间的具体差别？

1.使用var声明变量
- 存在变量提升的情况
- 访问在后续定义的变量会返回 undefined
- var声明的变量，可以在其他作用域访问到

2.使用let声明变量
- 使用let命令，会创建一个块级作用域
- let声明的变量只在块级作用域内有效
- 同个作用域里，使用let不能重复声明变量

3.使用const声明常量
- 使用const声明的常量不能被修改
- 使用const声明常量时就要赋值
- 使用const声明一个引用类型数据的常量，可以往这个常量上 增/删/改 属性，但是不能直接修改这个常量的值（内存地址不能修改）


### 第5题
请说出下列代码最终的执行结果，并解释为什么？
```javascript
var a = 10;
var obj = {
    a: 20,
    fn() {
        setTimeout(() => {
            console.log(this.a);
        });
    }
};
obj.fn();
```

最终执行结果为：打印出 20。

原因：setTimeout的回调是一个箭头函数，箭头函数不会改变this的指向。this始终指向沿着作用域往上找的第一个 function ，看这个 function 最终是怎样调用的。题目里是这样调用的 obj.fn() , 所以此时fn内的this指向obj。


### 第6题
简述 Symbol 类型的用途？

Symbol 是 ES2015 提出的一种新的原始数据类型，主要用途有：
- 为对象创建独一无二的 key 值
- 可以模拟实现对象的私有成员
- 可以用作常量


### 第7题
说说什么是浅拷贝？什么是深拷贝？

引用类型的数据在赋值的过程中，其实是拷贝了内存地址，比如将b对象赋值给a变量，这两个变量都指向了同一个内存地址，修改了a变量之后b对象也会跟着改变。而我们希望得到的是，修改a不会影响b，这两个对象不会相互影响，针对这种场景就可以使用浅拷贝和深拷贝。

浅拷贝是指将对象的所有属性值拷贝到新的对象，进行一层属性的拷贝，但是如果属性值也是对象的话，依旧是拷贝那个对象的地址，上面的问题还是会出现。这种情况就可以使用深拷贝来解决，即使属性值是对象，深拷贝也可以做到无限层级拷贝，切断两个引用类型变量之间的关系，不会相互影响。

浅拷贝的方法：遍历对象属性赋值，Object.assign()，展开运算符...

深拷贝的方法：浅拷贝+递归，JSON.parse(JSON.stringify(obj))

JSON.parse(JSON.stringify())这个方法有一定的局限性：
序列化时遇到如下情况需要注意：
- 时间对象 => 字符串的形式
- RegExp,Error => {}
- 会丢失 function,undefined
- NaN,Infinity,-Infinity => null
- 如果对象中存在循环引用的情况也无法实现深拷贝

终极深拷贝的方法可以参考 lodash 的深拷贝，不过日常开发如果没遇到以上的情况，用 JSON.parse(JSON.stringify()) 足以...


### 第8题
谈谈你是如何理解 JS 异步编程的，EventLoop 是做什么的，什么是宏任务，什么是微任务？

js是单线程的，同一时间只能做一件事，两段JS不能同时执行，主要原因是要避免DOM渲染的冲突。解决方案就是异步，而异步编写的代码，没按照书写方式执行，callback过多，导致可读性很差，难以理解，所以就出现了 promise / async await。

EventLoop 指事件轮询，是js实现异步的具体解决方案。同步代码，在主线程（调用栈 Call stack）中直接执行，压栈-弹栈。异步任务会依次放入消息队列（Queue）中，EventLoop 会监听调用栈和消息队列，当调用栈中的代码执行完之后，它会拿消息队列中的第一个任务放到调用栈执行，以此类推。

异步任务可以分为宏任务和微任务，这两个任务的执行顺序不同。宏任务会依次放入消息队列等待事件轮询去执行，而微任务是放在本次调用栈的末尾去执行，也就是说，微任务比宏任务先执行。

- 宏任务：目前大部分的异步调用都是作为宏任务执行
- 微任务：Promise , MutationObserver , node 中 process.nextTick


### 第9题
将下面异步代码使用 Promise 改进？
```javascript
setTimeout(function () {
    var a = 'hello ';
    setTimeout(function () {
        var b = 'lagou ';
        setTimeout(function () {
            var c = 'I Love U';
            console.log(a + b + c);
        }, 10);
    }, 10);
}, 10);
```

答：

```javascript
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
```


### 第10题
请简述 TypeScript 与 JavaScript 之间的关系？

TypeScript 是 JavaScript 的一个超集（扩展集），就是在 JS 的基础上多出一些扩展特性，这些扩展特性包括：强大的类型系统、对 ES6+ 的良好支持。TS 最终会被编译为 JS 运行。


### 第11题
请谈谈你所认为的 TypeScript 优缺点？

优点：
1. 使用 TS 新特性开发项目，项目代码的健壮性增强，代码错误更早暴露。
2. 编辑器支持情况良好，比如：VSCode，有很多智能提示，编码更准确，提升开发效率。
3. 使用 TS 的强类型特性来开发项目，可以使得项目代码重构更牢靠。
4. 使用 TS 的强类型特性来编写代码，可以减少很多不必要的类型判断。
5. TS 最终会被编译为 JS 运行，可以将 ES6+ 编译为ES5/ES3，兼容性好。
6. TS 是渐进式的，完全可以使用 JS 编写代码，可以将新特性慢慢应用到项目中。

缺点：
1. 引入了很多概念和新语法，有一定学习成本，对于一些小项目会增加开发成本
2. 开发过程中遇到问题，可能相关 TS 的网上资料相比 JS 会少一些，需要花一些精力查找资料去解决问题


## 项目文件说明

- code : 代码
- notes : 笔记

