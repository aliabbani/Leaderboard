import './style.css';

let results = [];

const table = document.querySelector('.table');

function generateResult(results) {
  const eleChildren = Array.from(document.querySelectorAll('.table div'));
  eleChildren.forEach((el) => {
    el.remove();
  });
  results.forEach((result) => {
    const content = `${result.user}: ${result.score}`;

    const list = document.createElement('div');
    list.className = 'list';
    list.innerText = content;

    table.appendChild(list);
  });
}

const sendScores = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uwJ01ZLnBAIiUKyNJXTe/scores/';
  const yourName = document.getElementById('yourName');
  const user = yourName.value;
  const yourScore = document.getElementById('yourScore');
  const score = yourScore.value;
  const response = await (await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  })).json();
  yourName.value = '';
  yourScore.value = '';
  return response;
};

const getScores = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uwJ01ZLnBAIiUKyNJXTe/scores/';
  const response = await (await fetch(url)).json();
  results = response.result;
  generateResult(results);
};

getScores();

const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');

submit.addEventListener('click', () => {
  sendScores();
});

refresh.addEventListener('click', () => {
  document.querySelector('.table').innerHtml = '';
  getScores();
});
