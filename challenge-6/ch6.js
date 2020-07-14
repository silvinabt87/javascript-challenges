let main = document.querySelector("main");
let input = main.children[2].children[0];
let button = main.children[2].children[1];
let resultArea = main.children[3];
let newArray = [];
let firstLetter;
let letter;

button.addEventListener("click", (e) => {
  e.preventDefault();
  resultArea.innerHTML = "";
  giveProperNoun();
});

giveProperNoun = () => {
  let word = input.value;

  if (word.charCodeAt(0) > 64 && word.charCodeAt(0) < 91) {
    firstLetter = word[0];
  } else {
    firstLetter = word[0].toUpperCase();
  }
  newArray.push(firstLetter);

  for (let i = 1; i < word.length; i++) {
    if (word.charCodeAt(i) > 64 && word.charCodeAt(i) < 91) {
      letter = word[i].toLowerCase();
    } else {
      letter = word[i];
    }
    newArray.push(letter);
  }

  let newWord = newArray.join("");
  let p = document.createElement("p");
  p.innerText = `The proper way to spell "${word}" is actually ${newWord}. You're welcome ;)`;
  resultArea.appendChild(p);
};
