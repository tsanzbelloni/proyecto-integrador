let queryString = location.search //capturo mi query string
let queryStringToObject = new URLSearchParams(queryString);//convierto mi query string de cadena de texto  en un objeto literal
 
 
let id = queryStringToObject.get('id');// busco con .get la propiedad id
 
let url=`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`// Defino la variable url.Hago un template literal para poder concatnear mi endpoint con variable id
// https://cors-anywhere.herokuapp.com/corsdemo
console.log(url);
 
fetch(url)//Proporcion mi variable url al fetch
    
    .then(function(response){
        return response.json();//convertimos respuesta en formato json
    })
    
    .then(function(data){// Recibimos la informacion de la primer instancia
        
        console.log(data);
        
        let NombreAlbum=data.album.title
        let title=data.title
        let artista=data.artist.name 
        let lista= document.querySelector('.lista')// buscon dentro mi html la clase lista
        let imagen= document.querySelector('.imagen')
        let UrlAlbum=data.album.cover_medium
        let Player= data.preview
        let audio= document.querySelector('.audio')
        audio.src=Player  // agrego al src de la etiqueta audio mi variable player
        imagen.src= UrlAlbum;
            
              
                lista.innerHTML= `<ul><h2 >${title}</h2></ul> 
                                <ul><a  href="../detalle-artista/detail-artist.html?q=${artista}">Artista:${artista}</ul>
                                <ul><a  href="../detalle-album/detail-album.html?id=${data.album.id}">Album:${NombreAlbum}</ul>`
 
                                //agrego a lista con inner html un template string
       
        
        })
 
    .catch(function(error){
        console.log(error);//mostrar errores
 
    })
 
    let favoritos = [];
 
 
let recuperoStorage = localStorage.getItem('favoritos');//Recupero de mi local storage mi propiedad favoritos
 
 
if(recuperoStorage != null){// evaluo si hay info en el storage
    favoritos = JSON.parse(recuperoStorage); // Si hay informacion,la coonvierto de string  a objeto y la guardo en el array
 
}
 
 
if(favoritos.includes(id)){
    document.querySelector('.fav').innerText = "Quitar de playlist"; 
}
 
 
let fav = document.querySelector('.fav');
console.log(fav);
 
fav.addEventListener("click", function(e){
    e.preventDefault();// evitar recargar la pagina
 
   
    if(favoritos.includes(id)){ //chequeo si el id está en el array
        let idASacar = favoritos.indexOf(id);//  Uso el metodo indexOf para saber el indice de mi id.
        favoritos.splice(idASacar, 1);//Uso el metodo splice 
        document.querySelector('.fav').innerText = "Agregar a playlist";
    } else {
        //Guardamos el id en el array
        favoritos.push(id);//Agrego al array favoritos mi elemento id mediante el método push
        console.log(favoritos);
        document.querySelector('.fav').innerText = "Quitar de playlist";
    }
 
 
    
    let favParaStorage = JSON.stringify(favoritos);// Transformo favoritos de objeto a una cadena de texto en formato JSON 
   
    localStorage.setItem('favoritos', favParaStorage); //Guardo favoritos dentro de mi storage
    console.log(localStorage);
 
})


