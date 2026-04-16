const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const presentWord = document.getElementById("present-word");
const pastWord = document.getElementById("past-word");
const ppWord = document.getElementById("pp-word");

const presentMeaning = document.getElementById("present-meaning");
const pastMeaning = document.getElementById("past-meaning");
const ppMeaning = document.getElementById("pp-meaning");

const progressText = document.getElementById("progress-text");

const pastCard = document.getElementById("past-card");
const ppCard = document.getElementById("pp-card");

let shuffledData = [];
let currentIndex = 0;

/* ---------------------------
   배열 랜덤 섞기 (중복 방지 핵심)
---------------------------- */
function shuffleArray(array) {
  const copied = [...array];
  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

/* ---------------------------
   화면 전환
---------------------------- */
function showScreen(screen) {
  homeScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  endScreen.classList.remove("active");

  screen.classList.add("active");
}

/* ---------------------------
   카드 뒤집기 초기화
---------------------------- */
function resetFlipCards() {
  pastCard.classList.remove("flipped");
  ppCard.classList.remove("flipped");
}

/* ---------------------------
   현재 문제 로드
---------------------------- */
function loadCurrentCard() {
  if (currentIndex >= shuffledData.length) {
    showScreen(endScreen);
    return;
  }

  const currentVerb = shuffledData[currentIndex];

  // 영어
  presentWord.textContent = currentVerb.present;
  pastWord.textContent = currentVerb.past;
  ppWord.textContent = currentVerb.pastParticiple;

  // 한글 의미
  presentMeaning.textContent = currentVerb.meaning.present;
  pastMeaning.textContent = currentVerb.meaning.past;
  ppMeaning.textContent = currentVerb.meaning.pastParticiple;

  // 진행도
  progressText.textContent = `${currentIndex + 1} / ${shuffledData.length}`;

  // 카드 초기화
  resetFlipCards();
}

/* ---------------------------
   시작
---------------------------- */
function startQuiz() {
  shuffledData = shuffleArray(verbData);
  currentIndex = 0;
  showScreen(quizScreen);
  loadCurrentCard();
}

/* ---------------------------
   다음 문제
---------------------------- */
function goToNextCard() {
  currentIndex++;
  loadCurrentCard();
}

/* ---------------------------
   카드 클릭 이벤트
---------------------------- */
pastCard.addEventListener("click", () => {
  pastCard.classList.toggle("flipped");
});

ppCard.addEventListener("click", () => {
  ppCard.classList.toggle("flipped");
});

/* ---------------------------
   버튼 이벤트
---------------------------- */
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", goToNextCard);
restartBtn.addEventListener("click", startQuiz);
