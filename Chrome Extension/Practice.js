// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box
// 3. Log out "I want to open the box!" when it's clicked

let box = document.querySelector('#box');

box.addEventListener("click", function(){
  window.alert("I want to open the box!");
})

// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// Practice innerHTML
const container = document.querySelector('#container');
container.innerHTML = "<button onclick='buy()'>Buy!</button>";

function buy() {
  container.innerHTML += "<p>Thank you for buying!</p>"
}

// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
// Another way to add elements in html through javascript
// const li = document.createElement('li');
// li.textContent = myLeads[i];
// ulEl.append(li);

const recipient = "James";
const sender = "King";
const email = `
    Hey ${recipient}!

    How is it going?

    Cheers ${sender}

`;
console.log(email);

// Storing data in local storage
// localStorage.setItem("myName", "Nirdesh");
// console.log(localStorage.getItem("myName"));
// localStorage.clear();

// const credits = 0;
//
// if (credits > 0) {
//   console.log("Let's Play");
// } else {
//   console.log("Sorry, you have no credits");
// }

//falsy
// false
// 0
// ""
// null --> how you as a developer signalize emptiness
// undefined --> how JavaScript signalizes emptiness
// NaN

let trueOrFalse = Boolean(-1);
console.log('1:'+ trueOrFalse);
