const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const restartStarredBtn = document.getElementById("restart-starred-btn");

const presentWord = document.getElementById("present-word");
const pastWord = document.getElementById("past-word");
const ppWord = document.getElementById("pp-word");

const presentMeaning = document.getElementById("present-meaning");
const pastMeaning = document.getElementById("past-meaning");
const ppMeaning = document.getElementById("pp-meaning");

const progressText = document.getElementById("progress-text");

const presentCard = document.querySelector(".present-card");
const pastCard = document.getElementById("past-card");
const ppCard = document.getElementById("pp-card");
const starBtn = document.getElementById("star-btn");

let shuffledData = [];
let currentIndex = 0;
let currentMode = "all"; // "all" | "starred"
const starredWords = new Set();

function speakWord(text) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9;
  utterance.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find(voice => voice.lang && voice.lang.startsWith("en"));

  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  window.speechSynthesis.speak(utterance);
}

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

function getCurrentVerb() {
  return shuffledData[currentIndex];
}

function updateStarButton() {
  const currentVerb = getCurrentVerb();
  if (!currentVerb) return;

  const isStarred = starredWords.has(currentVerb.present);

  starBtn.textContent = "★";
  starBtn.classList.toggle("active", isStarred);
}

function loadCurrentCard() {
  if (currentIndex >= shuffledData.length) {
    showScreen(endScreen);
    restartStarredBtn.style.display = starredWords.size > 0 ? "inline-block" : "none";
    return;
  }

  const currentVerb = getCurrentVerb();

  presentWord.textContent = currentVerb.present;
  pastWord.textContent = currentVerb.past;
  ppWord.textContent = currentVerb.pastParticiple;

  presentMeaning.textContent = currentVerb.meaning.present;
  pastMeaning.textContent = currentVerb.meaning.past;
  ppMeaning.textContent = currentVerb.meaning.pastParticiple;

  progressText.textContent = `${currentIndex + 1} / ${shuffledData.length}`;

  resetFlipCards();
  updateStarButton();
}

function startQuiz(mode = "all") {
  currentMode = mode;

  if (mode === "starred") {
    const starredVerbList = verbData.filter(verb => starredWords.has(verb.present));
    shuffledData = shuffleArray(starredVerbList);
  } else {
    shuffledData = shuffleArray(verbData);
  }

  currentIndex = 0;

  if (shuffledData.length === 0) {
    showScreen(endScreen);
    restartStarredBtn.style.display = "none";
    return;
  }

  showScreen(quizScreen);
  loadCurrentCard();
}

function goToNextCard() {
  currentIndex++;
  loadCurrentCard();
}

function toggleStar(event) {
  event.stopPropagation();

  const currentVerb = getCurrentVerb();
  if (!currentVerb) return;

  if (starredWords.has(currentVerb.present)) {
    starredWords.delete(currentVerb.present);
  } else {
    starredWords.add(currentVerb.present);
  }

  updateStarButton();
}

presentCard.addEventListener("click", () => {
  const currentVerb = getCurrentVerb();
  if (!currentVerb) return;
  speakWord(currentVerb.present);
});

pastCard.addEventListener("click", () => {
  pastCard.classList.toggle("flipped");

  const currentVerb = getCurrentVerb();
  if (!currentVerb) return;
  speakWord(currentVerb.past);
});

ppCard.addEventListener("click", () => {
  ppCard.classList.toggle("flipped");

  const currentVerb = getCurrentVerb();
  if (!currentVerb) return;
  speakWord(currentVerb.pastParticiple);
});

starBtn.addEventListener("click", toggleStar);

startBtn.addEventListener("click", () => startQuiz("all"));
nextBtn.addEventListener("click", goToNextCard);
restartBtn.addEventListener("click", () => startQuiz("all"));
restartStarredBtn.addEventListener("click", () => startQuiz("starred"));
