var container = document.querySelector("#content-container")

function getParams(){
  var queryParms = document.location.search.split("&")
  console.log(queryParms)

  var query = queryParms[0].split("=")[1]
  var dropDown = queryParms[1].split("=")[1]

  searchApi(query,dropDown)
  
}

function searchApi(query, format) {
  var locQueryUrl = 'https://www.loc.gov/search/?fo=json';

  if (format) {
    locQueryUrl = 'https://www.loc.gov/' + format + '/?fo=json';
  }

  locQueryUrl = locQueryUrl + '&q=' + query;

    fetch(locQueryUrl)
    .then(function(response){
      return response.json()
    }).then(function(data){
      console.log(data)
      var results= data.results
      for(var i=0; i<results.length;i++){
        var ptag = document.createElement("p")
        ptag.textContent = results[i].description[0]
        container.append(ptag)

      }

    })

}

getParams()