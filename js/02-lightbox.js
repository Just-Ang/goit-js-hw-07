import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const items = galleryItems
  .map(
    (item) => `<a class="gallery__item" href="${item.original}" onclick="event.preventDefault()">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>`
  )
  .join("");

galleryEl.innerHTML = items;

galleryEl.addEventListener('click', selectImg);

function selectImg(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }  
    var lightbox = new SimpleLightbox(".gallery a", {
        captionSelector: 'img',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        scrollZoom: false,
       });
    

}

