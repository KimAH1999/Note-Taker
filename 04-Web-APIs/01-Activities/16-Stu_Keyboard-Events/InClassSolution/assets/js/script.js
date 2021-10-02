var statusEl = document.querySelector("#status")
var keyCodeEl = document.querySelector("#code")
var keyPressedEl = document.querySelector("#key")

function keydownAction(event) {
  // console.log(event)
  // TODO: Complete keydown function
  statusEl.innerHTML = "KEYDOWN Event";
  keyCodeEl.textContent = event.code
  keyPressedEl.textContent = event.key
}

function keyupAction(event) {
  statusEl.innerHTML = "KEYUP Event";
  keyCodeEl.textContent = event.code
  keyPressedEl.textContent = event.key
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction)

