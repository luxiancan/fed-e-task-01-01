"use strict";
// 数组类型
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// ===========================================
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // 判断每个成员是不是都是数字
    return args.reduce(function (acc, cur) { return acc + cur; });
}
sum(1, 2, 3);
