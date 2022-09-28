// save DOM element ass variable
const readButt = document.querySelector("#done");
const counter = document.querySelector("#counter");
const newMess = document.querySelectorAll(".new");
const dot = document.querySelectorAll(".dot");
//if clicked button make a action
readButt.addEventListener("click", () => {
  counter.textContent = 0;
  newMess.forEach((el) => {
    el.classList.remove("new");
  });
  dot.forEach((el) => {
    el.classList.add("hidden");
  });
});
