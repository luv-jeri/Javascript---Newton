import { cardGen as Card } from './card.js';

const btn = document.getElementById('btn');
const container = document.getElementById('container');
const titleInput = document.getElementById('title-input');
const detailsInput = document.getElementById('details-input');

btn.addEventListener('click', function () {
  console.log(titleInput.value);
  console.log(detailsInput.value);
  const card = Card(titleInput.value, detailsInput.value);
  container.append(card);
});
