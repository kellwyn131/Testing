
let email = document.querySelector('#campoEmail');
let senha = document.querySelector('#campoSenha');
let labelSenha = document.querySelector('#labelSenha');
let labelEmail = document.querySelector('#labelEmail');
let botao = document.querySelector('#second2');
let olho = document.getElementById('verSenha');
let mensagem = document.getElementById('erro');


let validEmail = false;
let validSenha = false;


//verifica se os campos foram preenchidos, se sim: abre a páhina come, se não, da a mensagem de erro 
function login(){
  if(validEmail && validSenha){
    location.href = "t_home.html"
  } else { 
    mensagem.innerText = 'Preencha os campos';
  }
}


//Evento criado com addlistener para fazer senha aparecer e desaparecer

olho.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#campoSenha');

  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
})

//Validaçao do email

email.addEventListener('keyup',()=>{
  if(email.value.length === 0){
    labelEmail.setAttribute('style', 'color: white');
    labelEmail.innerHTML = 'Email';
    validEmail = false;
    mensagem.innerText = '';
  } else {
    if(validatorEmail(email.value) !== true){
      labelEmail.setAttribute('style', 'color: red');
      labelEmail.innerHTML = '*insira um email válido';
      validEmail = false;
      mensagem.innerText = '';
    } else {
      labelEmail.setAttribute('style', 'color: green');
      labelEmail.innerHTML = 'Email válido';
      validEmail = true;
      mensagem.innerText = '';
    }
  }
})

function validatorEmail(email){
  let pegaEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return pegaEmail.test(email)
}



senha.addEventListener('keyup',()=>{
  
  if(senha.value.length == 0){
    labelSenha.setAttribute('style', 'color: white');
    labelSenha.innerHTML = 'Senha';
    validSenha = false;
    mensagem.innerText = '';
  } else {
      if(senha.value.length >= 1 && senha.value.length <= 7){
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = '*insira no mínimo 8 caracteres';
        validSenha = false;
        mensagem.innerText = '';
    }else{
      labelSenha.setAttribute('style', 'color: green');
      labelSenha.innerHTML ='Senha válida'
      validSenha = true; 
      mensagem.innerText = '';
    }
  }
})
