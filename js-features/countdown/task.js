const timerElement = document.getElementById("timer");
let count = Number(timerElement.textContent);

const clock = function() {
    count -= 1;
    timerElement.textContent = count;
    
    if (count === 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
    }
}

timerId = setInterval(clock, 1000);