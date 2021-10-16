var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML

      for (var index = 0; index < data.length; index++) {
        //save the Element for easy access
        var user = data[index];

        // Create your HTML elements dynamically
        var userName = document.createElement("h2")
        var userProfile = document.createElement("a")
        var avatar = document.createElement("img")
        
        // Update the Value (text, src, href etc)
        userName.textContent = user.login
        userProfile.textContent = user.html_url
        userProfile.setAttribute("href", user.html_url)
        avatar.setAttribute("src", user.avatar_url )

        // Put the items on the screen!
        userContainer.append(userName)
        userContainer.append(userProfile)
        userContainer.append(avatar)
      }
    });
}
fetchButton.addEventListener('click', getApi);
