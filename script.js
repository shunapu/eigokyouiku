const lessons = [
  {
    id: 1,
    letter: 'S',
    lowercase: 's',
    phonicsSound: 'ス',
    words: ['sun', 'sock', 'star']
  },
  {
    id: 2,
    letter: 'A',
    lowercase: 'a',
    phonicsSound: 'ア',
    words: ['apple', 'ant', 'cat']
  },
  {
    id: 3,
    letter: 'T',
    lowercase: 't',
    phonicsSound: 'トゥ',
    words: ['tap', 'toy', 'tree']
  },
  {
    id: 4,
    letter: 'P',
    lowercase: 'p',
    phonicsSound: 'プ',
    words: ['pig', 'pen', 'pet']
  },
  {
    id: 5,
    letter: 'M',
    lowercase: 'm',
    phonicsSound: 'ム',
    words: ['moon', 'mouse', 'map']
  },
  {
    id: 6,
    letter: 'N',
    lowercase: 'n',
    phonicsSound: 'ン',
    words: ['nest', 'net', 'nut']
  }
];

const additionalLessons = [
  { letter: 'B', phonicsSound: 'ブ', words: ['ball', 'bat', 'bed'] },
  { letter: 'C', phonicsSound: 'ク', words: ['cat', 'cup', 'cake'] },
  { letter: 'D', phonicsSound: 'ドゥ', words: ['dog', 'duck', 'desk'] },
  { letter: 'E', phonicsSound: 'エ', words: ['egg', 'elephant', 'end'] },
  { letter: 'F', phonicsSound: 'フ', words: ['fish', 'fan', 'fox'] },
  { letter: 'G', phonicsSound: 'グ', words: ['goat', 'gift', 'gum'] },
  { letter: 'H', phonicsSound: 'ハ', words: ['hat', 'hen', 'hop'] },
  { letter: 'I', phonicsSound: 'イ', words: ['igloo', 'ink', 'insect'] },
  { letter: 'J', phonicsSound: 'ジ', words: ['jam', 'jet', 'jug'] },
  { letter: 'K', phonicsSound: 'ク', words: ['kite', 'key', 'kitten'] },
  { letter: 'L', phonicsSound: 'ル', words: ['lion', 'leg', 'lamp'] },
  { letter: 'O', phonicsSound: 'オ', words: ['octopus', 'ox', 'on'] },
  { letter: 'Q', phonicsSound: 'クゥ', words: ['queen', 'quilt', 'quiz'] },
  { letter: 'R', phonicsSound: 'ル', words: ['rabbit', 'red', 'run'] },
  { letter: 'U', phonicsSound: 'ア', words: ['umbrella', 'up', 'under'] },
  { letter: 'V', phonicsSound: 'ヴ', words: ['van', 'vet', 'vest'] },
  { letter: 'W', phonicsSound: 'ウ', words: ['watch', 'web', 'wig'] },
  { letter: 'X', phonicsSound: 'クス', words: ['box', 'fox', 'six'] },
  { letter: 'Y', phonicsSound: 'イ', words: ['yak', 'yes', 'yell'] },
  { letter: 'Z', phonicsSound: 'ズ', words: ['zebra', 'zip', 'zero'] }
];

