let body = document.body;
let input = body.children[0].children[2].children[0];
let button = body.children[0].children[2].children[1];
let resultArea = body.children[0].children[3];

button.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  resultArea.innerHTML = "";
  sumOfPrimes();
});

sumOfPrimes = () => {
  let result=0
  let userInput = parseInt(input.value);
  let divisorsArray = [1];
  for (let i = 0; i <= userInput / 2; i++) {
    if (userInput % i === 0) {
      divisorsArray.splice(1, 0, userInput / i);
    }
  }
  divisorsArray.forEach((num) => {
    if (num % 2 == 1) {
      result = result + num;
    } else {
      result;
    }
  });
  let p = document.createElement("p");
  p.id = "result";
  p.innerText = `The sum of all the prime divisors of ${userInput} is ${result}`;
  resultArea.appendChild(p);
};


//IMPROVEMENTS:
//resize input size to fit text
//incorporate dinamic triangles background

