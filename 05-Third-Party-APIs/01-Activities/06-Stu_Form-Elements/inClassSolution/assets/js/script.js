var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var inputField = $("#shopping-input")

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function submissionForm (e){ 
  e.preventDefault()

  // var inputText = inputField.val()
  // var inputText = $("input[name=shopping-input]").val()
  var inputText = shoppingFormEl.children().first().val()
console.log(shoppingFormEl.children().first().val())
console.log(shoppingFormEl.children()[0])
  var listEl = $("<li>")
  listEl.text(inputText)

  shoppingListEl.append(listEl)
  inputField.val("")
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", submissionForm)