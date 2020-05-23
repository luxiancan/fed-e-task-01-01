// 箭头函数与 this

const person = {
    name: 'lxcan',
    // sayHi: function () {
    //     console.log(`hi, my name is ${this.name}`);
    // },
    // sayHi: () => {
    //     console.log(`hi, my name is ${this.name}`);
    // },
    sayHiAsync: function () {
        // const _this = this;
        // setTimeout(function () {
        //     console.log(_this.name);
        // }, 1000);

        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    },
};

// person.sayHi();
person.sayHiAsync();