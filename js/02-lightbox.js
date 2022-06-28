import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const createGallary = document.querySelector("ul.gallery");

const arrayCards = galleryItems
    .map(({ preview, original, description }) =>
        `<li class="gallery__link">
       <a class="gallery__item" href=${original}>
        <img class="gallery__image" 
        src=${preview} 
        data-source=${original} 
        alt=${description} />
        </a>
        </li>`)
    .join("");
createGallary.insertAdjacentHTML("afterbegin", arrayCards);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,

});