const textEditor = document.getElementById("editor");

textEditor.addEventListener("input", () => {
  localStorage.setItem("text", textEditor.value);
})

textEditor.value = localStorage.getItem("text");