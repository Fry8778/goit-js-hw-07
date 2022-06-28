import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const createGallary = document.querySelector("div.gallery");

const arrayCards = galleryItems
    .map(({ preview, original, description }) =>
        `<div class="gallery-item">
        <a class="gallery__link" href=${original}>
        <img class="gallery__image" 
        src=${preview} 
        data-source=${original} 
        alt=${description} />
        </a>
        </div>`)
    .join("");
createGallary.insertAdjacentHTML("afterbegin", arrayCards);

createGallary.addEventListener("click", (e) => {
    e.preventDefault();

    const itemEl = e.target.dataset.source
    if (e.target.classList.contains("gallery"))
        return;

    const instance = basicLightbox
        .create(`<img src="${itemEl}" width="800" height="600">`);

    instance.show()
});

