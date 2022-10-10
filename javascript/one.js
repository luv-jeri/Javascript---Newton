import { cardGen as Card } from './card.js';

import AvatarGen, { abc as fun, a } from './avatar.js';

const arr = [
  {
    name: 'Rohan',
    details: 'Hey i am rohan',
  },
  {
    name: 'John',
    details: 'Hey i am john',
  },
  {
    name: 'Jen',
    details: 'Hey i am jen',
  },
  {
    name: 'Sanjay',
    details: 'Hey i am sanjay',
  },
];

const container = document.querySelector('#container');

arr.forEach((item) => {
  const card = Card(item.name, item.details);
  container.append(card);
});


precati