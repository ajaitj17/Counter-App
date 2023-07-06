//document.getElementById("count-el").innerHTML = 5;
let saveEl = document.getElementById("save-el");
let count = 0;

let countEl = document.getElementById("count-el");

console.log(countEl);

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let total = count + " - ";
  saveEl.textContent += total;
  countEl.textContent=0;
  count=0;
  console.log(count);
}
