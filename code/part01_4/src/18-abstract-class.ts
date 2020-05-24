// 抽象类

export {} // 确保跟其他示例没有成员冲突

abstract class Animal {
    eat (food: string): void {
        console.log(`呼噜呼噜的吃: ${food}`);
    }
    abstract run (distance: number): void
}

// const dog = new Animal();

class Dog extends Animal {
    run(distance: number): void {
        console.log('四角爬行', distance);
    }
}

const d = new Dog();
d.eat('exb');
d.run(100);
