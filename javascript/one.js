import { cardGen as Card } from './card.js';

const btn = document.getElementById('btn');
const container = document.getElementById('container');
const titleInput = document.getElementById('title-input');
const detailsInput = document.getElementById('details-input');
const imgInput = document.getElementById('img-input');

btn.addEventListener('click', function () {
  const card = Card(titleInput.value, detailsInput.value, imgInput.value);
  container.append(card);
});
