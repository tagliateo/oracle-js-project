// class Post {

//     static allPosts = []

//     constructor(post){
//         this.id = post.id
//         this.content = post.attributes.content
//         this.comments = post.attributes.comments
//         Post.allPosts.push(this)
//     }

//     static renderPosts(){
//         for(let post of this.allPosts){
//             post.renderPost()
//         }
//     }

//     //Read - 

//     static fetchPosts(){
//         fetch(postURL)
//         .then(res => res.json())
//         .then(posts => {
//             for(let post of posts){
//                 new Post(post.data)
//             }
//             this.renderPosts()
//         })
//     }


//     renderPost(){
//         let postForm = document.getElementById(".post-container")
//         postForm.innerHTML +=
//         `
//         <ul>
//         <li> ${this.content}</li>
//         <li> ${this.comments}</li>
//         </ul>

//         `
//     }
//     //render post instance with comment form
//     // renderPost(){
//     //     const li = document.createElement('li')
//     //     li.dataset.id = this.id
    
//     //     const p = document.createElement('p')
//     //     p.innerText = this.content
    
//     //     const deleteBtn = document.createElement("button")
//     //     deleteBtn.innerText = "delete"
//     //     deleteBtn.addEventListener("click", this.deletePost)
    
//     //     const commentForm = document.createElement('form')
//     //     commentForm.innerHTML += `<input type="text" id="comment-input"><input type="submit">`
//     //     commentForm.addEventListener("submit", Comment.createComment)
    
//     //     const commentList = document.createElement('ul')
//     //     this.comments.forEach(comment => {
//     //         let commentObj = new Comment(comment)
//     //         commentObj.renderComment(commentList)
//     //     })
    
//     //     li.append(p, deleteBtn, commentForm, commentList)
    
//     //     postList.appendChild(li)
        
//     //     postForm.reset()
//     // }

//     //Create a post instance
//     static submitPost(){
//         event.preventDefault()
//         const configObj = {
//             method: "POST", 
//             headers: {
//                 "Content-type": "application/json", 
//                 "Accept": "application/json"
//             }, 
//             body: JSON.stringify({
//                 content: postInput.value
//             })
//         }
    
//         fetch(postURL, configObj)
//         .then(res => res.json())
//         .then(data => {
//             let newPost = new Post(data.data)
//             newPost.renderPost()
//         })
    
//     }

//     //Delete an instance of a post
//     deletePost(){
//         debugger;

//         const postId = this.parentElement.dataset.id
    
//         fetch(`${postURL}/${postId}`, {
//             method: "DELETE",
        
//         })

//         this.parentElement.remove()
//     }

//     deleteComment(){
//         const commentID = this.parentElement.dataset.id 
//         fetch(`${commentURL}/${commentID}`, {
//             method: "DELETE",
//         })
//         this.parentElement.remove()
//     }

//     // static deletePost = (event) => {
//     //     event.preventDefault()
//     //     const configObj = {
//     //       method: "DELETE",
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //         "Accept": "application/json"
//     //       }

//     //     }
//     //         fetch(`${postURL}/${event.target.dataset.postId}`, configObj)
//     //     event.target.parentElement.remove()
//     //   }


// }