var startBtn = document.querySelector("#start")
var bodyEl = document.querySelector("body")
var wordToGuessEl = document.querySelector("#wordToGuess")

var words = ["hello","bye","turtle"]
var gameStarted = false
var guessWordSoFar = []

var selectedWordToGuess = words[Math.floor(Math.random()*words.length)]
console.log(selectedWordToGuess)

function toUnderlines(toUnderline){ 
  for(var i=0; i<toUnderline.length; i++){
    guessWordSoFar.push("_")
  }
  wordToGuessEl.textContent = guessWordSoFar.join(" ")
}

toUnderlines(selectedWordToGuess)

startBtn.addEventListener("click", function(){
  gameStarted = true
})

bodyEl.addEventListener("keydown", function(event){
  if(!gameStarted){
    return
  }

  var letterPressed = event.key
  for(var i =0; i <selectedWordToGuess.length; i++){
    var letter = selectedWordToGuess[i]
    if(letter === letterPressed){
      guessWordSoFar[i] = letter
    }
  }

  wordToGuessEl.textContent = guessWordSoFar.join(" ")

})

