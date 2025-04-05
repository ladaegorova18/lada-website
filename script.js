const videos = [
  "source/games/videos/checkout.mp4",
  "source/games/videos/trik_studio.mp4",
  "source/games/videos/saber.mp4"
];

// const descriptions = [
//   "Checkout - a game where you have to check out the items in the store. The game is designed for 2 players, where one player is a cashier and the other is a customer. The cashier has to check out the items as fast as possible, while the customer has to buy as many items as possible.",
//   "Trik Studio - a game where you have to create your own game. The game is designed for 1 player, where the player has to create a game using the assets provided in the game. The player can create a game using the assets provided in the game.",
//   "Saber - a game where you have to cut the items that are flying towards you. The game is designed for 1 player, where the player has to cut the items that are flying towards him. The player can cut the items using the saber provided in the game."
// ];

const descriptions = [
  "Developing a mobile game in just two weeks at a summer IT school turned out to be a significant project. The player’s task is to scan a product by rotating it with their fingers so that the scan code appears in the center of the screen. The game was published in Play Market, however it is not available for download now. The game was developed in a team of 4 people, where I was responsible for the development of the game logic and the user interface. The game was developed in Unity and C#.",
  "TRIK Studio is an integrated development environment designed using QtCreator for children to learn robot programming that features a simulation run that utilizes a 2D virtual robot model. The purpose of the work was to improve the quality of visualization and make it three-dimensional. The problem was solved on Unity engine. The demo video shows the work of the simulated environment, where the robot moves along a given path and performs a task. The robot is controlled by a program written in the TRIK Studio IDE and the running program sincronizes with Unity project where the environment is simulated.",
  "Saber Interactive is a game development company, probably you know them by the titles Timeshift, World War Z, Warhammer 40000: Space Marine 2 and others. I was happy to be a part of the big team. My duties included developing BI logic, user achievements logic, communication with user web portal, backend support and helping other teams with some gameplay tasks."
]

const headers = [
  "Checkout",
  "TRIK Studio 3D Visualization",
  "Saber Interactive project"
]

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
  let video = document.getElementById("bgVideo");
  let popup = document.getElementById(id);
  popup.style.display = "flex";

  updateVideo(0); // Reset to the first video

  document.getElementById(id).classList.add("show");
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

  updateVideo(currentVideoIdx);
}

function updateVideo(currentVideoIdx) {
  let video = document.getElementById("bgVideo");
  video.src = videos[currentVideoIdx];

  let description = document.getElementById("description");
  description.textContent = descriptions[currentVideoIdx];

  let header = document.getElementById("video-header");
  header.textContent = headers[currentVideoIdx];

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

  let popup_video = document.getElementById("popup_video");
  let height = popup_video.offsetHeight;
  // let height = popup_video.getBoundingClientRect().height;
  console.log("Video client height: " + height);
  document.documentElement.style.setProperty('--popupVideoHeight', height + "px");

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