const wordIllustrations = {
  sun: '☀️',
  sock: '🧦',
  star: '⭐',
  apple: '🍎',
  ant: '🐜',
  cat: '🐱',
  tap: '🚰',
  toy: '🧸',
  tree: '🌳',
  pig: '🐷',
  pen: '🖊️',
  pet: '🐶',
  moon: '🌙',
  mouse: '🐭',
  map: '🗺️',
  nest: '🪺',
  net: '🥅',
  nut: '🥜',
  ball: '⚽',
  bat: '🦇',
  bed: '🛏️',
  cup: '🥤',
  cake: '🎂',
  dog: '🐶',
  duck: '🦆',
  desk: '🪑',
  egg: '🥚',
  elephant: '🐘',
  end: '🏁',
  fish: '🐟',
  fan: '🪭',
  fox: '🦊',
  goat: '🐐',
  gift: '🎁',
  gum: '🍬',
  hat: '👒',
  hen: '🐔',
  hop: '🐇',
  igloo: '🛖',
  ink: '🖋️',
  insect: '🐛',
  jam: '🍯',
  jet: '✈️',
  jug: '🏺',
  kite: '🪁',
  key: '🔑',
  kitten: '🐱',
  lion: '🦁',
  leg: '🦵',
  lamp: '💡',
  octopus: '🐙',
  ox: '🐂',
  on: '🔛',
  queen: '👑',
  quilt: '🛌',
  quiz: '❓',
  rabbit: '🐰',
  red: '🔴',
  run: '🏃',
  umbrella: '☂️',
  up: '⬆️',
  under: '⬇️',
  van: '🚐',
  vet: '🩺',
  vest: '🦺',
  watch: '⌚',
  web: '🕸️',
  wig: '👩‍🦱',
  box: '📦',
  six: '6️⃣',
  yak: '🦬',
  yes: '✅',
  yell: '📣',
  zebra: '🦓',
  zip: '🤐',
  zero: '0️⃣'
};

const sightWords = [
  { word: 'I', illustration: '🙋' },
  { word: 'you', illustration: '👉' },
  { word: 'we', illustration: '🧑‍🤝‍🧑' },
  { word: 'he', illustration: '👦' },
  { word: 'she', illustration: '👧' },
  { word: 'my', illustration: '🧸' },
  { word: 'me', illustration: '🙋‍♀️' },
  { word: 'a', illustration: '1️⃣' },
  { word: 'the', illustration: '📖' },
  { word: 'and', illustration: '➕' },
  { word: 'is', illustration: '💬' },
  { word: 'are', illustration: '👥' },
  { word: 'it', illustration: '📦' },
  { word: 'can', illustration: '💪' },
  { word: 'see', illustration: '👀' },
  { word: 'like', illustration: '❤️' },
  { word: 'go', illustration: '🚶' },
  { word: 'to', illustration: '➡️' },
  { word: 'in', illustration: '📥' },
  { word: 'on', illustration: '⬆️' },
  { word: 'up', illustration: '🎈' },
  { word: 'down', illustration: '⬇️' },
  { word: 'look', illustration: '🔍' },
  { word: 'play', illustration: '🛝' },
  { word: 'come', illustration: '👋' },
  { word: 'here', illustration: '📍' },
  { word: 'big', illustration: '🐘' },
  { word: 'little', illustration: '🐭' },
  { word: 'red', illustration: '🔴' },
  { word: 'blue', illustration: '🔵' },
  { word: 'all', illustration: '🌎' },
  { word: 'am', illustration: '🙋' },
  { word: 'an', illustration: '🍎' },
  { word: 'as', illustration: '⚖️' },
  { word: 'at', illustration: '📍' },
  { word: 'be', illustration: '🌱' },
  { word: 'by', illustration: '➡️' },
  { word: 'but', illustration: '🔀' },
  { word: 'did', illustration: '✅' },
  { word: 'do', illustration: '🛠️' },
  { word: 'for', illustration: '🎁' },
  { word: 'from', illustration: '📤' },
  { word: 'get', illustration: '🤲' },
  { word: 'good', illustration: '👍' },
  { word: 'had', illustration: '🧺' },
  { word: 'has', illustration: '🤲' },
  { word: 'have', illustration: '👐' },
  { word: 'her', illustration: '👧' },
  { word: 'him', illustration: '👦' },
  { word: 'his', illustration: '🧢' },
  { word: 'how', illustration: '❓' },
  { word: 'if', illustration: '🤔' },
  { word: 'into', illustration: '📥' },
  { word: 'make', illustration: '🧱' },
  { word: 'many', illustration: '🔢' },
  { word: 'no', illustration: '🙅' },
  { word: 'not', illustration: '🚫' },
  { word: 'now', illustration: '⏰' },
  { word: 'of', illustration: '🧩' },
  { word: 'one', illustration: '1️⃣' },
  { word: 'or', illustration: '↔️' },
  { word: 'out', illustration: '📤' },
  { word: 'our', illustration: '👨‍👩‍👧‍👦' },
  { word: 'other', illustration: '👥' },
  { word: 'over', illustration: '⬆️' },
  { word: 'said', illustration: '💬' },
  { word: 'say', illustration: '🗣️' },
  { word: 'so', illustration: '💭' },
  { word: 'some', illustration: '🫴' },
  { word: 'that', illustration: '👉' },
  { word: 'them', illustration: '👥' },
  { word: 'then', illustration: '⏭️' },
  { word: 'there', illustration: '📍' },
  { word: 'they', illustration: '🧑‍🤝‍🧑' },
  { word: 'this', illustration: '👇' },
  { word: 'too', illustration: '➕' },
  { word: 'two', illustration: '2️⃣' },
  { word: 'was', illustration: '🕰️' },
  { word: 'way', illustration: '🛣️' },
  { word: 'what', illustration: '❔' },
  { word: 'when', illustration: '🗓️' },
  { word: 'where', illustration: '🗺️' },
  { word: 'which', illustration: '🤷' },
  { word: 'who', illustration: '🕵️' },
  { word: 'will', illustration: '🔮' },
  { word: 'with', illustration: '🤝' },
  { word: 'would', illustration: '💭' },
  { word: 'your', illustration: '👉' },
  { word: 'about', illustration: '💬' },
  { word: 'after', illustration: '⏭️' },
  { word: 'again', illustration: '🔁' },
  { word: 'because', illustration: '💡' },
  { word: 'been', illustration: '✅' },
  { word: 'before', illustration: '⏮️' },
  { word: 'best', illustration: '🏆' },
  { word: 'black', illustration: '⚫' },
  { word: 'boy', illustration: '👦' },
  { word: 'call', illustration: '📞' },
  { word: 'came', illustration: '🚪' },
  { word: 'day', illustration: '🌞' }
];

