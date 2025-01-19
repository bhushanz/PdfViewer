const pdfContainer = document.getElementById("pdf-container");
const pdfIframe = document.getElementById("pdf-iframe");
const toggleButton = document.getElementById("toggle-pdf-btn");

const pdfUrl = "AppBreweryCornellNotesTemplate.pdf";

toggleButton.addEventListener("click", function(){

    if(pdfContainer.style.display === "none"){
          
        pdfIframe.src = `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`; // Disable toolbar and navpane
        pdfContainer.style.display = "block";
        toggleButton.textContent = "Close PDF";
        toggleButton.style.backgroundColor = "rgb(106, 251, 106)";
    }
    else{
        pdfIframe.src = ""; // Clear the iframe source
        pdfContainer.style.display = "none";
        toggleButton.textContent = "Open PDF";
        toggleButton.style.backgroundColor ="";
    }
})