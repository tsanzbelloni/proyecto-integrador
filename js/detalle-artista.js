window.addEventListener("load", function(){


let queryString= location.search
let QSobject= new URLSearchParams(queryString)


let id=QSobject.get('q')

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
                    
      let cancionesDetalle = document.querySelectorAll(".canciones_detalle");
            for(let i=0; i<canciones_detalle; i++){
                            
                canciones_detalle[i].innerHTML = `${detalleInfo.tracks.data[i].title}`;
             };

      let imagenAD = data.picture_medium;
      let nombreAD = data.name;
            
      detalleArtistaCont += `<section class="lista">
                                    <h2><ahref="../detalle-artista/detail-artist.html">${nombreAD}</a></h2>
            
                                    <img src="${imagenAD}" alt="Posty">
                                                
                             </section>`            
            
                })
                
                .catch(function(error){
                    
                    console.log(error);
                
                })
            
})


            

