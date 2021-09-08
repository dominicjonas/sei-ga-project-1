//display slectors
const textArea = document.getElementById('text-container');
const instructions = document.querySelector('.instructions');
const title = document.querySelector('.title');
const gameEndMessage = document.querySelector('.game-end-message');
const playAgainBtn = document.querySelector('#play-again');
const startBtn = document.getElementById('start-button');
const scoreDisplay = document.querySelector('#score-display');
const scorestreakDisplay = document.querySelector('#scorestreak-display');
const wpmDisplay = document.querySelector('#wpm-display');
const scoreContainer = document.querySelector('.score-container');
const win84 = document.querySelector('.win84');

//keyboard selectors
const keyboardKeys = document.querySelectorAll('.row div');
const keyboardContainer = document.querySelector('.keyboard-container');
const spacebar = document.querySelector('.spacebar');

// overlay
function moveOverlayReveal() {
  TweenMax.to('.first', 1.5, {
    delay: 0.5,
    top: '-100%',
    ease: Expo.easeInOut,
  });

  TweenMax.to('.second', 1.5, {
    delay: 0.7,
    top: '-100%',
    ease: Expo.easeInOut,
  });

  TweenMax.to('.third', 1.5, {
    delay: 0.9,
    top: '-100%',
    ease: Expo.easeInOut,
  });
  instructions.classList.add('animate__fadeOut');
  title.classList.add('animate__bounceOutRight');
}

startBtn.addEventListener('click', moveOverlayReveal);

// hardcoded dummy text
const dummyTexts = [
  'It was a bright cold day in April and the clocks were striking thirteen, Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.',
];

let dummyTextsLevel = 0;

//hide keyboard / textarea
const initialiseIntroScreen = () => {
  win84.classList.add('win84-hidden');
  keyboardContainer.classList.add('hidden');
  textArea.classList.add('hidden');
  scoreContainer.classList.add('hidden');
  playAgainBtn.classList.add('hidden');
  instructions.classList.add('active-keyboard');
};

// activate keyboard / textarea // hide button
const initialiseScreen = () => {
  gameEndMessage.classList.add('hidden');
  scoreContainer.classList.remove('hidden');
  scoreContainer.classList.add('active-keyboard');
  textArea.classList.remove('hidden');
  textArea.classList.add('active-keyboard');
  keyboardContainer.classList.remove('hidden');
  keyboardContainer.classList.add('active-keyboard');
  startBtn.classList.add('hidden');
  startBtn.classList.add('hide-button');
};

// handle keyboardKeys
const handleKeyboardKeys = () => {
  document.addEventListener('keydown', (e) => {
    keyboardKeys.forEach((el) => {
      if (el.innerText === e.key) {
        el.classList.add('active');
      }
    });
  });
  document.addEventListener('keyup', (e) => {
    keyboardKeys.forEach((el) => {
      if (el.innerText === e.key) {
        el.classList.remove('active');
      }
    });
  });
};

// map through duummy text and create a span for each char.
function getCharactersFromText(text) {
  const spans = text.split('').map((char) => {
    const span = document.createElement('span');
    span.innerText = char;
    textArea.appendChild(span);
    return span;
  });
  return spans;
}

//ref start for timer
let startTimer = null;

function showWordsPerMinute(startTimer, text) {
  const endTime = new Date();
  const timeDifference = endTime - startTimer;
  const seconds = timeDifference / 1000;
  const numOfWords = text.split(' ').length;
  const wps = numOfWords / seconds;
  const wpm = wps * 60;
  wpmDisplay.innerText = wpm.toFixed(2);
  showGameEndMessage(wpm);
}

let score = 0;
let scoreStreak = 0;

