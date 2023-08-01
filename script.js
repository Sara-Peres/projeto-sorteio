const button = document.querySelector(".botao")

function clique() {
    
    const min = Math.ceil(document.querySelector(".input-one").value)
    const max = Math.floor(document.querySelector(".input-two").value)
    const resultado = document.querySelector(".resultado")

    if(min >= max) {
        resultado.innerHTML = "Número inválido"
    }

    else {
        const retorno = Math.floor(Math.random() * (max - min +1)) + min;
        resultado.innerHTML = ("O número sorteado é ") + retorno
    }

}

button.addEventListener("click", clique)