// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

// let person = {
//   name: "Nirdesh",
//   age: 23,
//   country: "Canada"
// }
//
// function logData() {
//   return person.name + " is " + person.age + " years old and lives in " + person.country
// }
//
// console.log(logData());

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

// let age = 67;

// if (age < 6) {
//   console.log("Free");
// } else if (age < 18) {
//   console.log("Child Discount");
// } else if (age < 27) {
//   console.log("Student Discount");
// } else if (age < 67) {
//   console.log("Full Price");
// } else {
//   console.log("Senior Citizen Discount");
// }

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
//
// console.log("The 5 largest countries in the world:");
// for (var i = 0; i < largeCountries.length; i++) {
//   console.log("- " +largeCountries[i]);
// }

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

// let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"]
// console.log(largeCountries2);
// largeCountries2.pop();
// largeCountries2.push("Pakistan");
// largeCountries2.shift(); // removes the first item of the array
// largeCountries2.unshift("China"); //Adds an item to the first place in an array
// console.log(largeCountries2);

// let dayOfMonth = 13
// let weekday = "Friday"
//
// // If it is Friday the 13th, log out this spooky face: 😱
// // Use the logical "AND operator" -> &&
//
// if (dayOfMonth === 13 && weekday === "Friday") {
//   console.log("😱");
// }
//
// // Create a function that returns a random item from the array
//
// let hands = ["rock", "paper", "scissor"]
//
// function rockPaperSissor() {
//   let index = Math.floor(Math.random() * 3);
//   return hands[index];
// }
// console.log(rockPaperSissor());

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

console.log(fighters);
let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener ("click", function(){
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  let randomIndexOne = Math.floor(Math.random() * fighters.length);
  let randomIndexTwo = Math.floor(Math.random() * fighters.length);
  stageEl.textContent = fighters[randomIndexOne] + " VS " + fighters[randomIndexTwo];
})

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function sortFruit() {
    for (var i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎 ";
    } else {
      orangeShelf.textContent += "🍊 ";
    }
  }
}

sortFruit();
