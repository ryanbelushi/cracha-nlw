const linksSocialMedia = {
  name: 'Ryan',
  github: 'ryanbelushi',
  youtube: 'maykbrito',
  facebook: 'ryan.vinicius.1401',
  linkedin: 'ryan-belushi-71351b220',
  instagram: 'ryanbelushi',
  twitter: 'dtsk01'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMedia()

function changeName() {
  userName.textContent = 'Ryan'
}

changeName()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
