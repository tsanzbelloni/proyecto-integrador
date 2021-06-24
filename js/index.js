let listaArtistas = document.querySelector('.Artistas');
let ImgArtistas = document.querySelector('.Img1');

let listaAlbumes = document.querySelector('.Albumes');
let ImgAlbumes = document.querySelector('Img3');

let listaCanciones = document.querySelector('.Canciones');
let ImgCanciones = document.querySelector('.Img3');


let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart '

fetch( url )
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)

        

        for(let i=0; i<5; i++){

        //Artistas

            let artists = data.artists.data[i].name
            console.log(artists);

            listaArtistas.innerHTML += `<li>${artists}</li>`          
        

        //Albumes

        let albumes = data.albums.data[i].title
        console.log(albumes);

        listaAlbumes.innerHTML += `<li>${albumes}</li>`
        
        //Canciones

        let canciones = data.albums.data[i].title
        console.log(canciones);

        listaCanciones.innerHTML += `<li>${canciones}</li>`

        }

    })
    .catch( function(error){
        console.log(error);
    })