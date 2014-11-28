document.body.innerHTML +=
  '<audio id="sp00k" src="http://qas.im/projects/spookyfy/spooky.mp3" preload="auto"></audio>'
document.body.addEventListener("click", function(event) {
  var rand = Math.floor(Math.random() * 100);
  console.log(rand);
  if (rand % 10 == ) {
    document.getElementById('sp00k').play();
  }
  if (rand == 1) {
    mouseX = event.pageX;
    mouseY = event.pageY;
    document.body.innerHTML += '<div id="sp00kdiv">foo</div>'
  }

})
