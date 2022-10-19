import avatar_gen from './avatar_gen.js';
import cardGen from './card.js';
import { users } from './data.js';

import animateMouse from './animate_mouse.js';
document.body.addEventListener('mousemove', animateMouse);

const container = document.querySelector('.container');

for (let i = 0; i < users.length; i++) {
  const avatar = cardGen(users[i].name, 'A developer', users[i].avatar);
  container.append(avatar);
}
