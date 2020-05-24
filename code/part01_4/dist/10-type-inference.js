"use strict";
// 隐式类型推断
Object.defineProperty(exports, "__esModule", { value: true });
var age = 18; // 隐式类型推断为 number 类型
// age = 'string';
var foo; // => any 类型
foo = 100;
foo = 'string';
// 建议为每个变量添加明确的类型
