const videos = [
  "source/games/videos/checkout.mp4",
  "source/games/videos/checkout.mp4",
  "source/games/videos/checkout.mp4"
];

currentVideoIdx = 0;

function onclick_event() {
     document.getElementById("gif_cat").innerHTML = "Default text";
}

function over() {
  //  document.getElementById("gif_cat").style.color = "green";
}

function openPDF() {
  var pdfURL = 'source/CV_Egorova.pdf';
  window.open(pdfURL, '_blank');
}

function openPopup(id) {
  document.getElementById(id).classList.add("show");
}

function closePopup(id) {
  document.getElementById(id).classList.remove("show");
}

function openPopupWithVideo(id) {
  document.getElementById(id).classList.add("show");
  let video = document.getElementById("bgVideo");
  let popup = document.getElementById(id);
  popup.style.display = "flex";
  video.play(); // Ensure autoplay starts
}

function closePopupWithVideo(id) {
  document.getElementById(id).classList.remove("show");
  let video = document.getElementById("bgVideo");
  video.pause();
  video.currentTime = 0;
}

function getDisplayedBackgroundSize(element) {
  let rect = element.getBoundingClientRect();
  myString = ("Displayed Background Size:", rect.width + "x" + rect.height);
  document.getElementById("text_content").textContent = myString;
}

function changeVideo(index){
  if (index == -1) {
    currentVideoIdx = (currentVideoIdx - 1 + videos.length) % videos.length;
  } else {
    currentVideoIdx = (currentVideoIdx + 1) % videos.length;
  }

  let video = document.getElementById("bgVideo");
  video.src = videos[currentVideoIdx];
  video.play();
}

function updatePositions(){
  var viewportWidth = window.innerWidth; 
  var viewportHeight = window.innerHeight;
  var currentRatio = viewportWidth / viewportHeight;
  document.documentElement.style.setProperty('--currratio', currentRatio);
}

window.onload = function() {
  console.log("Window loaded");
  updatePositions();
}

window.addEventListener("resize", () => {
  console.log("Resizing...");
  updatePositions();
});