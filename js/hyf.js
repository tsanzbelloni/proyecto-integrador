
window.addEventListener('load', function(){

//Validación de formularios
console.log('hola');
alert ('Hola');

let formulario = document.querySelector('form');
//let Busqueda = document.querySelector('[name=buscar]');
let Busqueda = document.querySelector('.Buscar');
let alert = document.querySelector('.alert');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    

    if(Busqueda.value == ""){
        //alert.innerText = 'El campo no puede estar vacío';
        alert('Hola')
    }else if(Busqueda.value.length >3){
        //alert.innerText = 'Por favro ingrese mas de 3 caracteres';
        alert('Holaaaaaa')
    }else{
        this.submit()
    }

})

})