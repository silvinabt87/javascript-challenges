let body = document.body;
let input = body.children[0].children[2].children[0];
let button = body.children[0].children[2].children[1];
let resultArea = body.children[0].children[3];

button.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  resultArea.innerHTML = "";
  firstDuplicate();
});

function firstDuplicate() {
  let userInput = input.value;
  let array = Array.from(String(userInput), Number);
  let firstDup = {};
  for (let num of array) {
    if (firstDup.hasOwnProperty(num)) {
      let div = document.createElement("div");
      div.id = "showResult";
      div.innerText = `${num} is duplicated`;
      resultArea.appendChild(div);
    }
    firstDup[num] = null;
    // let div = document.createElement("div");
    // div.id = "showResult";
    // div.innerText = "No number is duplicated";
    // resultArea.appendChild(div);
  }
  return -1;
}
