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

const alphabet = Array.from({ length: 26 }, (_, index) => ({
  upper: String.fromCharCode(65 + index),
  lower: String.fromCharCode(97 + index)
}));

additionalLessons.forEach((lesson) => {
  lessons.push({
    id: lessons.length + 1,
    ...lesson,
    lowercase: lesson.letter.toLowerCase()
  });
});

let currentLessonIndex = 0;
let score = 0;

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
    item.textContent = word;
    item.addEventListener('click', () => speak(word, 'en-US'));
    wordList.appendChild(item);
  });

  prevBtn.disabled = currentLessonIndex === 0;
  prevBtn.style.opacity = currentLessonIndex === 0 ? '0.5' : '1';

  balloonGame.innerHTML = '';
  spawnBalloon();
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
  const lesson = lessons[currentLessonIndex];
  const balloon = document.createElement('button');
  const color = Math.floor(Math.random() * 6) + 1;
  const duration = 7 + Math.random() * 4;

  balloon.className = `balloon balloon-color-${color}`;
  balloon.type = 'button';
  balloon.textContent = lesson.letter;
  balloon.setAttribute('aria-label', `${lesson.letter}の風船をタップして1点`);
  balloon.style.left = `${8 + Math.random() * 84}%`;
  balloon.style.animationDuration = `${duration}s`;
  balloon.addEventListener('click', () => {
    score += 1;
    scoreCount.textContent = `🎈 ${score}点`;
    balloon.remove();
    speak(lesson.phonicsSound);
  });
  balloon.addEventListener('animationend', () => balloon.remove());

  balloonGame.appendChild(balloon);
}

playSoundBtn.addEventListener('click', () => {
  const lesson = lessons[currentLessonIndex];
  speak(lesson.phonicsSound);
});

window.setInterval(spawnBalloon, 1100);

nextBtn.addEventListener('click', () => {
  if (currentLessonIndex < lessons.length - 1) {
    currentLessonIndex += 1;
    renderLesson();
  } else {
    currentLessonIndex = 0;
    renderLesson();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentLessonIndex > 0) {
    currentLessonIndex -= 1;
    renderLesson();
  }
});

renderLesson();
