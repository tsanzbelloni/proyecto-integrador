
let url="https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556" 
// https://cors-anywhere.herokuapp.com/corsdemo

fetch(url)
    
    .then(function(response){
        return response.json();
    })
    
    .then(function(data){
        
        console.log(data);
        let Info=data.data
        let lista= document.querySelector('.lista')
        let contenidoLista=''; // Poner el contenido a mostrar dentro de esta lista

        for(let i=0; i<Info.length; i++){
            contenidoLista += `<li>${Info[i].data.title}</li>`
        }

        lista.innerHTML += contenidoLista 

    })

    .catch(function(error){
        console.log(error);
    })