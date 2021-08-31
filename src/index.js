import './style.css';

const results = [
  {
    name: 'Ali',
    score: '100',
  },
  {
    name: 'Henry',
    score: '100',
  },
  {
    name: 'Elyor',
    score: '100',
  },
  {
    name: 'Zeenat',
    score: '100',
  },
  {
    name: 'Faizii',
    score: '100',
  },
  {
    name: 'Elmar',
    score: '100',
  },
];

const table = document.querySelector('.table');

function generateResult() {
  results.forEach((result) => {
    table.innerHtml = '';
    const content = `${result.name}: ${result.score}`;

    const list = document.createElement('div');
    list.className = 'list';
    list.innerText = content;

    table.appendChild(list);
  });
}

generateResult();
