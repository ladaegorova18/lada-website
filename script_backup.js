

function updateElementPosition(element, scaleWidth, orientationWidth, scaleHeight, orientationHeight, type) {
  var standartWidth = 1920;
  var standartHeight = 1080;

  var standardRatio = standartWidth / standartHeight;
  var viewportWidth = window.innerWidth; 
  var viewportHeight = window.innerHeight;
  var currentRatio = viewportWidth / viewportHeight;
  document.documentElement.style.setProperty('--aspect-ratio', currentRatio);

  console.log("Current ratio: ", currentRatio); 

  var positionWidth = element.style.width;
  var positionHeight = element.style.height;
  currHeight = 0;
  currRatioSquare = currentRatio * currentRatio;
  if (type == "laptop") {
    // currDeltaPositionWidth = -5.3 * currentRatio * currentRatio + 34.49 * currentRatio - 19.4
    // console.log("Current delta position 1: ", currDeltaPositionWidth);  
    currPositionWidth = 10 + 21 * (currentRatio - 1);
    // console.log("Current delta position 2: ", currDeltaPositionWidth);
    
    positionWidth = Math.min(currPositionWidth, scaleWidth * 100);
    // console.log("Delta position width: ", positionWidth);

    currPositionHeight = 4.52 * currRatioSquare - 8.62 * currentRatio + 66.1;
    positionHeight = currPositionHeight;
    // positionHeight = Math.min(currPositionHeight, scaleHeight * 100);
    // console.log("Position height: ", positionHeight);
  }
  else if (type == "cat") {
    currHeight = -0.8 * currRatioSquare * currentRatio + 7.85 * currRatioSquare - 15.5 * currentRatio + 28.5;
    // console.log("Current height: ", currHeight);
    positionHeight = 1.08 * currRatioSquare - 3.25 * currentRatio + 49.1;
  }
  else if (type == "cup_holder") {
    // currHeight = 1.71429 * currentRatio + 8.28571;
    // positionHeight = 6.37938 * currRatioSquare -15.56449 * currentRatio +69.38199
    positionHeight = scaleHeight * 100 - (standardRatio - currentRatio) * 8;
    // positionWidth = 37 + (currentRatio - standardRatio) * 10;
    // positionWidth = 5.14286 * currentRatio + 24.85714;
    // positionWidth = 9.43733 * currentRatio + 19.44048;
    // positionWidth = -5.49002 * currRatioSquare + 25.92159 * currentRatio + 7.86191
    // positionWidth = 37 + (currentRatio - standardRatio) * 10;
  }
  else if (type == "girl") { 
    // currHeight = -45.4 * currRatioSquare * currentRatio + 296.5 * currRatioSquare - 591.1 * currentRatio + 429.2;
    currHeight = 12.70266 * currRatioSquare - 29.38576 * currentRatio + 73.83312
    console.log("Current height girl : ", currHeight);
    // positionHeight = 35.3 * currRatioSquare * currentRatio - 234.09 * currRatioSquare + 473.62 * currentRatio - 299.75;
    // positionHeight = -11.37 * currRatioSquare + 28.8 * currentRatio - 18.2;
    positionHeight = -11.25836 * currRatioSquare + 26.00312 * currentRatio - 12.61458;
    console.log("position height girl : ", positionHeight);
    positionWidth = 271 / 21 * currRatioSquare * currentRatio - 2525 / 28 * currRatioSquare + 17279 / 84 * currentRatio - 934 / 7;
    console.log("positionWidth", positionWidth);
  }
  else {
    console.error("Unknown type:", type);
  }

  if (orientationWidth == "left") {
    element.style.left = `${positionWidth}vw`;
  } else {
    element.style.right = `${positionWidth}vw`;
  }

  if (orientationHeight == "top") {
    element.style.top = `${positionHeight}vh`;
  } else {
    element.style.bottom = `${positionHeight}vh`;
  }

  if (currHeight > 0) {
    console.log("currentHeight: type:", currHeight, type);
    element.style.height = `${currHeight}vh`;
  }
}

function getDisplayedBackgroundSize(element) {
    let rect = element.getBoundingClientRect();
    myString = ("Displayed Background Size:", rect.width + "x" + rect.height);
    document.getElementById("text_content").textContent = myString;
  }