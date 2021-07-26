const clock = function() {
    const timerId = document.getElementById("timer");
    let hours = timerId.textContent.substring(0, 2);
    let minutes = timerId.textContent.substring(3, 5);
    let seconds = timerId.textContent.substring(6, 8);
     
    if (parseInt(hours) === 0 && parseInt(minutes) === 0 && parseInt(seconds) === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timerId);
        window.location.assign("https://netology.ru//");

    } else if (parseInt(seconds) === 0 && parseInt(minutes) === 0) {
        hours = parseInt(hours) - 1;
        minutes = 59;
        seconds = 59;
        if (hours < 10) {
            timerId.textContent = `0${hours}:${minutes}:${seconds}`;
        } else {
            timerId.textContent = `${hours}:${minutes}:${seconds}`;
        }

    } else if (parseInt(seconds) === 0) {
        minutes = parseInt(minutes) - 1;
        seconds = 59;
        if (minutes < 10) {
            timerId.textContent = `${hours}:0${minutes}:${seconds}`;
        } else {
            timerId.textContent = `${hours}:${minutes}:${seconds}`;
        }

    }  else {
        seconds = parseInt(seconds) - 1;
        if (seconds < 10) {
            timerId.textContent = `${hours}:${minutes}:0${seconds}`;
        } else {
            timerId.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }
}

setInterval(clock, 1000);