
let recuperoStorage = localStorage.getItem('favoritos');// Recupero del local storage mi propiedad favoritos

let favoritos = JSON.parse(recuperoStorage);//Paso infromacion obtenida de el storage a un formato manipulable

let lista = document.querySelector('.lista');


for (let i=0; i<favoritos.length; i++){// Uso un form para recorrer el array
    
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${favoritos[i]}`// defino mi url
    
    //El fetch se va a ejecutar con cada id que tenga en favoritos
    
    fetch(url)//Proporciono mi variable url al fetch 
    .then( function(response){
        return response.json();//convertimos respuesta en formato json
    })
    .then(function(data){// Recibimos la informacion de la primer instancia
        //procesar
       
        lista.innerHTML += `<article> 
        <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${favoritos[i]}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                            </article>` // agrego a lista con inner html un template string
       
    
    })
    .catch( function(e){
        console.log(e);
    })
}  




    
