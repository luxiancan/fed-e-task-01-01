// 接口：可选成员，只读成员，动态成员

export {} // 确保跟其他示例没有成员冲突

interface Post {
    title: string;
    content: string;
    subtitle?: string; // 可选成员
    readonly summary: string; // 只读成员
}

const hello: Post = {
    title: 'Hello TypeSccript',
    content: 'A JavaScript superset',
    summary: 'A JavaScript'
}

// 只读成员：初始化完成之后就不允许修改了
// hello.summary = 'other';


interface Cache {
    [prop: string]: string; // 动态成员
}

const cache: Cache = {};

cache.foo = 'value1';
cache.bar = 'value2';
