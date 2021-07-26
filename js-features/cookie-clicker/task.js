const counter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");
let timeLastClick = 0;

function changeSize() {
    counter.textContent = parseInt(counter.textContent) + 1;
    
    if (counter.textContent % 2 != 0) {
        image.width = 250;
    } else {
        image.width = 200;
    }

    let nowAfterClick = new Date();
    let timeAfterClick = nowAfterClick.getTime();
    let timePerClick = (timeAfterClick - timeLastClick) / 1000;
    speed.textContent = (1 / timePerClick).toFixed(2);

    timeLastClick = timeAfterClick;
}

image.onclick = changeSize;