'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No number⛔';
  } else if (guess === secretNumber) {
    (document.querySelector('.message').textContent = '🎊Correct number🎊'),
      (document.querySelector('body').style.backgroundColor = '#60b307'),
      (document.querySelector('.number').style.width = '30rem'),
      (document.querySelector('.number').textContent = secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (secretNumber + 10 < guess) {
    if (score > 0) {
      (document.querySelector('.message').textContent = '👠Too high number👠'),
        score--,
        (document.querySelector('.score').textContent = score);
    } else {
      document.querySelector('.message').textContent = '💸You lose the game💸';
    }
  } else if (secretNumber - 10 > guess) {
    if (score > 0) {
      (document.querySelector('.message').textContent = '🪫Too low number🪫'),
        score--,
        (document.querySelector('.score').textContent = score);
    } else {
      document.querySelector('.message').textContent = '💸You lose the game💸';
    }
  } else if (secretNumber + 10 > guess && secretNumber < guess) {
    if (score > 0) {
      (document.querySelector('.message').textContent =
        '🕹️A little bit less number🕹️'),
        score--,
        (document.querySelector('.score').textContent = score);
    } else {
      document.querySelector('.message').textContent = '💸You lose the game💸';
    }
  } else if (secretNumber - 10 < guess && secretNumber > guess) {
    if (score > 0) {
      (document.querySelector('.message').textContent =
        '🕹️A little bit more number🕹️'),
        score--,
        (document.querySelector('.score').textContent = score);
    } else {
      document.querySelector('.message').textContent = '💸You lose the game💸';
    }
  }
});
// document.getElementById('again-btn').addEventListener('click', function () {
//   window.location.reload();
// });

document.getElementById('again-btn').addEventListener('click', function () {
  (secretNumber = Math.trunc(Math.random() * 20) + 1),
    (document.querySelector('body').style.backgroundColor = '#222'),
    (document.querySelector('.number').textContent = '?'),
    (document.querySelector('.number').style.width = '15rem'),
    (document.querySelector('.guess').value = ''),
    (score = 20),
    (document.querySelector('.message').textContent = 'Start guessing...'),
    (document.querySelector('.score').textContent = score);
});
