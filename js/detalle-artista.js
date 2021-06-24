window.addEventListener("load", function(){


let queryString= location.search
let QSobject= new URLSearchParams(queryString)

let id=QSobject.get('q')

let url= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${id}`

fetch(url)

    .then(function(response){
         return response.json()

    })

    .then(function(data){

        console.log(data);
        



    })

    
    .catch(function(error){
        
        console.log(error);
    
    })


})