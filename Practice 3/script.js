// SETTING THE STAGE
const player = "Per";
const opponent = "Nick";
const game = "AmazingFighter";

let points = 0;
let hasWon = false;

// PLAYING THE GAME
points += 100;
hasWon = true;

// ANNOUNCING THE WINNER
if (hasWon) {
  console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
  console.log(`The winner is ${opponent}! ${player} lost the game.`)
};

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

logItems(myCourses);

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
let myName = "Nirdesh";

localStorage.setItem('myName', myName);
console.log(localStorage.getItem('myName'));
// -------------
let data = [
  {
    player: "Mark",
    score: 52
  },
  {
    player: "Jane",
    score: 41
  }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
let janeScoreBtn = document.getElementById('janeScore-btn')

janeScoreBtn.addEventListener("click", function(){
  for (var i = 0; i < data.length; i++) {
    if(data[i].player === 'Jane')
    console.log(data[i].score);
  }
})

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
  let array1 = "";
  let lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (i === lastIndex){
      array1 += arr[i] + ".";
    }
    else {
      array1 += arr[i] + ", ";
    }
  }
  return `The ${arr.length} ${desc} are ${array1}`;
}


const sentence = generateSentence("best fruits", ["a", "b"]);
console.log(sentence);
