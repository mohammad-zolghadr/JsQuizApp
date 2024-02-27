// imports
import Game from '../pages/Game.js';
import Landing from '../pages/Landing.js';
import NotFound from '../pages/NotFound.js';
import Scores from '../pages/Scores.js';

const routes = [
  { path: '/', view: Landing },
  { path: '/game', view: Game },
  { path: '/scores', view: Scores },
  { path: '/notfound', view: NotFound },
];

const router = (mode = 'easy', data = '') => {
  const pRoutes = routes.map((item) => {
    return {
      route: item,
      mode,
      data,
      isMatch: location.pathname === item.path,
    };
  });
  let match = pRoutes.find((route) => route.isMatch);
  if (!match) match = pRoutes[routes.length - 1];
  document.querySelector('.main').innerHTML = match.route.view(
    match.mode,
    match.data
  );
};

const navigateTo = (url, mode = 'easy', data = '') => {
  history.pushState({ mode, data }, null, url);
  router(mode, data);
};

const getBestScore = () => {
  const bestScore = JSON.parse(localStorage.getItem('BEST_SCORE'))?.score || 0;
  return bestScore;
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});

export { navigateTo, getBestScore };
