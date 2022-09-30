import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const createMarkup = createItemMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', createMarkup);

galleryList.addEventListener('click', galleryItemClick);


function createItemMarkup (items) {

    return items.map(({ preview, original, description }) => {
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

};

let instance = "";
function galleryItemClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const urlValue = evt.target.getAttribute('data-source');

    let instance = "";
    
     instance = basicLightbox.create(`
    <img src="${urlValue}" width="800" height="600">
`);
instance.show();

window.addEventListener('keydown', closeEscape);

function closeEscape (evt) {
    if (evt.code === "Escape") {
        instance.close();
        window.removeEventListener('keydown', closeEscape);
       
    }
};

};
