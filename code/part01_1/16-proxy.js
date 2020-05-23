// Proxy 对象

const person = {
    name: 'lxcan',
    age: 18
};

const personProxy = new Proxy(person, {
    get (target, property) {
        return property in target ? target[property] : 'default';

        // console.log(target, property);
        // return 100;
    },
    set (target, property, value) {
        if (property === 'age') {
            if (!Number.isInteger(value)) {
                throw TypeError(`${value} is not an int`);
            }
        }

        target[property] = value;
        // console.log(target, property, value);
    }
});

// personProxy.age = 'hhh';
personProxy.age = 20;
personProxy.gender = true;

console.log(personProxy.name); // lxcan
console.log(personProxy.xxx); // default
console.log(person); // { name: 'lxcan', age: 20, gender: true }


// Proxy 对比 Object.defineProperty() 的优势 -------------------

// (1)
// Proxy 除了有 set 和 get 监听之外，还有其他的对于对象的监听回调
// has deleteProperty ownKeys apply 等等

// const person = {
//     name: 'lxcan',
//     age: 18
// };

// const personProxy = new Proxy(person, {
//     deleteProperty (target, property) {
//         console.log('delete', property);
//         delete target[property];
//     }
// });

// delete personProxy.age;
// console.log(person);

// (2)
// Proxy 更好的支持数组对象的监视

// const list = [];

// const listProxy = new Proxy(list, {
//     set (target, property, value) {
//         console.log('set', property, value);
//         target[property] = value;
//         return true; // 表示设置成功
//     }
// });

// listProxy.push(100);
// listProxy.push(200);


// (3)
// Proxy 是以非侵入的方式监管了对象的读写
