let main = document.querySelector("main");
let input = main.children[2].children[0];
let button = main.children[2].children[1];
let resultArea = main.children[3];
let array = [];

button.addEventListener("click", (e) => {
  e.preventDefault;
  resultArea.innerHTML = "";
  showMissing();
  input.innerText = " ";
});
showMissing = () => {
  let userInput = input.value;
  let nums = Array.from(String(userInput), Number);
  let sortedNums = nums.sort();

  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] - sortedNums[i - 1] !== 1) {
      let missNum = sortedNums[i] - sortedNums[i - 1];
      let j = 1;
      while (j < missNum) {
        array.push(sortedNums[i - 1] + j);
        j++;
      }
    }
  }
let p=document.createElement("p")
p.innerText=`The missing number(s) in [${sortedNums}] is/are [${array}]`
resultArea.appendChild(p)
// console.log(sortedNums)
// console.log(array);
};


//IMPROVEMENTS
//it doesn't show ALL the numbers missing