var isFading = false

var animation = document.createElement("style")
animation.type = 'text/css';
var spin = document.createTextNode('@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }');
animation.appendChild(spin);

document.getElementsByTagName('head')[0].appendChild(animation)

var sp00kdiv = document.createElement("div")
sp00kdiv.innerHTML = "spooky!"
sp00kdiv.style.position = "absolute"
sp00kdiv.style.fontFamily = "'Comic Sans MS'"
sp00kdiv.style.fontSize = "32px"
sp00kdiv.style.fontWeight = "bold"
sp00kdiv.style.top = "0px"
sp00kdiv.style.left = "0px"
sp00kdiv.style.zIndex = "10000"
sp00kdiv.style.opacity = 0
sp00kdiv.style.pointerEvents = "none"
sp00kdiv.style.webkitAnimation = "spin 500ms linear infinite"

var sp00k = document.createElement("audio")
sp00k.src = chrome.extension.getURL('assets/sound/spooky.mp3')

document.body.appendChild(sp00k)
document.body.appendChild(sp00kdiv)

var thingy = setInterval(function() {
  if(sp00kdiv.style.opacity > 0 && isFading) {
    sp00kdiv.style.opacity -= 0.009
  } else {
    sp00kdiv.style.opacity = 0
    isFading = false
  }
}, 1)

var count = 0
console.log(count)
document.body.addEventListener("click", function(event) {
  count++
  var rand = Math.floor(Math.random() * (29 - count))
  console.log('ODDS: ' + (((count)/29)*100) + '%')
  if (rand == 1) {
    count = 0
    sp00k.play()
    mouseX = event.pageX
    mouseY = event.pageY
    offsetX = sp00kdiv.clientWidth / 2
    offsetY = sp00kdiv.clientHeight / 2
    sp00kdiv.style.top = (mouseY - offsetY) + "px"
    sp00kdiv.style.left = (mouseX - offsetX) + "px"
    sp00kdiv.style.opacity = 1
    isFading = true
  }

})
