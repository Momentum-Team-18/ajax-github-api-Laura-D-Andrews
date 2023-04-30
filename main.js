let containerBox = document.querySelector('#containerBox')

let myUrl = "https://api.github.com/users/Laura-D-Andrews"

fetch(myUrl, {
  method: "GET",
  headers: { "Content-Type": "application.json" },
})
  .then(function (response) {
    return response.json();
  })
  .then((parsedResponse) => {
    console.log(parsedResponse) 
  

let avatar = document.createElement('img')
avatar.src = `${parsedResponse.avatar_url}`
containerBox.appendChild(avatar)
avatar.classList.add("avatar")

let name = document.createElement('div')
name.innerText = `${parsedResponse.name}`
containerBox.appendChild(name)
name.classList.add('name')

let gitLocation = document.createElement('div')
gitLocation.innerText = `${parsedResponse.location}`
containerBox.appendChild(gitLocation)
gitLocation.classList.add("location")
  // url
let gitUrl = document.createElement('div')
gitUrl.innerText = `${parsedResponse.url}`
containerBox.appendChild(gitUrl)
gitUrl.classList.add("gitUrl")
  //username
let gitUsername = document.createElement('div')
gitUsername.innerText = `${parsedResponse.login}`
containerBox.appendChild(gitUsername)
gitUsername.classList.add("userName")

let reposHeader = document.createElement('h2')
reposHeader.innerText = "Git Repos"
containerBox.appendChild(reposHeader)
reposHeader.classList.add("reposHeader")

