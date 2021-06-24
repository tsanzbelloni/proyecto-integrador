let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart '

fetch( url )
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data)

    })
    .catch( function(error){
        console.log(error);
    })