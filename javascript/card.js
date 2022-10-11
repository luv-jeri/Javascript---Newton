export function cardGen(Name, details, imgURL) {
  const wrapper = document.createElement('div');
  const title = document.createElement('h1');
  const paragraph = document.createElement('p');
  const img = document.createElement('img');

  console.log(imgURL);
  wrapper.classList.add('card');
  title.classList.add('card-title');
  paragraph.classList.add('card-paragraph');
  img.classList.add('card-img');

  img.setAttribute('src', imgURL);

  title.textContent = Name;
  paragraph.textContent = details;

  wrapper.append(title, paragraph, img);

  return wrapper;
}
