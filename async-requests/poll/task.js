const pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.querySelector("#poll__answers");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.responseType = "json";
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    let text = xhr.response.data.title;
    text = pollTitle.textContent;

    xhr.response.data.answers.forEach(item => {
      pollAnswers.insertAdjacentHTML("beforeend", `<button class="poll__answer">${item}</button>`);
    });
        
    const pollAnswer = Array.from(document.querySelectorAll(".poll__answer"));
       
    pollAnswer.forEach(item => {
      item.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
    });
  }
});