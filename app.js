// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Agregar nombres: 
// Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

// Validar entrada: 
// Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

// Visualizar la lista:
//  Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

// Sorteo aleatorio: 
// Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
const input = document.querySelector('#amigo').value;
let amigos = [];
const listFiendsClean = document.getElementById('listaAmigos')
const buttonR = document.getElementById('reset-button')


// Funcion que agrega los nombres a una lista y da un erro si el campo esta vacio
function agregarAmigo(){
  let input = document.querySelector('#amigo').value;
  if(input === ''){
    alert("Agrega un Nombre");
   return false;
   }else{
    amigos.push(input);
    cleanBox();
    friendList();
   }
}
// funcion que limpia el input donde se agregan los nombres
function cleanBox(){
  let box = document.getElementById('amigo');
  box.value = '';
}
// fucion que crea una lista de los nombres a sortea y la muestra a travez del html
function friendList(){
  listFiendsClean.innerHTML = ``;
  const list = document.getElementById('listaAmigos');
  for (let i = 0; i < amigos.length; i++) {
    list.innerHTML += `<li>${amigos[i]}</li>`;
  }
}
// fucion que realiza el sorteo y lanza el resultado del ganador 
function sortearAmigo(){
  ganador = amigos[Math.floor(Math.random() * amigos.length)];
  console.log(ganador)
  let winner = document.getElementById('winner');
  winner.textContent = `Felicidades el ganador es "!!! ${ganador} ¡¡¡"" `;
  activedButtom();
}
//funcion borra la lista de amigos para reiniciar el juego
function resetListFriend(){
  listFiendsClean.innerHTML = ``;
}
//funcion borra el campo donde a parece el ganador para reiniciar el juego
function resetwinner(){
  winner.textContent = ``;
}
// funcion que activa el boton de reinicio del juego
function activedButtom (){
  buttonR.disabled = false;
  console.log('ando actibando el boton')
}
// funcion que descativa el reinicio del juego
function disabledButtom (){
  buttonR.disabled = true;
}
// funcion de reinicio del juego
function resetgame(){
  amigos = [];
  cleanBox();
  resetwinner();
  resetListFriend();
  disabledButtom();

}
