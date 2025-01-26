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
    return;
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}


function sortearAmigo(){

}
