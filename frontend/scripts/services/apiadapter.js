class APIAdapter {
    constructor(port = 3000){
        this.port = port
        this.url =`http://localhost:${port}`
    }

    // helpers 
    parseJSON  = response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw console.error("not today")
        }
    }
    headers = {"Accepts": "application/json", "Content-Type": "application/json"}

    // URL Getters //

    get postsURL(){
        return this.url + '/posts'
    }

    get commentsURL(){
        return this.url + '/comments'
    }

    //GET //
    getPosts = () => fetch(this.postsURL).then(this.parseJSON)   
    getPost = (postID) => fetch(this.postsURL + `/${postID}`).then(this.parseJSON) 

    getComments = () => fetch(this.commentsURL).then(this.parseJSON)   
    getPost = (commentID) => fetch(this.commentsURL + `/${commentID}`).then(this.parseJSON)   

    // POST ///
    postPost = body => fetch(this.postsURL, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body)
    }).then(this)

    postComment = body => fetch(this.commentsURL, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body)
    }).then(this)

}

