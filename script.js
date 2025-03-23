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
function openPopup() {
  document.getElementById("popup").classList.add("show");
}

// Закрываем popup
function closePopup() {
  document.getElementById("popup").classList.remove("show");
}


// https://www.geeksforgeeks.org/how-to-add-gif-in-html/
