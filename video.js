export function cardvideo(card){
    const cardElement = document.createElement("div")
    cardElement.className = "video-card"
    cardElement.id = card.id
    const cardTemplate = `
             <div class="video-card">
                <div class="video-main">
                  <a href="#" class="video-link">
                    <img src="./components/images/Vector.png" alt="Video Thumbnail" />
                  </a>
                </div>
                <div class="video-content">
                  <h1>EXPLORA HYRULE</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora incidunt fugiat,
                    explicabo earum porro labore rerum id inventore ipsum rem ratione recusandae optio nam
                    debitis voluptates nemo tenetur. Commodi!
                  </p>
                </div>
              </div>
              <div class="overlayvid">
                <div class="overlayvid-content">
                  <span class="close-btn">&times;</span>
                  <div class="video-iframe">
                    <iframe src="${card.url}" frameborder="0" allowfullscreen; allow="autoplay"></iframe>
                  </div>
                </div>
              </div>
    `
    cardElement.innerHTML = cardTemplate
    const videolink = cardElement.querySelector("a")

    videolink.addEventListener('click', function(event) {
        event.preventDefault();
        const videoUrl = card.url; // Reemplaza "URL_DEL_VIDEO" con la URL del video que deseas reproducir
        overlayIframe.setAttribute('src', videoUrl);
        overlay.classList.add('active');
      });

      const overlay = cardElement.querySelector('.overlayvid');
      const overlayIframe = cardElement.querySelector('.video-iframe iframe');

      overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            console.log('caca',)
          overlayIframe.setAttribute('src', '');
          overlay.classList.remove('active');
        }
      });

    return cardElement
  }



/*
const videoLink = document.querySelector('#');
const overlay = document.querySelector('.overlayvid');
const overlayIframe = document.querySelector('.video-iframe iframe');


videoLink.addEventListener('click', function(event) {
  event.preventDefault();
  const videoUrl = "https://www.youtube.com/embed/uHGShqcAHlQ"; // Reemplaza "URL_DEL_VIDEO" con la URL del video que deseas reproducir
  overlayIframe.setAttribute('src', videoUrl);
  overlay.classList.add('active');
});

overlay.addEventListener('click', function(event) {
  if (event.target === overlay) {
    overlayIframe.setAttribute('src', '');
    overlay.classList.remove('active');
  }
});
*/