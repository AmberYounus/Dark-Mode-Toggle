const input = document.querySelector(".input");
const body = document.querySelector("body");
console.log(input.checked);
// input.checked= false;
input.checked = JSON.parse(localStorage.getItem("mode"));

//change the background color
function updateBody() {
  if (input.checked) {
    body.style.background = "black";
    body.style.color ="white"
  } else {
    body.style.background = "white";
    body.style.color ="black";

  }
}
//call the function
updateBody();

input.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});
//to save in localstorage
function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(input.checked));
}
