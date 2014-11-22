document.body.addEventListener("click", function(){
  document.body.innerHTML += '<audio id="sp00k" src="http://qas.im/projects/spookyfy/spooky.mp3" preload="auto"></audio>'
  document.getElementById('sp00k').play();
})
