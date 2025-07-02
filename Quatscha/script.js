let count = 0;

const counter = document.getElementById("counter");
const button = document.getElementById("cookie-btn");

button.addEventListener("click", () => {
  count++;
  counter.textContent = `${count} Cookie${count === 1 ? "" : "s"}`;
});
