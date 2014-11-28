window.isFading = false

document.body.innerHTML +=
  '<audio id="sp00k" src="' + chrome.extension.getURL('assets/sound/spooky.mp3') + '" preload="auto"></audio>'

document.body.innerHTML += '<style> \
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } } \
</style>\
<div id="sp00kdiv" style=" \
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
  "> \
  spooky! \
</div>'

window.sp00kdiv = document.getElementById('sp00kdiv')

window.fadeTimer = setInterval(function() {
  if(window.sp00kdiv.style.opacity > 0 && window.isFading) {
    window.sp00kdiv = document.getElementById('sp00kdiv')
    window.sp00kdiv.style.opacity -= 0.009
  } else {
    window.sp00kdiv = document.getElementById('sp00kdiv')
    window.sp00kdiv.style.opacity = 0
    window.isFading = false
  }
}, 1)

document.body.addEventListener("click", function(event) {

  var rand = Math.floor(Math.random() * 50)

  if (rand == 1) {
    document.getElementById('sp00k').play()
    mouseX = event.pageX
    mouseY = event.pageY
    offsetX = window.sp00kdiv.clientWidth / 2
    offsetY = window.sp00kdiv.clientHeight / 2
    window.sp00kdiv.style.top = (mouseY - offsetY) + "px"
    window.sp00kdiv.style.left = (mouseX - offsetX) + "px"
    window.sp00kdiv.style.opacity = 1
    window.isFading = true
  }

})
