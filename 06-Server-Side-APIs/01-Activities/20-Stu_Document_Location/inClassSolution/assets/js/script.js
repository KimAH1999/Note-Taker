var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  console.log(response)
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
  if(response.status == 404){
    //  document.location = redirectUrl
    document.location.replace(redirectUrl)
    console.log(document.location)
  } else { 
    return response.json()
  }
});
