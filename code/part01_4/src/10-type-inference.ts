// 隐式类型推断

export {} // 确保跟其他示例没有成员冲突

let age = 18; // 隐式类型推断为 number 类型

// age = 'string';

let foo; // => any 类型
foo = 100;
foo = 'string';

// 建议为每个变量添加明确的类型