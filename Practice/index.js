// Create two variables, firstName and lastName
// Concatenate the two variables into a third variable called fullName
// Log fullName to the console
let firstName = "Nirdesh";
let lastName = "Shrestha";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Create a function that logs out "Hi there, Linda!" when called
let name = "Linda";
let greeting = "Hi there";

function greetLinda() {
  console.log(greeting + ", " + name + "!");
}

greetLinda();

// Create two function, add3Points() and remove1Point(), and have them add/remove points to/form the myPoints variables.
// Call the function to that the log will be 10.
let myPoints = 3;

function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints);

// Try to predict what each of the lines will log out
console.log("2" + 2); //22
console.log(11 + 7); //18
console.log(6 + "5"); //65
console.log("My points: " + 5 + 9); //My points: 59
console.log(2 + 2); // 4
console.log("11" + 14); //1114

//When the user clicks the purchase button, render out "Something went wrong, please try again" in the paragraph that has the id="error".
let errorParagraph = document.getElementById("error");
function errorMessage() {
  errorParagraph.textContent = "Something went wrong, please try again";
}

// Create a basic calculator
// Create four functions: add(), substract(), divide(), multiply()
// call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
//
// E.g. if the user clicks on the "Plus" button, you should render "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id = "sum-el"

let num1 = 8;
let num2 = 2
let resultEl = document.getElementById("result-el");
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  let sum = num1 + num2;
  resultEl.textContent = "Result: " + sum;
}

function substract() {
  let difference = num1 - num2;
  resultEl.textContent = "Result: " + difference;
}

function divide() {
  let quotient = num1 / num2;
  resultEl.textContent = "Result: " + quotient;
}

function multiply() {
  let product = num1 * num2;
  resultEl.textContent = "Result: " + product;
}
