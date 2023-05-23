


/* Character Card */

export function charactercard(card){
    const cardElement = document.createElement("div")
    cardElement.className= "character-card"

    const cardTemplate = `
            <img src="${card?.image}"/>
             <div class="character-content">
                <h1>${card?.name}</h1>
                <p>${card?.description}</p>
              </div>
    
    `;
    cardElement.innerHTML= cardTemplate;
    return cardElement

}




/* Fan Art */
export function agregarImagenes(array) {
  const collage = document.getElementsByClassName("collage")[0];
    for(let i = 0 ; i<5; i++){
      const cardElement = document.createElement("img")
      cardElement.className = "collage-img"
      cardElement.src = array[i].image
      collage.appendChild(cardElement);
  };
 
/* Imagen Clickeable */
  const element = document.createElement("div");
  element.className = "overlayimg";
  element.innerHTML = `
        <div class="overlayimg-content">
            <img class="overlay-image" src="" alt="Imagen">
        </div>
        `
  const fanArt = document.getElementsByClassName("fan-art")[0]
  fanArt.appendChild(element)
  const images = document.querySelectorAll('.collage-img');
  const overlay = document.querySelector('.overlayimg');
  const overlayImage = document.querySelector('.overlay-image');
  
  images.forEach(image => {
    image.addEventListener('click', function() {
      const src = image.getAttribute('src');
      overlayImage.setAttribute('src', src);
      overlay.classList.add('active');
    });
  });
  
  overlay.addEventListener('click', function(event) {
    if (!event.target.classList.contains('overlay-image')) {
      overlay.classList.remove('active');
    }
  });

 
}

















