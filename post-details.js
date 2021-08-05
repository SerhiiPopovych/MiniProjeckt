const post = JSON.parse(new URL(location).searchParams.get('post'))
console.log(post);

                const postDiv = document.createElement('div')
                postDiv.className = 'post-div'
                const postP = document.createElement('p')
                postP.innerHTML = `${JSON.stringify(post, null, 1)} <br>`
                fetch (`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
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
                postDiv.appendChild(postP)
                document.body.appendChild(postDiv)
