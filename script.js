const lessons = [
  {
    id: 1,
    letter: 'S',
    sound: 's',
    words: ['sun', 'sock', 'star'],
    quizOptions: ['S', 'A', 'M'],
    answer: 'S'
  },
  {
    id: 2,
    letter: 'A',
    sound: 'a',
    words: ['apple', 'ant', 'cat'],
    quizOptions: ['A', 'T', 'P'],
    answer: 'A'
  },
  {
    id: 3,
    letter: 'T',
    sound: 't',
    words: ['tap', 'toy', 'tree'],
    quizOptions: ['T', 'S', 'N'],
    answer: 'T'
  },
  {
    id: 4,
    letter: 'P',
    sound: 'p',
    words: ['pig', 'pen', 'pet'],
    quizOptions: ['P', 'S', 'A'],
    answer: 'P'
  },
  {
    id: 5,
    letter: 'M',
    sound: 'm',
    words: ['moon', 'mouse', 'map'],
    quizOptions: ['M', 'T', 'P'],
    answer: 'M'
  },
  {
    id: 6,
    letter: 'N',
    sound: 'n',
    words: ['nest', 'net', 'nut'],
    quizOptions: ['N', 'A', 'S'],
    answer: 'N'
  }
];

let currentLessonIndex = 0;
let stars = 0;

const lessonLabel = document.getElementById('lessonLabel');
const progressFill = document.getElementById('progressFill');
const letterBig = document.getElementById('letterBig');
const wordList = document.getElementById('wordList');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizMessage = document.getElementById('quizMessage');
const playSoundBtn = document.getElementById('playSoundBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const starCount = document.getElementById('starCount');

function renderLesson() {
  const lesson = lessons[currentLessonIndex];
  const total = lessons.length;

  lessonLabel.textContent = `レッスン ${currentLessonIndex + 1} / ${total}`;
  progressFill.style.width = `${((currentLessonIndex + 1) / total) * 100}%`;
  letterBig.textContent = lesson.letter;

  wordList.innerHTML = '';
  lesson.words.forEach((word) => {
    const item = document.createElement('div');
    item.className = 'word-item';
    item.textContent = word;
    wordList.appendChild(item);
  });

  quizQuestion.textContent = `${lesson.letter}の音はどれ？`;
  quizOptions.innerHTML = '';
  quizMessage.textContent = '';

  lesson.quizOptions.forEach((option) => {
    const button = document.createElement('button');
    button.className = 'quiz-option';
    button.textContent = option;
    button.addEventListener('click', () => handleAnswer(option, button));
    quizOptions.appendChild(button);
  });

  prevBtn.disabled = currentLessonIndex === 0;
  prevBtn.style.opacity = currentLessonIndex === 0 ? '0.5' : '1';
}

function handleAnswer(selected, button) {
  const lesson = lessons[currentLessonIndex];
  const optionButtons = [...document.querySelectorAll('.quiz-option')];

  optionButtons.forEach((optionButton) => {
    optionButton.disabled = true;
    optionButton.classList.remove('selected');

    if (optionButton.textContent === lesson.answer) {
      optionButton.classList.add('correct');
    }

    if (
      optionButton === button &&
      optionButton.textContent !== lesson.answer
    ) {
      optionButton.classList.add('wrong');
    }
  });

  button.classList.add('selected');

  if (selected === lesson.answer) {
    stars += 1;
    starCount.textContent = `⭐ ${stars}`;
    quizMessage.textContent = 'すごい！正解！';
    quizMessage.style.color = '#2dbd6e';
  } else {
    quizMessage.textContent = `答えは ${lesson.answer} だよ！`;
    quizMessage.style.color = '#e74c3c';
  }
}

function speak(text) {
  if (!('speechSynthesis' in window)) {
    alert('このブラウザでは音声再生が使えません。');
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.8;
  utterance.pitch = 1.2;
  window.speechSynthesis.speak(utterance);
}

playSoundBtn.addEventListener('click', () => {
  const lesson = lessons[currentLessonIndex];
  speak(lesson.sound);
});

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
