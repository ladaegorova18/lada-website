const videos = [
  "source/games/videos/checkout.mp4",
  "source/games/videos/trik_studio.mp4",
  "source/games/videos/saber.mp4"
];

currentVideoIdx = 0;

function onclick_event() {
     document.getElementById("gif_cat").innerHTML = "Default text";
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

function changeVideo(index){
  if (index == -1) {
    currentVideoIdx = (currentVideoIdx - 1 + videos.length) % videos.length;
  } else {
    currentVideoIdx = (currentVideoIdx + 1) % videos.length;
  }

  let video = document.getElementById("bgVideo");
  video.src = videos[currentVideoIdx];

  video.addEventListener("loadedmetadata", function() {
    var isThin = document.documentElement.style.getPropertyValue('--isThin'); // Check if the screen is thin (portrait mode)
    const wrapper = document.getElementById("video-wrapper");
    if (video.videoHeight > video.videoWidth && !isThin) {
      // wrapper.style.width = `${videoWidth * 2}px`;
      wrapper.style.flexDirection = "row"; // Vertical: Description to the right
    } else {
      // wrapper.style.height = `${videoHeight * 2}px`;
      wrapper.style.flexDirection = "column"; // Horizontal: Description below
    }
  });

  video.play();
}

function updatePositions(){
  var viewportWidth = window.innerWidth; 
  var viewportHeight = window.innerHeight;
  var currentRatio = viewportWidth / viewportHeight;
  var standardRatio = 1920 / 1080; // 16:9
  document.documentElement.style.setProperty('--currratio', currentRatio);
  document.documentElement.style.setProperty('--ratioDiff', currentRatio - standardRatio);
  console.log("Current Ratio: " + currentRatio);
  console.log("Ratio diff: " + (currentRatio - standardRatio));
  if (currentRatio > standardRatio) {
    document.documentElement.style.setProperty('--isWide', 1);
    document.documentElement.style.setProperty('--isThin', 0);
  }
  else {
    document.documentElement.style.setProperty('--isWide', 0);
    document.documentElement.style.setProperty('--isThin', 1);
  }
}

window.addEventListener("resize", () => {
  console.log("Resizing...");
  updatePositions();
});

updatePositions();