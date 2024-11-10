const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const fileView = document.getElementById("file-view");

inputFile.addEventListener("change", uploadFile);

function uploadFile(){
    let fileLink = URL.createObjectURL(inputFile.files[0]);
    fileView.style.backgroundImage = 'URL(${fileLink})';
    fileView.textContent = "";
    fileView.style.border = 0;
}