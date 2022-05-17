// DOM Element selector
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

let dice1;
let dice2;

// Randomize function
function roll() {
  const dice = Math.floor(Math.random() * 6) + 1;

  return dice;
}

function play() {
  dice1 = roll();
  dice2 = roll();

  // Display rolled dice
  img1.setAttribute("src", `images/dice${dice1}.png`);
  img2.setAttribute("src", `images/dice${dice2}.png`);

  // Check result
  if (dice1 > dice2)
    h1.textContent = "Player 1 Wins!";
  else if (dice1 < dice2)
    h1.textContent = "Player 2 Wins!";
  else
    h1.textContent = "Draw!";
}

play();