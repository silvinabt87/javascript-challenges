let body = document.body;
let button = body.children[2].children[1];
let input = body.children[2].children[0];
let resultArea = body.children[3];

button.addEventListener("click", (e) => {
  resultArea.innerHTML = "";
  addTwoDigits(input.value);
  input.value = "";
});

let addTwoDigits = (num) => {
  let digit = num.toString().split("");
  let result = 0;
  for (i = 0; i < digit.length; i++) {
    let digitToNumber = parseInt(digit[i]);
    result = result + digitToNumber;
  }
  let div = document.createElement("div");
  div.id = "showResult";
  div.innerText = `The sum of the digits of the number entered is ${result}`;
  resultArea.appendChild(div);
};
