import { cardGen as Card } from './card.js';

import AvatarGen, { abc as fun, a } from './avatar.js';

const Avatar = 3945;

fun();

console.log(a);

const card1 = Card('Card 1', 'This is card 1');
const card2 = Card('Card 2', 'This is card 2');
const card3 = Card('Card 3', 'This is card 3');

const DP = AvatarGen(
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
);
const DP2 = AvatarGen(
  'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
);

const container = document.querySelector('#container');

container.append(DP, DP2);
