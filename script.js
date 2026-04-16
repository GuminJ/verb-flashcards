const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const presentWord = document.getElementById("present-word");
const pastWord = document.getElementById("past-word");
const ppWord = document.getElementById("pp-word");
const progressText = document.getElementById("progress-text");

const pastCard = document.getElementById("past-card");
const ppCard = document.getElementById("pp-card");

let shuffledData = [];
let currentIndex = 0;

function shuffleArray(array) {
  const copied = [...array];
  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function showScreen(screen) {
  homeScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  endScreen.classList.remove("active");

  screen.classList.add("active");
}

function resetFlipCards() {
  pastCard.classList.remove("flipped");
  ppCard.classList.remove("flipped");
}

function loadCurrentCard() {
  if (currentIndex >= shuffledData.length) {
    showScreen(endScreen);
    return;
  }

  const currentVerb = shuffledData[currentIndex];

  presentWord.textContent = currentVerb.present;
  pastWord.textContent = currentVerb.past;
  ppWord.textContent = currentVerb.pastParticiple;
  progressText.textContent = `${currentIndex + 1} / ${shuffledData.length}`;

  resetFlipCards();
}

function startQuiz() {
  shuffledData = shuffleArray(verbData);
  currentIndex = 0;
  showScreen(quizScreen);
  loadCurrentCard();
}

function goToNextCard() {
  currentIndex += 1;
  loadCurrentCard();
}

pastCard.addEventListener("click", () => {
  pastCard.classList.toggle("flipped");
});

ppCard.addEventListener("click", () => {
  ppCard.classList.toggle("flipped");
});

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", goToNextCard);
restartBtn.addEventListener("click", startQuiz);
