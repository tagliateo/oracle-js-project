class Post {

    static allPosts = []

    constructor(post){
        this.id = post.id
        this.content = post.attributes.content
        this.comments = post.attributes.comments
        Post.allPosts.push(this)
    }

    static renderPosts(){
        for(let post of this.allPosts){
            post.renderPost()
        }
    }

    static fetchPosts(){
        fetch(postURL)
        .then(res => res.json())
        .then(posts => {
            for(let post of posts){
                let newList = new Post(post.data)
            }
            this.renderPosts()
        })
    }

    renderPost(){
        const li = document.createElement('li')
        li.dataset.id = this.id
    
        const p = document.createElement('p')
        p.innerText = this.content
    
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "delete"
        deleteBtn.addEventListener("click", this.deletePost)
    
        const commentForm = document.createElement('form')
        commentForm.innerHTML += `<input type="text" id="comment-input"><input type="submit">`
        commentForm.addEventListener("submit", Comment.createComment)
    
        const commentList = document.createElement('ul')
        this.comments.forEach(comment => {
            let commentObj = new Comment(comment)
            console.log(commentObj)
            commentObj.renderComment(commentList)
        })
    
        li.append(p, deleteBtn, commentForm, commentList)
    
        postList.appendChild(li)
        
        postForm.reset()
    }

   

}