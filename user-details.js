const userID = localStorage.getItem('user_id')
fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(response => response.json())
    .then(user => {
                            let userDiv = document.createElement('div')
                            userDiv.className ='user-div'
                            const userP = document.createElement('p')
                            userP.innerText = `${JSON.stringify(user, null,2)}`
                            const button = document.createElement('button')
                            button.innerText = ('post of current user')
                            button.className = 'button-posts'
                            let postsDiv = document.createElement('div')
                            postsDiv.className = 'posts-div'
                            button.onclick = () => {
                                    fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts`)
                                        .then(response => response.json())
                                        .then(posts =>{
                                                for (const post of posts) {
                                                        const postDiv = document.createElement('div')
                                                        const postP = document.createElement('p')
                                                        const postButton  =document.createElement('button')
                                                        postButton.innerText = ('Post details')
                                                        // postButton.className = 'button-post-details'
                                                        postDiv.appendChild(postP)
                                                        postDiv.appendChild(postButton)
                                                        postsDiv.appendChild(postDiv)
                                                        postP.innerText = (post.title)
                                                        postButton.onclick = () => {
                                                        document.location.href = ('post-details.html')
                                                        localStorage.setItem('post_id', post.id);
                                                        }
                                                }
                                        })
                            }
                            userDiv.appendChild(userP)
                            userDiv.appendChild(button)
                            userDiv.appendChild(postsDiv)
                            document.body.appendChild(userDiv)
    })