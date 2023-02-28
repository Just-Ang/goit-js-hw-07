import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const items = galleryItems
  .map(
    (item) => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
  )
  .join("");


galleryEl.innerHTML = items;



galleryEl.addEventListener('click', selectImg);

function selectImg(event) {
    if (event.target.className === "gallery__image") {
        console.log('Click!');
    }  
}