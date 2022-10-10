export default function Avatar(img) {
  const wrapper = document.createElement('div');
  const image = document.createElement('img');
  wrapper.classList.add('avatar');
  image.classList.add('avatar-image');
  image.src = img;
  wrapper.append(image);
  return wrapper;
}

const a = 3;

export function abc() {
  console.log('Hey i am abc');
}

export { a };
