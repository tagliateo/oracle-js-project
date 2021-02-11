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
        li.dataset.id = this.id
        li.innerText = this.content
        
        const deleteBtn = document.createElement('button')
        deleteBtn.method = 'delete'
        deleteBtn.innerText = "delete"
        li.appendChild(deleteBtn)
        commentList.appendChild(li)

        
        deleteBtn.addEventListener("click", this.deleteComment)    
    }
    
    static submitComment(comment, commentList, postId){
        
        fetch(commentURL, {
            method: "POST",
            headers: {
                "Content-type": "application/json", 
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                content: comment, 
                post_id: postId
            })
        }).then(res => res.json())
        .then(comment => {
            let newComment = new Comment(comment)
            newComment.renderComment(commentList)
        })
    }

    // deleteComment =  (event) => {
    //     debugger;
    //     event.preventDefault()
    //     const configObj = {
    //         method: 'DELETE',
    //         headers: {
    //             "Content-Type": 'application/json',
    //             "Accept": "application/json"
    //         }
    //     }
    //     fetch(`${commentURL}/${event.target.dataset.postId}`, configObj)
    //     event.target.parentElement.remove()
    // }

    deleteComment(){
        debugger;
        // preventDefault()
        const commentId = this.parentElement.dataset.id
        // const postId = this.parentNode.parentNode.parentElement.dataset.id 

        fetch(`${postURL}/${commentId}`), {
            method: "DELETE",
        }
      

        this.parentElement.remove()

        // this.location.reload(commentId)
    }
}