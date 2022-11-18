const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
let color = ""
const mensaje = document.querySelector("#mensaje");

document.addEventListener('keydown', function (event) {
    mensaje.textContent = "";
    if (event.key === 'a' || event.key === "A") {
        color = "black";
        mensaje.textContent = `El color seleccionado es negro`

    } else if (event.key === 's' || event.key === "S") {
        color = "aqua";
        mensaje.textContent = `El color seleccionado es aqua`

    } else if (event.key === 'd' || event.key === "D") {
        color = "purple";
        mensaje.textContent = `El color seleccionado es morado`
    } else {
        if (!event.shiftKey && event.key != "CapsLock")
            mensaje.textContent = "La tecla presionada no es válida"
    }
})

function pintar(elemento, color) {
    if (color) {
        elemento.style.backgroundColor = color
    } else {
        mensaje.textContent = "No seleccionaste color"
    }
}

div1.addEventListener("click", () => {
    pintar(div1, color)
});

div2.addEventListener("click", () => {
    pintar(div2, color)
});

div3.addEventListener("click", () => {
    pintar(div3, color)
});

div4.addEventListener("click", () => {
    pintar(div4, color)
});