function handleScoreCount(cursorIndex, text, key) {
  // if key is not correct reset streak to 0, otherwise increment 10
  if (key !== text[cursorIndex]) {
    scoreStreak = 0;
    scorestreakDisplay.style.color = 'crimson';
    score -= 1;
  }
  // when user types first word increment 10 to score
  else if (text[cursorIndex] === ' ') {
    score += 10 + scoreStreak;
    scoreStreak += 10;
    scorestreakDisplay.style.color = 'green';
  }
  scoreDisplay.innerText = score;
  scorestreakDisplay.innerText = scoreStreak;
}

function showGameEndMessage(wpm) {
  gameEndMessage.classList.remove('hidden');
  gameEndMessage.classList.add('active-keyboard');
  gameEndMessage.innerHTML = `Your score was ${score} at ${wpm.toFixed(
    2
  )} words per minute!`;
  if (score > 1984) {
    win84.classList.remove('win84-hidden');
    win84.classList.add('win84-active');
  }

  // const win1984 = document.createElement("img");
  // winGif.classList.add("win1984");
  // playAgainBtn.classList.remove("hidden");
  // playAgainBtn.classList.add("active-keyboard");
}

// check is game has been initialized
let isGameStarted = false;

const startGame = () => {
  initialiseScreen();
  // if game has been initialised do not allow it to start again (duplicate bug)
  if (isGameStarted) return;
  isGameStarted = true;

  //reference text and characters
  const text = dummyTexts[dummyTextsLevel];
  const characters = getCharactersFromText(text);

  //ref the start of the sentence
  let cursorIndex = 0;
  let currentChar = characters[cursorIndex];
  currentChar.classList.add('cursor');

  const handleKeyDown = (e) => {
    handleScoreCount(cursorIndex, text, e.key);
    console.log(e.key);
    if (!startTimer) {
      startTimer = new Date();
    }
    if (e.key === currentChar.innerText) {
      currentChar.classList.remove('cursor'); // remove visible cursor class from correctly typed char
      currentChar.classList.add('typed'); // add greyed out text to char to show correctly typed
      currentChar = characters[++cursorIndex]; // increment the movement of the cursor to next char
    }
    if (cursorIndex >= characters.length) {
      // round finished // show words per minute
      document.removeEventListener('keydown', handleKeyDown);
      showWordsPerMinute(startTimer, text);

      console.log('game finished!');
      return;
    }
    currentChar.classList.add('cursor'); // add cursor class to this char
  };
  document.addEventListener('keydown', handleKeyDown);

  handleKeyboardKeys();
  initialiseScreen();
};

initialiseIntroScreen();
startBtn.addEventListener('click', startGame);

playAgainBtn.addEventListener('click', () => {
  console.log('clicked');
  isGameStarted = false;
  initialiseIntroScreen();
});

//* styling
// TODO keyboardKeys --> display keyboardKeys and have keys add active class on keydown and remove active class on keyup ✅
// TODO intro -> keyboardKeys --> have keyboardKeys display 'glowing' class before game starts.
// TODO intro -> button --> seperate from main container ✅
// TODO intro -> button --> add glow box shadow
// TODO intro -> instructions --> add card explaining game. ✅
// TODO intro -> add gsap panel reveal of game, similar to toni&guy site clone. ✅

//* functionality
// TODO keyboardKeys --> organize keyboardKeys function within game . ✅

//* settings
// TODO add settings hamburger menu

//* game elements
// TODO create levels
// TODO add parahtaph as dummy text ✅
// TODO add score --> points for each words spelled correctly consecutively (no mistkakes) ✅
// TODO --> 1st word -> 1 point , 2nd word -> 2 points, 3rd word -> 3 points etc ✅
// TODO --> scorestreak -> display currrent consecutive words spelled correctly without mistakes ✅
// TODO sound --> html sound click on correct key press
// TODO --> play again button starts game again

// * bugs
//? bug on scores --> atfer score streak active, pressing any key will increase the score by that scorestreak amount ✅
//? bug on result screen --> wpm returning undefined ✅

// TODO if points are 1984 add something
