import { getBestScore, navigateTo } from '../js/app.js';

const Scores = (mode, data) => {
  const currentScore = data.correct - data.wrong || 0;

  const changeRoute = (e) => {
    switch (e.target.name) {
      case 'home':
        navigateTo('/');
        break;
      case 'game':
        navigateTo('/game', mode);
        break;
    }
  };
  return `
    <div class="scoreContainer">
      <span class="currentScore">${currentScore}</span>
      <p class="bestScore">بهترین امتیاز: ${getBestScore()}</p>
      <div class="scoreBtnsContainer">
        <button class="btnRepeatContainer" name="game" onclick="${(onclick = (
          e
        ) => changeRoute(e))}">
          <svg name="game" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>     
        </button>
        <button class="btnHomeContainer" name="home" onclick="${(onclick = (
          e
        ) => changeRoute(e))}">
          <svg name="home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </div>
  `;
};

export default Scores;
