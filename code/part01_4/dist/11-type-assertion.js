"use strict";
// 类型断言
Object.defineProperty(exports, "__esModule", { value: true });
// 假定这个 nums 来自一个明确的接口
var nums = [110, 120, 119, 112];
var res = nums.find(function (i) { return i > 0; });
// const square = res * res;
var num1 = res; // 推荐写法
var num2 = res; // JSX 下不能使用
