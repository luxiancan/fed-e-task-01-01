// Object.assign 方法

// const source1 = {
//     a: 123,
//     b: 123
// };

// const target = {
//     a: 456,
//     c: 456
// };

// const result = Object.assign(target, source1);

// console.log(target);
// console.log(result === target);

function func (obj) {
    // obj.name = 'func obj';
    // console.log(obj);
    
    const funcObj = Object.assign({}, obj);
    funcObj.name = 'func obj';
    console.log(funcObj);
}

const obj = { name: 'global obj' };

func(obj);
console.log(obj);

