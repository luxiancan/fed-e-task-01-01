// 函数类型

export {} // 确保跟其他示例没有成员冲突

function func1 (a: number, b: number = 10, ...rest: number[]): string {
    return 'func1';
}

func1(100, 200);

func1(100);

func1(100, 200, 300);


// ====================================

const func2 = function (a: number, b: number = 10): string {
    return 'func1';
}
