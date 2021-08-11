const buttoChatWidgetSide = document.querySelector(".chat-widget__side");
const chatWidget = document.querySelector(".chat-widget");
const chatWidgetMessages = document.querySelector(".chat-widget__messages");
const chatWidgetInput = document.querySelector(".chat-widget__input");
let time = getTime();

buttoChatWidgetSide.addEventListener("click", () => {
  chatWidget.classList.add("chat-widget_active");
  setInterval(timer.repeat, 1000);
})

const robotMessages = [
  "Кто тут?",
  "Где ваша совесть?",
  "Все операторы заняты, не пишите нам!",
  "Добрый день! До свидания!",
  "Мы ничего не будем вам продавать.",
  "У нас обед, приходите завтра."
]

function getTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (hours < 10 && minutes < 10) {
    return `${0}${hours}:${0}${minutes}`;
  } else if (hours < 10) {
      return `${0}${hours}:${minutes}`;
  } else if (minutes < 10) {
      return `${hours}:${0}${minutes}`;
  } else {
      return `${hours}:${minutes}`;
  }
}

chatWidgetInput.addEventListener("keydown", function(event) {
  
  if (event.key === "Enter" && chatWidgetInput.value !== " ") {
    chatWidgetMessages.innerHTML += `
      <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">${chatWidgetInput.value}</div>
      </div>
    `;
    chatWidgetInput.value = "";
    robotToUser();
  }
});

let messageTimeout = 30;

const timer = {
  counter: messageTimeout,
  repeat: () => {
    timer.counter--;
    if (timer.counter <= 0) {
      robotToUser();
    }
  }
};

const robotToUser = () => {
  timer.counter = messageTimeout;
  const robotMessage = robotMessages[Math.floor(Math.random() * robotMessages.length)];
  chatWidgetMessages.innerHTML += `
    <div class="message">
      <div class="message__time">${time}</div>
      <div class="message__text">${robotMessage}</div>
    </div>
  `;
  chatWidgetMessages.lastElementChild.scrollIntoView(false);
}