// YOUR CODE HERE
document.getElementById("btn1").addEventListener("click", () => {
  document.getElementById("output1").style.color = "red";
});

document.getElementById("btn2").addEventListener("click", () => {
  document
    .getElementById("output2")
    .insertAdjacentHTML("beforeend", "<span>Hello world</span>");
});

document.getElementById("btn3").addEventListener("click", () => {
  document
    .getElementById("output3")
    .querySelector("p")
    .classList.remove("small-text");
});

document.getElementById("btn4").addEventListener("click", () => {
  document
    .getElementById("output4")
    .querySelectorAll("p")
    .forEach((el) => (el.style.color = "red"));
});

document.getElementById("btn5").addEventListener("click", () => {
  const input = document.getElementById("output5").querySelector("input");

  console.log(input.value);
});
