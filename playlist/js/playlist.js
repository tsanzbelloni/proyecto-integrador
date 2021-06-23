
let recuperoStorage = localStorage.getItem('favoritos');

let favoritos = JSON.parse(recuperoStorage);

let lista = document.querySelector('.lista');


for (let i=0; i<favoritos.length; i++){
    
    buscarYMostrarFavoritos(favoritos[i]);
}


function buscarYMostrarFavoritos(id){
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
    
    fetch(url)
    .then( function(response){
        return response.json();
    })
    .then(function(data){
        //procesar
       
        lista.innerHTML += `<article>
        <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                            </article>` 
    
    })
    .catch( function(e){
        console.log(e);
    })
}
