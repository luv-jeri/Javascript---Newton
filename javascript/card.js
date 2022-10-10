export function cardGen(Name, details) {
  const wrapper = document.createElement('div');
  const title = document.createElement('h1');
  const paragraph = document.createElement('p');

  wrapper.classList.add('card');
  title.classList.add('card-title');
  paragraph.classList.add('card-paragraph');

  title.textContent = Name;
  paragraph.textContent = details;

  wrapper.append(title, paragraph);

  return wrapper;
}
