const posts = [
    {title: "post-1", author: "author-1"},
    {title: "post-2", author: "author-2"},
    {title: "post-3", author: "author-3"}
]

const listPosts = () => {
    posts.map(posts => {
        console.log(posts.title);
    })
}

const addPost = (newPost) => {
    const promise2 = new Promise((resolve, reject) =>{
        posts.push(newPost);
        resolve(posts);

        reject("there is an error");
    })

    return promise2;
}

async function showPosts() {
    try {
        await addPost({title: "Post-4", author: "Author-4"})
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPosts();