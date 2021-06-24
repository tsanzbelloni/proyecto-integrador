let listaArtistas = document.querySelector('.Artistas');
let ImgArtistas = document.querySelector('.Img1');

let listaAlbumes = document.querySelector('.Albumes');
let ImgAlbumes = document.querySelector('.Img2');

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
            
            let idArtistas = data.artists.data[i].id
            let artists = data.artists.data[i].name
            console.log(artists);

          listaArtistas.innerHTML +=  `<li><a href="../detalle-artista/detail-artist.html?id=${idArtistas}">${artists}<a></li>`
                    

        //Albumes
        
        let idAlbumes = data.albums.data[i].id
        let albumes = data.albums.data[i].title
        console.log(albumes);

        listaAlbumes.innerHTML += `<li><a href="../detalle-album/detail-album.html?id=${idAlbumes}">${albumes}<a></li>`
        
        //Canciones
        
        let idcanciones = data.tracks.data[i].id
        let canciones = data.tracks.data[i].title
        console.log(canciones);

        listaCanciones.innerHTML += `<li> <a href="../detalle-cancion/detalle-cancion.html?=${idcanciones}">${canciones}<a></li>`

        }

        //Imagenes

        ImgArtistas.src = data.artists.data[1].picture
        ImgAlbumes.src = data.artists.data[0].picture
        ImgCanciones.src = data.artists.data[3].picture
        
        

    })
    .catch( function(error){
        console.log(error);
    })