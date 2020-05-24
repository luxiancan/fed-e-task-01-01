"use strict";
// 接口
Object.defineProperty(exports, "__esModule", { value: true });
function printPost(post) {
    console.log(post.title);
    console.log(post.content);
}
printPost({
    title: 'Hello TypeSccript',
    content: 'A JavaScript superset'
});
