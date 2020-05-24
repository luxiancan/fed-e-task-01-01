// 枚举 (Enum)

export {} // 确保跟其他示例没有成员冲突

// 不使用 TS 的做法
// const PostStatus = {
//     Draft: 0,
//     Unpublished: 1,
//     Published: 2
// }

// enum PostStatus {
//     Draft = 0,
//     Unpublished = 1,
//     Published = 2
// }

// enum PostStatus {
//     Draft = 6,
//     Unpublished,
//     Published
// }

// enum PostStatus {
//     Draft = 'aaa',
//     Unpublished = 'bbb',
//     Published = 'ccc'
// }

// PostStatus[0] // => Draft


// 枚举的键不赋值的话，默认从 0 开始递增
// 双向键值对，可以通过键获取值，也可以通过值获取键
// enum PostStatus {
//     Draft,
//     Unpublished,
//     Published
// }

// 如果确认代码中不会使用索引器访问枚举，建议使用常量枚举 const
const enum PostStatus {
    Draft,
    Unpublished,
    Published
}

const post = {
    title: 'Hello TypeScript',
    content: 'TypeScript is a typed superset of JavaScript',
    status: PostStatus.Draft, // 2 // 1 // 0
}