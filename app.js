// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let newAmigo = document.getElementById('amigo').value;
    console.log(newAmigo);
    if(newAmigo === ""){
        //alert("Por favor, inserte un nombre.");
        agregarTexto('h2', '"Por favor, inserte un nombre."');
    }else{
        listaAmigos.push(newAmigo);
    }
         console.log(listaAmigos);
         limpiarCaja();
    
         muestraAmigos();
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function muestraAmigos() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo(){
    if (listaAmigos.length === 0) {
        document.getElementById("resultado").ariaColIndexText = `No hay amigos para sortear`;
        return;
    }

    let amigoAleatorio = Math.floor(Math.random() * listaAmigos.length);

    let sorteaAmigo = listaAmigos[amigoAleatorio];

    document.getElementById("resultado").innerHTML = `Amigo sorteado es: ${sorteaAmigo}`;
    
}
