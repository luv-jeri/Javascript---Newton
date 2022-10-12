const btn = document.querySelector('#btn');
const ball = document.querySelector('#ball');

btn.addEventListener('click', function () {
  ball.classList.toggle('animate');
});
