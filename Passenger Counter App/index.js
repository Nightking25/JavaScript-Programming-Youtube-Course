// document.getElementById("count-el").innerText = 5;

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
// let entries = 0;
function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let entries = count + " - ";
  saveEl.textContent += entries;
  count = 0;
  countEl.textContent = count;
}


// let welcomeEl = document.getElementById('welcome-el');
// let name = "Nirdesh Shrestha";
// let greeting = "Welcome Back! ";
// let myGreeting = greeting + name;
//
// welcomeEl.innerText = myGreeting;
//
// welcomeEl.innerText += String.fromCodePoint(0x1F44B);
