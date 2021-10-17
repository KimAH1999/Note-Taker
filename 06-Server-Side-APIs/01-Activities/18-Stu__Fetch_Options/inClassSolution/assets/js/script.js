fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  cache:"reload"
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
