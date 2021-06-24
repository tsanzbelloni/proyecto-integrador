window.addEventListener("load", function(){

})
let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);

let id=3135556;
//let id = queryStringToObject.get ("id");

let url_album = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`;



fetch(url_album)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data);
        //uso esta variable par quedarme solo con los datos del array
        let arrayinfo = data.data
        //obtengo el contenedor
        let albumsContain = document.querySelector(".albums");
        //agregamos una variable para poder llenar de contenido
        let albums = "";
    
        //Me quedo solo los datos que me sirven y cambio el contenido
        let title = document.querySelector(".title");
        title.innerText = `${arrayInfo.title}`;
        let image = document.querySelector("img");
        image.src = `${arrayInfo.cover_big}`;
        let artist = document.querySelector(".artist");
        artist.innerText = `${arrayInfo.artist.name}`;
        let genero = document.querySelector(".genres");
        genero.innerText = `${arrayInfo.genres.data[0].name}`;
        let fecha = document.querySelector(".release_date");
        fecha.innerText = `${arrayInfo.release_date}`;
        let canciones = document.querySelector(".tracks");
        for (let i=0; i<canciones.length; i++){ //bucle para recorrer las canciones del array
            canciones[i].innerHTML = `${arrayInfo.tracks.data[i].title}`;
        };

        
    })
    .catch( function(error){
        console.log(error);
    })










 