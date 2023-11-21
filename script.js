function validaFormulario() {
const nome = document.getElementById("nome").value;
const email = document.querySelector("#email").value;
const senha = document.getElementById("senha").value;

//validacao dos campos
if(nome === ''|| email === ''|| senha ===''){
    alert("Por favor, preencha os campos vazios!")
}
//Validação do campo do email
const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if(emailregex.test()){
    alert("Digite um e-mail válido!")
    return
}
//verifica o tam da senha 
if( senha.length > 8){
    alert("A senha execedeu a quatidade de caracteres")
    return
}
alert(" Cadastro realizado com sucesso")



}





