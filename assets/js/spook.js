var isFading = false

var thingy = setInterval(function() {
  if(document.getElementById('sp00kdiv').style.opacity > 0 && isFading) {
    document.getElementById('sp00kdiv').style.opacity -= 0.009
  } else {
    document.getElementById('sp00kdiv').style.opacity = 0
    isFading = false
  }
}, 1)

document.body.innerHTML +=
  '<audio id="sp00k" src="' + chrome.extension.getURL('assets/sound/spooky.mp3') + '" preload="auto"></audio>'

document.body.innerHTML += '<style> \
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } } \
  #sp00kdiv { \
    position:absolute; \
    font-family: \'Comic Sans MS\'; \
    font-size: 32px; \
    font-weight: bold; \
    top: 0px; \
    left: 0px; \
    z-index: 10000; \
    opacity: 0; \
    pointer-events: none; \
    -webkit-animation:spin 500ms linear infinite; \
  } \
</style>\
<div id="sp00kdiv"> \
  spooky! \
</div>'
document.body.addEventListener("click", function(event) {

  var rand = Math.floor(Math.random() * 50)
  rand = 1

  if (rand == 1) {
    document.getElementById('sp00k').play()
    mouseX = event.pageX
    mouseY = event.pageY
    offsetX = document.getElementById('sp00kdiv').clientWidth / 2
    offsetY = document.getElementById('sp00kdiv').clientHeight / 2
    document.getElementById('sp00kdiv').style.top = (mouseY - offsetY) + "px"
    document.getElementById('sp00kdiv').style.left = (mouseX - offsetX) + "px"
    document.getElementById('sp00kdiv').style.opacity = 1
    isFading = true
  }

})
