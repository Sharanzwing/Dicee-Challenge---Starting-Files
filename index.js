var p1Score = 0;
var p2Score = 0;

function rollDice() {
  var dice1 = document.querySelector(".img1");
  var dice2 = document.querySelector(".img2");
  var card1 = document.getElementById("card1");
  var card2 = document.getElementById("card2");
  var title = document.getElementById("title") || document.querySelector("h1");
  var rollBtn = document.getElementById("roll-btn");

  // Add roll animation
  dice1.classList.add("rolling");
  dice2.classList.add("rolling");
  if (rollBtn) rollBtn.disabled = true;

  setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    dice1.classList.remove("rolling");
    dice2.classList.remove("rolling");
    if (rollBtn) rollBtn.disabled = false;

    // Reset card highlights
    if (card1) card1.classList.remove("winner");
    if (card2) card2.classList.remove("winner");

    // Determine winner and update score
    if (randomNumber1 > randomNumber2) {
      title.textContent = "🚩 Player 1 Wins!";
      if (card1) card1.classList.add("winner");
      p1Score++;
    } else if (randomNumber2 > randomNumber1) {
      title.textContent = "Player 2 Wins! 🚩";
      if (card2) card2.classList.add("winner");
      p2Score++;
    } else {
      title.textContent = "It's a Draw!";
    }

    // Update score board
    var p1ScoreEl = document.getElementById("p1-score");
    var p2ScoreEl = document.getElementById("p2-score");
    if (p1ScoreEl) p1ScoreEl.textContent = p1Score;
    if (p2ScoreEl) p2ScoreEl.textContent = p2Score;
  }, 350);
}

// Initial roll on page load
rollDice();

// Interactive roll button
var rollBtn = document.getElementById("roll-btn");
if (rollBtn) {
  rollBtn.addEventListener("click", rollDice);
}