const box = document.getElementById("textBox");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const size = btn.dataset.size;
    box.style.fontSize = size;
    box.textContent = `Font Size : ${size}`;
  });
});
