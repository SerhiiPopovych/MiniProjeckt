const postID = localStorage.getItem('post_id');
const userID = localStorage.getItem('user_id')
fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts`)
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            if (postID == post.id){
                const postDiv = document.createElement('div')
                postDiv.className = 'post-div'
                const postP = document.createElement('p')
                postP.innerHTML = `${JSON.stringify(post, null, 1)} <br>`
                const commentsToPost = () =>{
                    fetch (`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
                        .then(response => response.json())
                        .then(coments=> {
                            const commentsDiv = document.createElement('div')
                            commentsDiv.className = 'comments-div'
                            for (const coment of coments) {
                                const commentDiv = document.createElement('div')
                                commentDiv.className = 'comment-div'
                                const commentP = document.createElement('p')
                                commentP.innerText = (JSON.stringify(coment, null, 1))
                                commentDiv.appendChild(commentP)
                                commentsDiv.appendChild(commentDiv)
                                document.body.appendChild(commentsDiv)

                            }

                        })
                }
                commentsToPost()
                postDiv.appendChild(postP)
                document.body.appendChild(postDiv)
            }
        }
    })