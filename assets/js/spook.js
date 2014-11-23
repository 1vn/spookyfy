document.body.addEventListener("click", function() {
  var rand = Math.floor(Math.random() * 100);
  console.log(rand);
  if (rand % 5 == 0) {
    document.body.innerHTML +=
      '<audio id="sp00k" src="http://qas.im/projects/spookyfy/spooky.mp3" preload="auto"></audio>'
    document.getElementById('sp00k').play();
  }
})
