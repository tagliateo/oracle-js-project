class Comment {

    constructor(comment){
        this.post_id = comment.post_id
        this.content = comment.content 
        this.id = comment.id
    }

    static createComment(e){
        e.preventDefault()
        const commentInput = e.target.children[0].value
        const commentList = e.target.nextElementSibling
        const postId = e.target.parentElement.dataset.id

        Comment.submitComment(commentInput, commentList, postId)
    
        e.target.reset()
    }
    
    renderComment(commentList){
        const li = document.createElement('li')
        li.dataset.id = this.post_id
        li.innerText = this.content
    
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "X"
        li.appendChild(deleteBtn)
        commentList.appendChild(li)
    
    }
    

}