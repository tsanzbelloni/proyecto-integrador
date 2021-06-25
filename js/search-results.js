let Buscaste = document.querySelector('.Buscaste');
let Resultados = document.querySelector('.Resultados');


let queryString = location.search
let queryStringToObject = new URLSearchParams(queryString)
let aBuscar = queryStringToObject.get('buscar');

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${aBuscar}`

fetch( url )
    .then( function(response){
        return response.json();
    })
    .then( function(data){
       console.log(data)

        for(let i=0; i<10; i++){

        let cancion = data.data[i].title
        let artists = data.data[i].artist.name
        let albumes = data.data[i].album.title

        let idcanciones = data.data[i].id
        let idartistas = data.data[i].artist.id
        let idAlbumes = data.data[i].album.id


        Resultados.innerHTML += `<li><a href="../detalle-cancion/detalle-cancion.html?q=id=${idcanciones}">${cancion}<a> de <a href="../detalle-artista/detail-artist.html?q=${artists}">${artists}<a> en <a href="../detalle-album/detail-album.html?q=id=${idAlbumes}">${albumes}<a><li>`


        }

               
    Buscaste.innerText = `${aBuscar}`


        
    })
    .catch( function(error){
        console.log(error);
    })