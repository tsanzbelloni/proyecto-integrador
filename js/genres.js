let url="https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

fetch(url)

    .then(function(response){
        return response.json();
    
    })

    .then(function(data){
        
        let generos= data.data
        console.log(generos);
        let lista= document.querySelector('.lista')
        
        for (let i=0; i<generos.length; i++){
            
           lista.innerHTML+=`<li>${generos[i].name}</li>
                            <img src="${generos[i].picture_small}" alt="Imagen de ${generos[i].name}">`
        }
    })

   .catch(function(error){
        console.log(error);

   })