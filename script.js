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
const starredWords = new Set();

function speakWord(text) {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9;
  utterance.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find(
    (voice) => voice.lang && voice.lang.startsWith("en")
  );

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

function getCurrentVerb() {
  return shuffledData[currentIndex];
}

function resetFlipCardsInstant() {
  pastCard.classList.add("no-transition");
  ppCard.classList.add("no-transition");

  pastCard.classList.remove("flipped");
  ppCard.classList.remove("flipped");

  void pastCard.offsetWidth;
  void ppCard.offsetWidth;

  pastCard.classList.remove("no-transition");
  ppCard.classList.remove("no-transition");
}

function updateStarButton() {
  const currentVerb = getCurrentVerb();
  if (!currentVerb || !starBtn) return;

  const isStarred = starredWords.has(currentVerb.present);
  starBtn.textContent = isStarred ? "★" : "☆";
}

function loadCurrentCard() {
  if (currentIndex >= shuffledData.length) {
    showScreen(endScreen);
    if (restartStarredBtn) {
      restartStarredBtn.style.display =
        starredWords.size > 0 ? "inline-block" : "none";
    }
    return;
  }

  resetFlipCardsInstant();

  const currentVerb = getCurrentVerb();
  if (!currentVerb) return;

  presentWord.textContent = currentVerb.present;
  pastWord.textContent = currentVerb.past;
  ppWord.textContent = currentVerb.pastParticiple;

  presentMeaning.textContent = currentVerb.meaning.present;
  pastMeaning.textContent = currentVerb.meaning.past;
  ppMeaning.textContent = currentVerb.meaning.pastParticiple;

  progressText.textContent = `${currentIndex + 1} / ${shuffledData.length}`;

  updateStarButton();
}

function startQuiz(mode = "all") {
  if (mode === "starred") {
    const starredVerbList = verbData.filter((verb) =>
      starredWords.has(verb.present)
    );
    shuffledData = shuffleArray(starredVerbList);
  } else {
    shuffledData = shuffleArray(verbData);
  }

  currentIndex = 0;

  if (shuffledData.length === 0) {
    showScreen(endScreen);
    if (restartStarredBtn) {
      restartStarredBtn.style.display = "none";
    }
    return;
  }

  showScreen(quizScreen);
  loadCurrentCard();
}

function goToNextCard() {
  currentIndex += 1;
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

if (presentCard) {
  presentCard.addEventListener("click", () => {
    const currentVerb = getCurrentVerb();
    if (!currentVerb) return;
    speakWord(currentVerb.present);
  });
}

if (pastCard) {
  pastCard.addEventListener("click", () => {
    pastCard.classList.toggle("flipped");
    const currentVerb = getCurrentVerb();
    if (!currentVerb) return;
    speakWord(currentVerb.past);
  });
}

if (ppCard) {
  ppCard.addEventListener("click", () => {
    ppCard.classList.toggle("flipped");
    const currentVerb = getCurrentVerb();
    if (!currentVerb) return;
    speakWord(currentVerb.pastParticiple);
  });
}

if (starBtn) {
  starBtn.addEventListener("click", toggleStar);
}

if (startBtn) {
  startBtn.addEventListener("click", () => startQuiz("all"));
}

if (nextBtn) {
  nextBtn.addEventListener("click", goToNextCard);
}

if (restartBtn) {
  restartBtn.addEventListener("click", () => startQuiz("all"));
}

if (restartStarredBtn) {
  restartStarredBtn.addEventListener("click", () => startQuiz("starred"));
}
