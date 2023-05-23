/* Creador de botones */

export function createButton(text, url) {
    const button = document.createElement("button");
    const link = document.createElement("a");
    link.href = url;
    link.innerText = text;
    button.appendChild(link);
    return button;
  }
  

