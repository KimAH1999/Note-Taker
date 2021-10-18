fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

//https://api.github.com => Root Endpoint (the api we will hit to get data)
// /repos/nodejs/issues => Endpoint (specific part of the api)
//? => opens to pass in paramers (begining of paramaters)
// & => additional paramter, concatenate paramters 

// per_page => [specific paramter] how many results per page
//state => [specific paramter] status of the issue (open or closed)
//created => [specific paramter] search for issues after created date
//direction => [specific paramter] sort (asc or desc)