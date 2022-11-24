const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.orientacao');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', (Event) => {
    Event.preventDefault();
    nameValidate();
    emailValidate();
}); 

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
campos[index].style.border = '';
spans[index].style.display = 'none';
}


function nameValidate(){
   if(campos[0].value.length < 3)
    { 
        setError(0);
    }
     else
     {
        removeError(0);
     }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else{
        removeError(1);    
    }
}

function texareaValidate(){
    if(campos[2].value.length < 15)
    { 
        setError(2);
    }
    else
    {
        removeError(2); 
    }
}

// fim da validaçao do formulario


//start github profile ==========

document.getElementById('botao_api').addEventListener('click', showGithubUserProfile)

function showGithubUserProfile(){

    let username = document.getElementById('gusername_api').value

    let url = 'https://api.github.com/users/'+username
    fetch(url).then(res=>res.json()).then(data=>{
        if(data.message){
            document.getElementById('user-info_api').innerHTML = `
                <h3 style="margin-top:1rem; color:#c51313">Perfil não encontrado</h3>    
            `
        }else{
            document.getElementById('foto_api').innerHTML = `
            <img src="${data.avatar_url}"
            style="width:12rem">
        `
        document.getElementById('user-info_api').innerHTML = `
            <li>Nome: ${data.name} (${data.login})</li>
            <li>Repositório: ${data.public_repos}</li>
            <li>Seguidores: ${data.followers}</li>
            <li style="margin-bottom: 1rem">Seguindo: ${data.following}</li>
            <a class="btn btn-primary" href="${data.html_url}" role="button" target="_blank" style="color:#fff; background-color:#1a840c; padding:0.2rem">Visite meu Github</a>
        `
        }
        console.log(data)
    }).catch(e=>{
        console.log(e)
    })
}