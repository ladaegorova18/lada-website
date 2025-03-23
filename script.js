function onclick_event() {
     document.getElementById("gif_cat").innerHTML = "Default text";
}

 function over() {
    //  document.getElementById("gif_cat").style.color = "green";
 }

 function openPDF() {
    // URL of the PDF file
    var pdfURL = 'source/CV_Egorova.pdf';
  
    // Open the PDF in a new tab
    window.open(pdfURL, '_blank');
  }

// Открываем popup
function openPopup(id) {
  document.getElementById(id).classList.add("show");
}

// Закрываем popup
function closePopup(id) {
  document.getElementById(id).classList.remove("show");
}

function getDisplayedBackgroundSize(element) {
  let rect = element.getBoundingClientRect();
  myString = ("Displayed Background Size:", rect.width + "x" + rect.height);
  document.getElementById("text_content").textContent = myString;
}