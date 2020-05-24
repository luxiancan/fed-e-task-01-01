// 类 Class 类的访问修饰符

export {} // 确保跟其他示例没有成员冲突

class Person {
    public name: string; // = 'init name'
    private age: number;
    protected gender: boolean;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
        this.gender = true;
    }

    sayHi (msg: string): void {
        console.log(`I am ${this.name}, ${msg}`);
        console.log(this.age);
    }
}

class Student extends Person {
    private constructor (name: string, age: number) {
        super(name, age);
        console.log(this.gender);
    }

    static create (name: string, age: number) {
        return new Student(name, age);
    }
}

const tom = new Person('tom', 18);
console.log(tom.name);
// console.log(tom.age);
// console.log(tom.gender);

// Student 的构造函数为私有的，不能在类的外部 new
// const jack = new Student('jack', 20);
const jack = Student.create('jack', 20);
