window.addEventListener("load", function(){

console.log("hola");
let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get("id");

let url=`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`;
console.log(id);


fetch(url)
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
    
        //Me quedo solo los datos que me sirven 
       
        let tituloA = data.title;
        let imagenA = data.cover_big;
        let artistaA = data.artist.name;
        let generoA = data.genres.data[0].name;
        let fechaA = data.release_date;


                albums += `<div>
                                <h2>Album: ${tituloA}</h2>
                                    <img src="${imagenA}" alt="">
                                     <h3>Nombre: ${artistaA}</h3>
                                 <article>
                                    <h4>Genero:</h4>
                                        <ul>
                                            <li>${generoA}</li>
                                        </ul>
                                 </article>       
                                 <article>
                                    <h4>Fecha de Lanzamiento:</h4>
                                        <ul>
                                            <li>${fechaA}</li>
                                        </ul>
                                 </article>
                                 
                            </div> `
                    albumsContain.innerHTML += albums        
                      
        
})
    .catch( function(error){
        console.log(error);
    })


})







 