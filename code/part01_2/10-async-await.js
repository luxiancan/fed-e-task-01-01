// Async / Await 语法糖

function ajax (url) {
    return new Promise ((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        xhr.send();
    });
}

async function main () {
    try {
        const users = await ajax('/api/users.json');
        console.log(users);

        const posts = await ajax('/api/posts.json');
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
}

main();