const alphabet = Array.from({ length: 26 }, (_, index) => ({
  upper: String.fromCharCode(65 + index),
  lower: String.fromCharCode(97 + index)
}));

const MAX_SCORE = 10;

additionalLessons.forEach((lesson) => {
  lessons.push({
    id: lessons.length + 1,
    ...lesson,
    lowercase: lesson.letter.toLowerCase()
  });
});

let currentLessonIndex = 0;
let score = 0;
let gameStarted = false;
let balloonInterval = null;
let gameMode = 'balloon';

const lessonLabel = document.getElementById('lessonLabel');
const progressFill = document.getElementById('progressFill');
const letterBig = document.getElementById('letterBig');
const wordList = document.getElementById('wordList');
const playSoundBtn = document.getElementById('playSoundBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const scoreCount = document.getElementById('scoreCount');
const alphabetGrid = document.getElementById('alphabetGrid');
const balloonGame = document.getElementById('balloonGame');
const startGameBtn = document.getElementById('startGameBtn');
const phonicsTab = document.getElementById('phonicsTab');
const sightWordsTab = document.getElementById('sightWordsTab');
const phonicsPanel = document.getElementById('phonicsPanel');
const sightWordsPanel = document.getElementById('sightWordsPanel');
const sightWordsList = document.getElementById('sightWordsList');

function renderAlphabetTable() {
  alphabetGrid.innerHTML = '';

  alphabet.forEach((char) => {
    const item = document.createElement('button');
    item.className = 'alphabet-item';
    item.type = 'button';
    item.setAttribute('aria-label', `レッスン ${char.upper}`);

    if (char.upper === lessons[currentLessonIndex].letter) {
      item.classList.add('active');
    }

    item.innerHTML = `
      <span class="upper">${char.upper}</span>
      <span class="lower">${char.lower}</span>
    `;
    item.addEventListener('click', () => {
      currentLessonIndex = lessons.findIndex((lesson) => lesson.letter === char.upper);
      stopGame();
      renderLesson();
    });

    alphabetGrid.appendChild(item);
  });
}

function renderLesson() {
  const lesson = lessons[currentLessonIndex];
  const total = lessons.length;

  lessonLabel.textContent = `レッスン ${currentLessonIndex + 1} / ${total}`;
  progressFill.style.width = `${((currentLessonIndex + 1) / total) * 100}%`;
  letterBig.textContent = lesson.letter;
  document.getElementById('letterSmall').textContent = lesson.lowercase;

  renderAlphabetTable();

  wordList.innerHTML = '';
  lesson.words.forEach((word) => {
    const item = document.createElement('button');
    item.className = 'word-item';
    item.type = 'button';
    item.setAttribute('aria-label', `${word}の発音を聞く`);
    const illustration = document.createElement('span');
    illustration.className = 'word-illustration';
    illustration.setAttribute('aria-hidden', 'true');
    illustration.textContent = wordIllustrations[word];

    const label = document.createElement('span');
    label.className = 'word-label';
    label.textContent = word;

    item.append(illustration, label);
    item.addEventListener('click', () => speak(word, 'en-US'));
    wordList.appendChild(item);
  });

  prevBtn.disabled = currentLessonIndex === 0;
  prevBtn.style.opacity = currentLessonIndex === 0 ? '0.5' : '1';

  balloonGame.innerHTML = '';
  if (gameStarted) {
    spawnBalloon();
  } else {
    balloonGame.appendChild(startGameBtn);
  }
}

function renderSightWords() {
  sightWords.forEach(({ word, illustration }) => {
    const item = document.createElement('button');
    item.className = 'sight-word-item';
    item.type = 'button';
    item.setAttribute('aria-label', `${word}. Hear pronunciation`);

    const picture = document.createElement('span');
    picture.className = 'sight-word-illustration';
    picture.setAttribute('aria-hidden', 'true');
    picture.textContent = illustration;

    const spelling = document.createElement('span');
    spelling.className = 'sight-word-spelling';
    spelling.textContent = word;

    item.append(picture, spelling);
    item.addEventListener('click', () => speak(word, 'en-US'));
    sightWordsList.appendChild(item);
  });
}

function selectTab(selectedTab) {
  const showSightWords = selectedTab === sightWordsTab;
  phonicsTab.classList.toggle('active', !showSightWords);
  phonicsTab.setAttribute('aria-selected', String(!showSightWords));
  phonicsTab.tabIndex = showSightWords ? -1 : 0;
  sightWordsTab.classList.toggle('active', showSightWords);
  sightWordsTab.setAttribute('aria-selected', String(showSightWords));
  sightWordsTab.tabIndex = showSightWords ? 0 : -1;
  phonicsPanel.hidden = showSightWords;
  sightWordsPanel.hidden = !showSightWords;
}

function speak(text, lang = 'ja-JP') {
  if (!('speechSynthesis' in window)) {
    alert('このブラウザでは音声再生が使えません。');
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.8;
  utterance.pitch = 1.2;
  window.speechSynthesis.speak(utterance);
}

function spawnBalloon() {
  if (!gameStarted) {
    return;
  }

  const lesson = lessons[currentLessonIndex];
  const balloon = document.createElement('button');
  const color = Math.floor(Math.random() * 6) + 1;
  const duration = 3.5 + Math.random() * 2;

  balloon.className = `${gameMode} balloon balloon-color-${color}`;
  balloon.type = 'button';
  balloon.textContent = lesson.letter;
  const targetName = gameMode === 'bubble' ? '泡' : '風船';
  balloon.setAttribute('aria-label', `${lesson.letter}の${targetName}をタップして1点`);
  balloon.style.left = `${8 + Math.random() * 84}%`;
  balloon.style.animationDuration = `${duration}s`;
  balloon.addEventListener('click', () => {
    if (!gameStarted || score >= MAX_SCORE) {
      return;
    }

    score += 1;
    scoreCount.textContent = `🎮 ${score} / ${MAX_SCORE}点`;
    balloon.remove();
    speak(lesson.phonicsSound);

    if (score === MAX_SCORE) {
      finishGame();
    }
  });
  balloon.addEventListener('animationend', () => balloon.remove());

  balloonGame.appendChild(balloon);
}

function stopGame() {
  gameStarted = false;
  balloonGame.classList.remove('mode-balloon', 'mode-bubble');
  if (balloonInterval !== null) {
    window.clearInterval(balloonInterval);
    balloonInterval = null;
  }
}

function finishGame() {
  stopGame();
  balloonGame.innerHTML = '';

  const celebration = document.createElement('div');
  celebration.className = 'game-celebration';
  celebration.setAttribute('role', 'status');
  celebration.setAttribute('aria-live', 'assertive');

  const crackers = document.createElement('div');
  crackers.className = 'game-crackers';
  crackers.setAttribute('aria-hidden', 'true');
  crackers.textContent = '🎊　　　🎉';

  const message = document.createElement('h3');
  message.className = 'celebration-message';
  message.textContent = 'おめでとう！';

  const result = document.createElement('p');
  result.className = 'celebration-result';
  result.textContent = `${MAX_SCORE}点満点！`;

  celebration.append(crackers, message, result);

  for (let index = 0; index < 36; index += 1) {
    const confetti = document.createElement('span');
    confetti.className = `confetti confetti-color-${(index % 6) + 1}`;
    confetti.setAttribute('aria-hidden', 'true');
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDelay = `${Math.random() * 1.2}s`;
    confetti.style.animationDuration = `${1.8 + Math.random() * 1.8}s`;
    celebration.appendChild(confetti);
  }

  const replayButton = document.createElement('button');
  replayButton.className = 'game-start-btn';
  replayButton.type = 'button';
  replayButton.textContent = 'もう一度あそぶ';
  replayButton.addEventListener('click', startGame);
  celebration.appendChild(replayButton);
  balloonGame.appendChild(celebration);
}

function startGame() {
  if (gameStarted) {
    return;
  }

  gameMode = Math.random() < 0.5 ? 'balloon' : 'bubble';
  score = 0;
  scoreCount.textContent = `🎮 ${score} / ${MAX_SCORE}点`;
  gameStarted = true;
  balloonGame.classList.add(`mode-${gameMode}`);
  balloonGame.innerHTML = '';
  spawnBalloon();
  balloonInterval = window.setInterval(spawnBalloon, 1100);
}

playSoundBtn.addEventListener('click', () => {
  const lesson = lessons[currentLessonIndex];
  speak(lesson.phonicsSound);
});

startGameBtn.addEventListener('click', () => {
  startGame();
});

phonicsTab.addEventListener('click', () => selectTab(phonicsTab));
sightWordsTab.addEventListener('click', () => selectTab(sightWordsTab));

[phonicsTab, sightWordsTab].forEach((tab) => {
  tab.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const nextTab = tab === phonicsTab ? sightWordsTab : phonicsTab;
      selectTab(nextTab);
      nextTab.focus();
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      const nextTab = event.key === 'Home' ? phonicsTab : sightWordsTab;
      selectTab(nextTab);
      nextTab.focus();
    }
  });
});

nextBtn.addEventListener('click', () => {
  if (currentLessonIndex < lessons.length - 1) {
    currentLessonIndex += 1;
    stopGame();
    renderLesson();
  } else {
    currentLessonIndex = 0;
    stopGame();
    renderLesson();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentLessonIndex > 0) {
    currentLessonIndex -= 1;
    stopGame();
    renderLesson();
  }
});

renderSightWords();
renderLesson();
