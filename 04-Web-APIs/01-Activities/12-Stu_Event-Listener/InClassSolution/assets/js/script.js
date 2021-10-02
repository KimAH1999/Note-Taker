var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function(){
  count++
  setCounterText()
})

// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", function(){
  if(count > 0){
    count--
    setCounterText()
  }

})