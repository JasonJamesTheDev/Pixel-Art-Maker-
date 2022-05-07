//imports elements, assign to variables
var canvas = document.getElementById("canvas");
var color = document.getElementById("colorChange");
var sizePicker = document.getElementById("sizeChange");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var toggle = document.getElementById("toggleGrid");
var save = document.getElementById("saveCanvas");

//creating grid and assign event listeners
function makeGrid(height, width) {
    for (let y = 0; y < height; y++) {
        let row = canvas.insertRow(y);
        for (let x = 0; x < width; x++) {
            let cell = row.insertCell(x);
            cell.addEventListener("mousedown", function(event) {
                cell.style.backgroundColor = color.value;
            cell.addEventListener("contextmenu", function(event) {
                evt.preventDefault();
                cell.style.backgroundColor = "white";
            } )
            } )
        }
    }
}

//toggle function for canvas on/off
toggle.addEventListener("click", function() {
    var elementsTd = document.getElementsByTagName("td");
    var elementsTr = document.getElementsByTagName("tr");
    for (var i=0; i<elementsTd.length; ++i) {
        elementsTd[i].classList.toggle("off");
    }
    for (var j=0; j<elementsTr.length; ++j) {
        elementsTr[j].classList.toggle("off");
    }
});

//size picker submit to call makeGrid() funtion
sizePicker.addEventListener("submit", function(event) {
    evt.preventDefault();
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }
    makeGrid(height.value, width.value);
});

//let's us save the canvas
save.addEventListener("click", function(event) {
    evt.preventDefault();
    html2canvas(canvas).then(canvas => {
        document.body.appendChild(canvas)
    });
});
