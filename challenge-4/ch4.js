// tomar input y pasarlo a numero
// tomar los numeros y ponerlos en un Array
// tomar el array e iterar uno por uno
// en cada iteracion, corroborar que sea even
// si en una de las iteraciones es odd, q devuelva falso
let main = document.querySelector("main");
let resultArea = main.children[3];
let input = main.children[2].children[0];
let button = main.children[2].children[1];
button.addEventListener("click", (e) => {
  e.preventDefault;
  resultArea.innerHTML = "";
  getEvenAndOdds();
  input.innerText = "";
});

getEvenAndOdds = () => {
  let userInput = input.value;
  let array = Array.from(String(userInput), Number);
  let isEven = (number) => number % 2 === 0;
  if (array.every(isEven)) {
    let p = document.createElement("p");
    p.innerText = `The numbers you've entered are all even`;
    resultArea.appendChild(p);
  } else {
    let p = document.createElement("p");
    p.innerText = `The numbers you've entered are not all even`;
    resultArea.appendChild(p);
  }
};
