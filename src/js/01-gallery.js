// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryItemsEl = document.querySelector('.gallery');

const selectorGalleryImg = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
const createGalleryImgMarkup = galleryItems.map(selectorGalleryImg).join('');
galleryItemsEl.insertAdjacentHTML('beforeend', createGalleryImgMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
