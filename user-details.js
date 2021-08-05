const user = JSON.parse(new URL(location).searchParams.get('user'))
// console.log(user);
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
                                    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                                        .then(response => response.json())
                                        .then(posts =>{
                                                for (const post of posts) {
                                                        const postDiv = document.createElement('div')
                                                        const postP = document.createElement('p')
                                                        const postButton  =document.createElement('button')
                                                        postButton.innerText = ('Post details')
                                                        postDiv.appendChild(postP)
                                                        postDiv.appendChild(postButton)
                                                        postsDiv.appendChild(postDiv)
                                                        postP.innerText = (post.title)
                                                        postButton.onclick = () => {
                                                        document.location.href = (`post-details.html?post=${JSON.stringify(post)}`)
                                                        }
                                                }
                                        })
                            }
                            userDiv.appendChild(userP)
                            userDiv.appendChild(button)
                            userDiv.appendChild(postsDiv)
                            document.body.appendChild(userDiv)
