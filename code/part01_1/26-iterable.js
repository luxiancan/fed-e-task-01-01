// 实现可迭代接口 iterable

// iterable
// const obj = {
//     [Symbol.iterator]: function () {
//         // iterator
//         return {
//             next: function () {
//                 // iterationResult
//                 return {
//                     value: 'foo',
//                     done: true
//                 };
//             }
//         };
//     }
// };

const obj = {
    store: ['foo', 'bar', 'baz'],
    [Symbol.iterator]: function () {
        let index = 0;
        const self = this;
        
        return {
            next: function () {
                let result = {
                    value: self.store[index],
                    done: index >= self.store.length
                };
                index++;
                return result;
            }
        };
    }
};

for (const item of obj) {
    console.log('循环体', item);
}