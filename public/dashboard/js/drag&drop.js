const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');
const fileInput = document.getElementById("file-input");
const fileInfo = document.querySelector('.fileinfo');
const icon = document.querySelector('.icon')
// const nav = document.querySelector('.navbar-nav')

let button = document.querySelector('.button');

let file;

button.onclick = () => {
    fileInput.click();

}

fileInput.addEventListener('change', function () {
    for (let i = 0; i < this.files.length; i++) {
        file = this.files[i];
        dragArea.classList.add('active');
        displayFile(file);
    }
});

dragArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dragText.textContent = 'Release to Upload';
    dragArea.classList.add('active');
});

dragArea.addEventListener('dragleave', () => {
    dragText.textContent = 'Drag & Drop';
    dragArea.classList.remove('active');
});

dragArea.addEventListener('drop', (event) => {
    event.preventDefault();

    for (let i = 0; i < event.dataTransfer.files.length; i++) {
        file = event.dataTransfer.files[i];
        displayFile(file);
    }
});

function displayFile(file) {
    let fileType = file.type;

    let validExtensions = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

    if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();

        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let fileTag =  `<p>${file.name}</p>`;
            fileInfo.insertAdjacentHTML('beforeend', fileTag);
            
        };
        fileReader.readAsDataURL(file);
    } else {
        alert('This File Cannot Be Imported');
        dragArea.classList.remove('active');
    }
}
