var issueContainer = document.getElementById('issues');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/repos/IBM/clai/issues?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var userName = document.createElement('h3');
        var issueTitle = document.createElement('p');
        var avatar = document.createElement('img')
        userName.textContent = data[i].user.login;
        avatar.setAttribute("src", data[i].user.avatar_url)
        issueTitle.textContent = data[i].title;
        issueContainer.append(userName);
        issueContainer.append(issueTitle);
        issueContainer.append(avatar)
      }
    });
}
fetchButton.addEventListener('click', getApi);
