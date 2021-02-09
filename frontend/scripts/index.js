const postForm = document.getElementById("post-form")
const postInput = document.getElementById("post-input")
const postList = document.getElementById("post-list")
const postURL = `http://localhost:3000/posts`
const commentURL = `http://localhost:3000/comments`

postForm.addEventListener("submit", Post.submitPost)


Post.fetchPosts()
// 

// document.addEventListener("DOMContentLoaded", () => {
    
// })
// const postForm = document.getElementById("post-form")
// const postInput = document.getElementById("post-input")
// const postList = document.getElementById("post-list")

// postForm.addEventListener("submit", submitPostForm)

// function submitPostForm() {
//     event.preventDefault()
//     console.log(postInput.value) 

//     const li = document.createElement('li')
//     const p = document.createElement('p')
//     p.innerText = postInput.value

//     const commentForm = document.createElement('form')
//     commentForm.innerHTML += `<input type="text"><input type="submit">`
//     li.append(p, commentForm) 

//     postList.appendChild(li)

//     postForm.reset()
// }