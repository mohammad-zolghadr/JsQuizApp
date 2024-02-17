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
  
  </div>`;
};

export default Game;
