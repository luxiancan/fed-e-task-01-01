// 函数参数的默认值

// function foo (enable) {
//     enable = enable === undefined ? true : enable;
//     console.log('foo invoked - enable: ', enable);    
// }
// foo(false);

function foo (bar, enable = true) {
    console.log('foo invoked - enable: ', enable);    
}
foo(false);