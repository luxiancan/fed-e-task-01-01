// 箭头函数

// function inc (number) {
//     return number + 1;
// }

// const inc = n => n + 1;
const inc = (n, m) => {
    console.log('inc invoked');
    return n + 1;
};

console.log(inc(100));


const arr = [1, 2, 3, 4, 5];

arr.filter(function (item) {
    return item % 2;
});

arr.filter(i => i % 2);

