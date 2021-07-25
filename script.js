
//Get the video
var video = document.getElementById("myVideo");
console.log(video);
// Get the button
var myBtn = document.getElementById("myBtn");
console.log(myBtn);
// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


