// 任意类型 any（弱类型）

export {} // 确保跟其他示例没有成员冲突

function stringify (value: any) {
    return JSON.stringify(value);
}

stringify('string');

stringify(100);

stringify(true);

let foo: any = 'string';
foo = 100;
foo.bar(); // 语法上不会报错

// any 类型是不安全的