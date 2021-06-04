
let url="https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556" 

fetch(url)
    .then(
        function(response){
        return response.json();
    })
    
    .then(function(info){
        
    })

    .catch(function(error){
        console.log(error);
    })