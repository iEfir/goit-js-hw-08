import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

const onImgClick = event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  function closeModal(event) {
    if (event.code === 'Escape') {
      lightbox.close();
    }
  }
};
galleryEl.addEventListener('click', onImgClick);

const createGalletyElements = galleryItems.map(element => {
  const link = document.createElement('a');
  link.classList.add('gallery__item');
  link.href = `${element.original}`;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = `${element.preview}`;
  image.alt = `${element.description}`;

  link.appendChild(image);
  return link;
});

galleryEl.append(...createGalletyElements);

const simpleLightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
