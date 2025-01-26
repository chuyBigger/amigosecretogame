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
const amigos = [];
const listFiendsClean = document.getElementById('listaAmigos')


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

function cleanBox(){
  let box = document.getElementById('amigo');
  box.value = '';
}

// function cleanList(){
//   document.getElementById('lismigos').innerHTML = '';
// }



function friendList(){
  listFiendsClean.innerHTML = ``;
  const list = document.getElementById('listaAmigos');
  for (let i = 0; i < amigos.length; i++) {
    list.innerHTML += `<li>${amigos[i]}</li>`;
  }
  console.log(list)
}

//   let namesAmigos
//   if ( namesAmigos == '' ){
//       alert('Ingresa tienes que ingresar el nombre de un amigo')
//     } else {
//         amigos.push(document.getElementById('amigo').value);
        
//         amigos.innerHTML += `{'listaAmigos.value'}`;


//         console.log(amigos)
//     }
// }


// let listaDeAmigos = document.querySelector('#listaAmigos');
// listaDeAmigos.innerHTML == 'listaAmigos'


// function agregarNombre(){
//     amigos = document.getElementById('amigo').value;

// }


// function recorrerListaAmigos() {
//     let ul = document.getElementById('listaAmigos');
  
//     ul.innerHTML = '';
  
//     amigos.forEach(amigo => {
//       let li = document.createElement('li');
      
//       li.textContent = amigo;
      
//       li.classList.add('amigo-item');
  
//       ul.append(li);
  
//     });
//   }





// function limpiarInput() {
//     document.getElementById('amigo').value = '';
//   }

// function limpiarListaAmigos() {
//     let listaAmigos = document.getElementById('listaAmigos');
  
//     while (listaAmigos.firstChild) {
//       listaAmigos.removeChild(listaAmigos.firstChild);
//     }
// }