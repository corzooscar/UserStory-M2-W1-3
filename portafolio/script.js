alert("Welcome to Oscar Corzo's Portfolio")

// 1. Efecto de Máquina de Escribir

const textoHero = "I'm a Software Developer in training with a passion for clean code and good design. Right now I'm crafting my personal portfolio, a space where my projects, my style, and my story come together. When I'm not coding, you'll find me deep in a videogame, vibing to music, or just out here enjoying life. — Oczo.";
const contenedorTexto = document.querySelector('.hero-text');
let i = 0;

function escribirTexto() {
    if (i < textoHero.length) {
        contenedorTexto.innerHTML += textoHero.charAt(i);
        i++;
        setTimeout(escribirTexto, 50); // Velocidad en milisegundos
    }
}

// 2. Lógica para mostrar/ocultar la foto (Criterio de Aceptación Cumplido)
function inicializarBotonFoto() {
    const btnToggle = document.getElementById('btn-toggle-pic');
    const fotoOscar = document.querySelector('.hero-char');

    if (btnToggle && fotoOscar) {
        btnToggle.addEventListener('click', () => {
            // Añade o quita la clase que vuelve visible la imagen
            fotoOscar.classList.toggle('visible');
            
            // Cambia el texto del botón dependiendo del estado
            if (fotoOscar.classList.contains('visible')) {
                btnToggle.innerText = 'Ocultar Foto';
            } else {
                btnToggle.innerText = 'Mostrar Foto';
            }
        });
    }
}

// Iniciamos todo cuando cargue la página
window.onload = () => {
    if (contenedorTexto) {
        contenedorTexto.innerHTML = ""; // Limpiamos el texto
        escribirTexto();
    }
    inicializarBotonFoto();
};