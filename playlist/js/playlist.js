//Lista de gifs favoritos

//Recupero el storage.
let recuperoStorage = localStorage.getItem('favoritos');
//Obtengo el array 
let favoritos = JSON.parse(recuperoStorage);
//destino de los datos en el html
let lista = document.querySelector('.lista');


//Opcional avisar al usuario que no hay gifs en su lista.

//Necesitamos recorrer el array de facoritos
for (let i=0; i<favoritos.length; i++){
    //buscarYMostrarFavoritos
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
        let info = data;
        let resultados = '';
        lista.innerHTML += `<article>
        <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                            </article>` 
    
    })
    .catch( function(e){
        console.log(e);
    })
}
