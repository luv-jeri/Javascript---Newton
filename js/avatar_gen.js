const avatar_gen = (name, img) => {
  const wrapper = document.createElement('div');
  const avatar = document.createElement('img');
  const title = document.createElement('h3');

  title.textContent = name;
  avatar.src = img;
  avatar.classList.add('avatar');
  title.classList.add('avatar-title');
  wrapper.classList.add('avatar-wrapper');

  wrapper.append(avatar, title);

  return wrapper;
};

export default avatar_gen;
