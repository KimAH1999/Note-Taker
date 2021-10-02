var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  console.log(element)
  // TODO: Complete function

  var elValue = element.getAttribute("data-number")
  console.log(elValue)
  var elState = element.getAttribute("data-nick")

  if(elState === "hidden"){
    element.textContent = elValue
    element.setAttribute("data-nick", "visible")
  } else { 
    element.textContent = " "
    element.setAttribute("data-nick", "hidden")

    // using CSS instead
    // element.setAttribute("class", "box hideitem")
  }
});
