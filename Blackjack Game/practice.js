// let firstCard = 7;
// let secondCard = 10;
//
// let sum = firstCard + secondCard;
//
// if(sum < 21) {
//   console.log("Do you want to draw a new card?");
// } else if (sum === 21) {
//   console.log("Wohoo! You've got Blackjack!");
// } else {
//   console.log("You're out of the game!");
// }

// Check if the person is old enough ot enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 21;
// if (age < 21) {
//   console.log("You can't enter!!! You are too young.");
// } else {
//   console.log("You can enter the club. Have fun!");
// }

// // Check if the person is elegible for a birthday card from the King! (100)
// let age = 110;
// // if less than 100   -> "Not elegible"
// // if exactly 100     -> "Here is your birthday card!"
// // if anyother case   -> "Not elegible, you have already gotten one!"
//
// if (age < 100) {
//   console.log("Not elegible");
// } else if (age === 100) {
//   // difference between == and ===
//   // === is more stirct. "==" reads 100 == "100" trues whereas "===" reads it false.
//   console.log("Here is your birthday card!");
// } else {
//   console.log("Not elegible, you have already gotten one!");
// }

// let firstCard = 10;
// let secondCard = 10;
// let sum = firstCard + secondCard;
// let hasBlackJack = false;
// let isAlive = true;
// let message = "";
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// //Query Selector
// // let sumEl = document.querySelector("#sum-el");
// let cardsEl = document.querySelector("#cards-el")
// function startGame() {
//   cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
//   sumEl.textContent = "Sum: " + sum;
//   if (sum <= 20) {
//     message = "Do you want to draw a new card?";
//   } else if (sum === 21) {
//     message = "You've got Blackjack!";
//     hasBlackJack = true;
//   } else {
//     message = "You're out of the game!";
//     isAlive = false;
//   }
//   messageEl.textContent = message;
//
// }


// Arrays - ordered lists of items - compsite / complex data type
// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my protfolio"
// ];

// console.log(featuredPosts.length); //to see the length of an array

// // Create an array that describes yourself. Use the three primitive data types you've learned. It should contain your name (string), your age (number), and whether you like pizza (boolean).
// let aboutMyself = [
//   "Nirdesh Shrestha",
//   23,
//   true
// ];
//
// console.log(aboutMyself);

// let cards = [7, 4]
//
// cards.push(6)
//
// console.log(cards);

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my protfolio"
// ];
//
// let newPost = "Finally found a job!";
//
// featuredPosts.push(newPost);
// console.log(featuredPosts);
//
// featuredPosts.pop();
// console.log(featuredPosts);

// for(let count = 10; count < 21; count++){
//   console.log(count);
// }

// for(let count = 10; count < 101; count+=10){
//   console.log(count);
// }

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my protfolio",
//     "Finally found a job!",
//     "Great to hear"
// ];
//
// for(let i = 0; i < featuredPosts.length; i++){
//   console.log(featuredPosts[i]);
// }

// let cards = [7,3,9,8];
// for (var i = 0; i < cards.length; i++) {
//   console.log(cards[i]);
// }

// let sentence = ["Hello", "my", "name", "is", "King"];
// let greetingEl = document.querySelector("#greeting-el");
//
// for (var i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i] + " ";
// }


// let player1Time = 102;
// let player2Time = 107;
//
// function getFastestRaceTime() {
//   if (player1Time < player2Time) {
//     return player1Time;
//   } else if (player2Time < player1Time) {
//     return player2Time;
//   } else {
//     return player1Time;
//   }
// }
//
// // let fastestRace = getFastestRaceTime();
// // console.log(fastestRace);
//
// function totalRaceTime() {
//   return player1Time + player2Time;
// }
//
// let totalTime = totalRaceTime();
// console.log(totalTime);

//Math.random() generates a random number between 0 and 1 ( not inclusive of 1)

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log( rollDice() );
