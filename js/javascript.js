const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.orientacao');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// function seError(index)
function nameValidate(){
    if(campos[0].value.length < 3)
    { 
    console.log('Este campo deve conter no mínino 3 letras');
     }
     else
     {
        console.log('Nome validado!');
     }
}
