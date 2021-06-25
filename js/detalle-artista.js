window.addEventListener("load", function(){

   
let queryString= location.search;
let queryStringToObject = new URLSearchParams(queryString);


let id = queryStringToObject.get('id');

let url= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`;

fetch(url)

    .then(function(response){
         return response.json()

    })
            
    .then(function(data){      
      console.log(data);

      let detalleInfo = data
      let detalleArtista = document.querySelector(".lista");
      let detalleArtistaCont = "";
                    
      //let cancionesDetalle = document.querySelectorAll(".canciones_detalle");
        //    for(let i=0; i<canciones_detalle; i++){
                            
          //canciones_detalle[i].innerHTML = `${detalleInfo.tracks.data[i].title}`;
            // };

      let imagenAD = data.picture_medium;
      let nombreAD = data.name;
      
      //let cancionesAD = data.tracks;
      //let topCinco= document.querySelectorAll(".lista");
       // for (let i=0; i<topCinco.length; i++){
         // topCinco[i].innerHTML=`${detalleInfo[i].title}`;
        //};

            
      detalleArtistaCont += `<section class="lista">
                                    <h2><a href="../detalle-artista/detail-artist.html">${nombreAD}</a></h2>
                                    <ul>
                                        <li>><a href="https://api.deezer.com/artist/10583405/top?limit=50${id}"></a>
                                    
                                        
                                    <img src="${imagenAD}" alt="Posty">
                                                
                             </section>`            
                    detalleArtista.innerHTML += detalleArtistaCont
                })
                
                .catch(function(error){
                    
                    console.log(error);
                
                })
            
})


            

