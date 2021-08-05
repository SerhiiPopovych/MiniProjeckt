fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
let usersDiv = document.createElement('div')
        usersDiv.className = 'users-box'
for (const user of users) {
    const userDiv = document.createElement('div')
    const userP = document.createElement('p')
    userP.innerText = ` ${user.id} - ${user.name}`
    const button = document.createElement('button')
    button.className = 'button-details'
    button.innerText = ('Details')
    button.onclick = () => {
       document.location.href = (`user-details.html?user=${JSON.stringify(user)}`)
        // localStorage.setItem('user_id', user.id);
    }
    userDiv.appendChild(userP)
    userDiv.appendChild(button)
    usersDiv.appendChild(userDiv)
    document.body.appendChild(usersDiv)
}
}
)