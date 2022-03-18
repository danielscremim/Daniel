const links = {
  github: 'daniel.scremim',
  youtube: 'teste',
  facebook: 'daniel1scremim',
  twitter: 'daniel2scremim',
  instagram: 'daniel3scremim'
}

*/
function changeSocialMediaLinks() {
  for (let li of socialLinks.textContent.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${links.github}`

  fetch (url)
  .then(Response => Response.json())
  .then(data => (data.name))

  for (let name of socialLinks.textContent.children)
    const 
}

getGitHubProfileInfos()

