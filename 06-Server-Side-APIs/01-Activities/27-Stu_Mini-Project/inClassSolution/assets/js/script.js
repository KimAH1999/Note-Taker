var formEl = document.querySelector("form")
var inputEl = document.querySelector("input")
var dropDownValue = document.querySelector("#format-input")
var buttonEl = document.querySelector("button")

buttonEl.addEventListener("click",function(e){
  e.preventDefault()

  var value = inputEl.value
  console.log(value)
  var dropDown = dropDownValue.value
  console.log(dropDown)
  document.location = "./searchresults.html?query="+value+"&drop="+dropDown
  
})