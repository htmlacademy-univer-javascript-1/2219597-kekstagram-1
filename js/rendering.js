const template = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');

const fragment = document.createDocumentFragment();

const rendering = (photos) => {
  for (const photo of photos) {
    const picture = template.cloneNode(true);
    picture.querySelector('.picture__img').src = photo.url;
    picture.querySelector('.picture__likes').textContent = photo.likes;
    picture.querySelector('.picture__comments').textContent = photo.comments.length;
    documentFragment.append(picture);
  }
  picturesList.append(fragment);
};

export { rendering };
