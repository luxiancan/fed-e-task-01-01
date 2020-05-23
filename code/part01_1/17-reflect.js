// Reflect 对象

// const obj = {
//     name: 'lxcan',
//     age: 18
// };

// const proxy = new Proxy(obj, {
//     get (target, property) {
//         console.log('watch logic~');
        
//         return Reflect.get(target, property);
//     }
// });

// console.log(proxy.name);



// Reflect 提供了一套统一的用于操作对象的API
// 操作对象时，有可能会使用 Object 上的方法，也有可能使用 delete in 这样的操作符，对于新手来说很乱没有规律
// 而 Reflect 解决了这个问题，它统一了对象的操作方式

const obj = {
    name: 'lxcan',
    age: 18,
    hobby: 'sleep'
};

// console.log('name' in obj);
// console.log(delete obj['age']);
// console.log(Object.keys(obj));

console.log(Reflect.has(obj, 'name'));
console.log(Reflect.deleteProperty(obj, 'age'));
console.log(Reflect.ownKeys(obj));
