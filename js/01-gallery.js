import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryImageList = createGalleryList(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryImageList);

gallery.addEventListener('click', galleryClick);

function createGalleryList(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
       <a class="gallery__link" href="${original}">
        <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
        />
       </a>
      </div>
`;
    })
    .join('');
}

function galleryClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();
  const onCloseModal = event => {
    const ESC_KEY = 'Escape';

    if (event.code === ESC_KEY) {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.sourse}" width="800" height="600">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onCloseModal);
      },

      onClose: instance => {
        window.removeEventListener('keydown', onCloseModal);
      },
    }
  );

  instance.show();
}
