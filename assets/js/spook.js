var spookySound = new Audio("assets/sound/spooky.mp3")
var button = document.getElementById("button")
button.addEventListener("click", function(){
  spookySound.play()
})
