const Landing = () => {
  const selectDifficulty = (e) => {
    console.log(e.target.name);
  };

  return `
  <div class="landingContainer">
  <h2>به بازی QuizApp خوش اومدی </h2>
  <h4>برای شروع، میزان سختی مدنظرت رو انتخاب کن تا بازی شروع شه</h4>
    <button name='easy' onclick='${(onclick = (e) =>
      selectDifficulty(e))}'>ساده</button>
    <button name='medium'  onclick='${(onclick = (e) =>
      selectDifficulty(e))}'>متوسط</button>
    <button name='hard'  onclick='${(onclick = (e) =>
      selectDifficulty(e))}'>سخت</button>
  </div>`;
};

export default Landing;
