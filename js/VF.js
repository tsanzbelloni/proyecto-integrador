window.addEventListener('load', function(){ 


console.log('holaa');
let formulario = document.querySelector('form');
let busqueda = document.querySelector('.Buscar');
let alerta = document.querySelector('.alert');


formulario.addEventListener('submit', function(e){
    e.preventDefault();

    if(busqueda.value == ''){
        alerta.innerText = 'El campo no puede estar vacio';
    }else if(busqueda.value.length <3){
        alerta.innerText = 'Por favor ingrese mas de 3 caracteres';
    }else{
        this.submit()
    }
})






})