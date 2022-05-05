var backVideo = document.querySelector("#backVideo");

var playbtn = document.querySelector("#playBtn");

var icon = document.querySelector("#icon");

playbtn.onclick = function () {
  backVideo.style.display = "block";

  if (backVideo.paused) {
    backVideo.play();
    icon.src = "images/pause.png";
  } else {
    backVideo.pause();
    icon.src = "images/play.png";
  }
};
