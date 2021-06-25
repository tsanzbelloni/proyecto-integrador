let url="https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"//defino mi url

fetch(url)////Proporcion mi variable url al fetch

    .then(function(response){
        return response.json();//convertimos respuesta en formato json
    
    })

    .then(function(data){// Recibimos la informacion de la primer instancia
        
        let generos= data.data
        console.log(generos);
        let lista= document.querySelector('.lista')// buscon dentro mi html la clase lista
        
        for (let i=0; i<generos.length; i++){//Hago un form que recorra todo mi array
            
           lista.innerHTML+=`<li><a href="../p-detalle-generos/detail-genres.html?id=${generos[i].id}">${generos[i].name}</li>
                            <img src="${generos[i].picture_medium}" alt="Imagen de ${generos[i].name}">`
        }
    })

   .catch(function(error){
        console.log(error);

   })
   