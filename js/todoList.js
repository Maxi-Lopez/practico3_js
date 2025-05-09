const boton = document.getElementById("agregarParticipante")
const input = document.getElementById("participanteInput")
const errorMensaje = document.getElementById("mensajeError")
const lista = document.getElementById("listaParticipantes")

boton.addEventListener("click", ()=>{
    const text = input.value.trim()
    if (text === "") return errorMensaje.innerText="Complete este campo"
    else errorMensaje.innerText=""
    
    const li = document.createElement('li')
    li.innerText = text

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    checkBox.addEventListener('click', () => {
        li.classList.toggle('presente');
    });


    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "❌";
    btnEliminar.style.marginLeft = '10px';

    btnEliminar.addEventListener('click', (e) => {
        e.stopPropagation();
        lista.removeChild(li);
    });

    li.appendChild(checkBox)
    li.appendChild(btnEliminar)

    lista.appendChild(li)
    input.value=""


})