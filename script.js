// let img = document.createElement("img");
// img.src = "gif_image_cat.gif";
// img.alt = "An Example";
// img.width = 400;
// img.height = 300;
// document.getElementById("gif_cat").appendChild(img);

// document.getElementById("gif_cat").addEventListener("mouseover", over);

function onclick_event() {
     document.getElementById("gif_cat").innerHTML = "Welcome to GeeksforGeeks!";
}

 function over() {
     document.getElementById("gif_cat").style.color = "green";
 }

 function openPDF() {
    // URL of the PDF file
    var pdfURL = 'source/CV_Egorova.pdf';
  
    // Open the PDF in a new tab
    window.open(pdfURL, '_blank');
  }

// https://www.geeksforgeeks.org/how-to-add-gif-in-html/
