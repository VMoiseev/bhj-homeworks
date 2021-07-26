const killed = document.getElementById("dead");
const misses = document.getElementById("lost");

for (let index = 1; index <= 9; index++) {
    getHole = index => document.getElementById(`hole${index}`);

    let hole = getHole(index);
    hole.onclick = check;
    
    function check() {
        if (hole.className.includes("hole_has-mole")) {
            killed.textContent = parseInt(killed.textContent) + 1;
        } else {
            misses.textContent = parseInt(misses.textContent) + 1;
        }

        if (parseInt(killed.textContent) === 10) {
            alert("Победа!");
            killed.textContent = 0;
            misses.textContent = 0;
        } 
        if (parseInt(misses.textContent) === 5) {
            alert("Вы проиграли!");
            killed.textContent = 0;
            misses.textContent = 0;
        } 
    }
}