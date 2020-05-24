"use strict";
// 任意类型 any（弱类型）
Object.defineProperty(exports, "__esModule", { value: true });
function stringify(value) {
    return JSON.stringify(value);
}
stringify('string');
stringify(100);
stringify(true);
var foo = 'string';
foo = 100;
foo.bar(); // 语法上不会报错
// any 类型是不安全的
