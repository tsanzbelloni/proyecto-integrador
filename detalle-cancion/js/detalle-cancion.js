

let url="https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556" 
// https://cors-anywhere.herokuapp.com/corsdemo

fetch(url)
    
    .then(function(response){
        return response.json();
    })
    
    .then(function(data){
        
        //console.log(data);
        
        let NombreAlbum=data.album.title
        let title=data.title
        let artista=data.artist.name
        let lista= document.querySelector('.lista')
        let imagen= document.querySelector('.imagen')
        let UrlAlbum=data.album.cover
            
            imagen.src= UrlAlbum;
              lista.innerHTML= `<ul>${title}</ul>
                                <ul>${artista}</ul>
                                <ul>${NombreAlbum}</ul>`
       
        let Player= data.preview
        console.log(Player);
        let audio= document.querySelector('.audio')
            
            audio.src= Player
            


        
    })

    .catch(function(error){
        console.log(error);
    })