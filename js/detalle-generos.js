window.addEventListener("load", function(){
    


let queryString = location.search
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get("id");

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`

fetch(url)
    .then(function(response){
        return response.json();
    
    })

    .then(function(data){
        console.log(data);

        let lista = document.querySelector("#genresx");
        let listaCont = "";
        for(let i=0; i<data.data.length; i++){
            let artistaNombre = data.data[i].name;
            let artistaImg = data.data[i].picture_medium;
            
            listaCont += `<div class= "artistas" id="genresx">
                            <h3>Artistas:</h3>
                                <div class= "lista">
                                <div><h4><a href="../detalle-artista/detail-artist.html">${artistaNombre}</a></h4><img src="${artistaImg}"alt=""></div>
                             
                          </div>`
     }
        lista.innerHTML += listaCont
    })

   .catch(function(error){
        console.log(error);

   })
})