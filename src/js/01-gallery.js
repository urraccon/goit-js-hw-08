import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const listItems = document.querySelector('.gallery');

function createGallery(items) {
  items.forEach(({ original, preview, description }) => {
    function createImage() {
      return `<li class="gallery__item">
        <a href="${original}" class="gallery__link">
          <img src="${preview}" alt="${description}" class="gallery__image" />
        </a>
      </li>`;
    }
    console.log(createImage());
    listItems.insertAdjacentHTML('beforeend', createImage());
  });
}

createGallery(galleryItems);

new SimpleLightbox('.gallery__link', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: '250',
});
