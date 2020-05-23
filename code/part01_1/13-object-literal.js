// 对象字面量

const bar = '345';

const obj = {
    foo: 123,
    // bar: bar,
    bar,
    // method: function () {
    //     console.log('method');
    //     console.log(this);
    // },
    method () {
        console.log('method');
        console.log(this);
    },
    [Math.random()]: 123,
};

// obj[Math.random()] = 123;

console.log(obj);
obj.method();
