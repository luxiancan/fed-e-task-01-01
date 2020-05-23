// class 关键字

// function Person (name) {
//     this.name = name;
// }

// Person.prototype.say = function () {
//     console.log(`hi, my name is ${this.name}`);
// }

class Person {
    constructor (name) {
        this.name = name;
    }

    // 这是一个实例方法
    say () {
        console.log(`hi, my name is ${this.name}`);
    }

    // static 关键字定义一个静态方法
    static create (name) {
        return new Person(name);
    }
}

const p = new Person('lxcan');
p.say();

const p2 = Person.create('jack');
p2.say();
