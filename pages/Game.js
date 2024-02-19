const getRandomQuestion = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
const info = [
  {
    question: 'چرا ماهی ها خونسرد هستند؟',
    answers: [
      {
        answer: 'چون دلشون میخواد',
        correctness: false,
      },
      {
        answer: 'چون گرمایی هستن',
        correctness: false,
      },
      {
        answer: 'برای حرکت سریعتر در آب',
        correctness: true,
      },
      {
        answer: 'چون از تابستونا بدشون میاد',
        correctness: false,
      },
    ],
  },
  {
    question: 'چرا رنگ خورشید در هنگام غروب، به رنگ قرمز دیده می شود؟',
    answers: [
      {
        answer: 'چون رنگ قرمز رو دوست داره',
        correctness: false,
      },
      {
        answer: 'بخاطر زاویه خورشید با زمین و تجزیه نور در اتمسفر زمین',
        correctness: true,
      },
      {
        answer: 'برای اینکه زیرا',
        correctness: false,
      },
      {
        answer: 'چون خورشید قرمز رنگه',
        correctness: false,
      },
    ],
  },
];

const Game = (mode) => {
  const faMode = () => {
    switch (mode) {
      case 'easy':
        return 'ساده';
      case 'medium':
        return 'متوسط';
      case 'hard':
        return 'سخت';
    }
  };
  const selectedQuestion = getRandomQuestion(info);

  const handleAnswerClick = (e) => {
    const correctAnswer = selectedQuestion.answers.findIndex(
      (answer) => answer.correctness === true
    );
    const isCorrect = +e.target.name === correctAnswer;
    if (e.target.classList[0]?.includes('gameEachAnswerContainer')) {
      if (isCorrect) {
        e.target.classList.add('correctAnswer');
        // increase correct counts - go to next question
      } else {
        e.target.classList.add('wrongAnswer');
        // increase wrong counts - go to next question
      }
    }
  };

  return `
  <div class="gameContainer">
    <header class="gameHeaderContainer">
      <span>سطح ${faMode()}</span>
      <div class="timerWrapper">
      <span>00:59</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clip-rule="evenodd" />
        </svg>
      </div>
    </header>
  
    <div class="gameBodyContainer">
      <div class="gameResultContainer">
        <div class="gameResultCorrectContainer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
          </svg>
          <span>5</span>
        </div>
        <div class="gameResultWrongContainer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
          </svg>
          <span>4</span>
        </div>
      </div>

      <div class="gameQAContainer">
        <p>${selectedQuestion.question}</p>
        <div class="gameAnswerContainer">
        ${selectedQuestion.answers
          .map(
            (answer, index) => `
            <button
              class="gameEachAnswerContainer"
              name="${index}"
              onclick="${(onclick = (e) => {
                handleAnswerClick(e, index);
              })}"
            >
              <span></span>
              <p>${answer.answer}</p>
            </button>`
          )
          .join('')}
      </div>
      </div>
    </div>
  </div>`;
};

export default Game;
