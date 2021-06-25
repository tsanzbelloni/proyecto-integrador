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
        let artista = data.data[i].artist.name
        let album = data.data[i].album.title

        let idCancion = data.data[i].id
        let idArtista = data.data[i].artist.id
        let idAlbum = data.data[i].album.id


        Resultados.innerHTML += `<li><a herf="${cancion} de ${artista} en ${album}<li>`


        }

               
    Buscaste.innerText = `${aBuscar}`


        
    })
    .catch( function(error){
        console.log(error);
    })