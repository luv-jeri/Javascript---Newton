const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const button = document.querySelector('button');

const whatToDo = (event) => {
  //   h1.textContent = event.target.value;
  h1.textContent = input.value;
};

input.addEventListener('keyup', whatToDo);

// button.addEventListener('click', (event) => {
//     console.log(event)
// })

// const addEventListener = (name, cb) => {
//   const event = {
//     name: 'click',
//     some: '...',
//   };

//   cb(event);
// };

// addEventListener('click', (e) => {
//   console.log('clicked !!!' , e);
// });

// const setUpListener = (fun) => {
//   fun({
//     name: 'click',
//   });
// };

// const whatToDo = (e) => {
//   console.log('Do this....', e);
// };

// setUpListener(whatToDo);
