let queryString = location.search 
let queryStringToObject = new URLSearchParams(queryString);

//let id=3135556;
let id = queryStringToObject.get('id');

let url=`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}` 
// https://cors-anywhere.herokuapp.com/corsdemo
console.log(url);

fetch(url)
    
    .then(function(response){
        return response.json();
    })
    
    .then(function(data){
        
        console.log(data);
        
        let NombreAlbum=data.album.title
        let title=data.title
        let artista=data.artist.name
        let lista= document.querySelector('.lista')
        let imagen= document.querySelector('.imagen')
        let UrlAlbum=data.album.cover_medium
        let Player= data.preview
        let audio= document.querySelector('.audio')
        audio.src=Player   
            
              
                lista.innerHTML= `<ul><h2 >${title}<h2></ul>
                                <ul><a  href="../detalle-artista/detail-artist.html?q=${artista}">Artista:${artista}</ul>
                                <ul><a  href="../detalle-album/detail-album.html?id${data.album.id}">Album:${NombreAlbum}</ul>`

       imagen.src= UrlAlbum;
        
        })

    .catch(function(error){
        console.log(error);
    })

    let favoritos = [];


let recuperoStorage = localStorage.getItem('favoritos');


if(recuperoStorage != null){
    favoritos = JSON.parse(recuperoStorage); 
}


if(favoritos.includes(id)){
    document.querySelector('.fav').innerText = "Quitar de playlist"; //fijarme si esta el id en mi array para cambiar el texto o no
}



//Cuando el usuario haga click en "agregar a favoritos _> Agregar id del gif dentro del array.
let fav = document.querySelector('.fav');
console.log(fav);

fav.addEventListener("click", function(e){
    e.preventDefault();

    //Chequear si el id está en el array
    if(favoritos.includes(id)){
        let idASacar = favoritos.indexOf(id);
        favoritos.splice(idASacar, 1);
        document.querySelector('.fav').innerText = "Agregar a playlist";
    } else {
        //Guardamos el id en el array
        favoritos.push(id);
        console.log(favoritos);
        document.querySelector('.fav').innerText = "Quitar de playlist";
    }


    //Armamos un string
    let favParaStorage = JSON.stringify(favoritos);
    //Lo guardamos dentro de localStorage
    localStorage.setItem('favoritos', favParaStorage);
    console.log(localStorage);

})
