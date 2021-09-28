window.alert("Welcom to RPS")

var win = 0
var loss = 0
var tie = 0


function game(){
  var userChoice = window.prompt("Select r,p,s").toLowerCase()

  var choices = ["r","p","s"]
  var computerChoice = choices[Math.floor(Math.random()*choices.length)]

  window.alert("Computer's Choice : " + computerChoice)

  if(userChoice === computerChoice){
    tie++
    window.alert("You Tied with the Computer")
  } else if(userChoice == 'r' && computerChoice =='p'){
    loss++
    window.alert("LOSER!!")
  } else if (userChoice == 'r' && computerChoice == 's'){
    win++
    window.alert("MAgestic!")
  } else if (userChoice == 's' && computerChoice == 'p'){
    win++
    window.alert("MAgestic!")
  }else if (userChoice == 's' && computerChoice == 'r'){
    loss++
    window.alert("loser")
  }else if (userChoice == 'p' && computerChoice == 'r'){
    win++
    window.alert("MAgestic!")
  }else if (userChoice == 'p' && computerChoice == 's'){
    loss++
    window.alert("loser!")
  } else {
    window.alert("Forgot this option")
  }

  window.alert("wins:" + win+ "///loss:"+loss + "///ties:"+tie)

  var playAgain= window.confirm("Wanna play again?")
  if(playAgain){
    game()
  }
}

game()



