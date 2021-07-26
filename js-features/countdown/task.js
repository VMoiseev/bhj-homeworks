const clock = function() {
    const timerId = document.getElementById("timer");
    timerId.textContent -= 1;

    if (parseInt(timerId.textContent) === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timerId);
    }
}

setInterval(clock, 1000);