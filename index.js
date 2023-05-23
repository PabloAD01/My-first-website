import { charactercard, agregarImagenes } from "./components/card.js"
import { createButton } from "./components/button.js"
import { cardvideo } from "./video.js"

const monsters = []
const art = []
const buttons = [
  { text: "Inicio", url: "#" },
  { text: "Personajes", url: "#" },
  { text: "Objetos", url: "#" },
  { text: "Sobre Nosotros", url: "#" },
  { text: "Contacto", url: "#" }
];
const videos = [
  {id: 0, url:"https://www.youtube.com/embed/-MEo1tGalr0?autoplay=1"},
  {id: 1, url:"https://www.youtube.com/embed/uHGShqcAHlQ?autoplay=1"},
]


async function zelda() {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v2/all',{
        method:'GET',
    });
        const data = await response.json();
    
        for(let i = 0; i < data.data.monsters.length; i++) {
            
            const monscard = {
                name: data.data.monsters[i].name,
                image: data.data.monsters[i].image,
                description: data.data.monsters[i].description,
            }
            
            monsters.push(monscard)
        }

        for(let i = 0; i<data.data.creatures.non_food.length; i++){
          const arcard = {
            id: i,
            image: data.data.creatures.non_food[i].image,
          }
            art.push(arcard)
        }
        console.log('arte',art)

        

mostrarPagina(paginaActual);
agregarImagenes(art)

}

function description(){
  const description = document.getElementsByClassName("description")[0]
  for(let i = 0; i < 2; i++){
  const cardElement = document.createElement("div");
  cardElement.className = "desc-card";
  const cardTemplate = `

            <div class="card-title">LEND</div>
            <div class="card-content">
              <h2>Subtitle</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                dolorum, repudiandae ipsam alias ratione nisi impedit vitae ab
                debitis esse repellat eos nihil temporibus maiores facere
                voluptatibus dolore! Magnam, atque.
              </p>
            </div>
  `;
  cardElement.innerHTML = cardTemplate;
  description.appendChild(cardElement)
  }

}


// Obtener referencias a los elementos
var characterList = document.querySelector(".character-list");
var paginator = document.querySelector(".paginator");

// Definir el array de elementos



var elementosPorPagina = 4;
var paginaActual = 1; 
var totalPaginas = 5;

// Función para mostrar los elementos de la página actual
function mostrarPagina(pagina) {
  var indiceInicio = (pagina - 1) * elementosPorPagina;
  var indiceFinal = indiceInicio + elementosPorPagina;
  characterList.innerHTML = "";
 
    for(let i = indiceInicio; i<indiceFinal;i++){
        const cardElement = charactercard(monsters[i])
        const character = document.getElementsByClassName("character-list")[0]
        character.appendChild(cardElement)
    }

}

// Función para actualizar los enlaces de paginación
function actualizarEnlaces() {
    paginator.innerHTML = "";
  
    // Crear enlace "Anterior"
    var enlaceAnterior = document.createElement("a");
    enlaceAnterior.href = "#";
    enlaceAnterior.id = "previous"
    enlaceAnterior.textContent = "<";
    enlaceAnterior.addEventListener("click", function (event) {
      event.preventDefault();
      if (paginaActual > 1) {
        paginaActual--;
        mostrarPagina(paginaActual);
        actualizarEnlaces();
      }
    });
    paginator.appendChild(enlaceAnterior);
  
    // Crear enlaces de páginas
    for (var i = 1; i <= totalPaginas; i++) {
      var enlace = document.createElement("a");
      enlace.href = "#";
      enlace.textContent = i;
      enlace.addEventListener("click", function (event) {
        event.preventDefault();
        paginaActual = parseInt(this.textContent);
        mostrarPagina(paginaActual);
        actualizarEnlaces();
      });
      if (i === paginaActual) {
        enlace.classList.add("active");
      }
      paginator.appendChild(enlace);
    }
  
    // Crear enlace "Siguiente"
    var enlaceSiguiente = document.createElement("a");
    enlaceSiguiente.href="#"
    enlaceSiguiente.id="next"
    enlaceSiguiente.textContent = ">";
    enlaceSiguiente.addEventListener("click", function (event) {
      event.preventDefault();
      if (paginaActual < totalPaginas) {
        paginaActual++;
        mostrarPagina(paginaActual);
        actualizarEnlaces();
      }
    });
    paginator.appendChild(enlaceSiguiente);
  }

  /* Insertar botones en Header y Footer */
  function Insertbutton (buttons) {
    const container = document.getElementsByClassName("bar")[0];
    const footerButtons = document.getElementsByClassName("footer-option");
  
    buttons.forEach(function(buttonInfo) {
        const button = createButton(buttonInfo.text, buttonInfo.url);
        container.appendChild(button);
        
        for (let i = 0; i < footerButtons.length; i++) {
          footerButtons[i].appendChild(button.cloneNode(true));
        }
    });
  
  }

  function agregarvideos(array) {
    const mainvid = document.getElementsByClassName("video")[0];
      for(let i = 0 ; i<array.length; i++){
        const content = cardvideo(array[i])
        mainvid.appendChild(content)
    }; 

}



agregarvideos(videos)
description();
actualizarEnlaces();
Insertbutton(buttons);
zelda();


 