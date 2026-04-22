function vtime(){
let time= Number(document.getElementById("time").value);
let mensagem= "";

switch(time){
    case 1:
        mensagem= "Você escolheu Vitória";
        break;
       
    case 2:
        mensagem= "Você escolheu Bahia";
        break;    
    case 3:
        mensagem= "Você escolheu Santos";
        break;    
    default:
        mensagem= "Código inválido";


}
document.getElementById("resultado").innerHTML= mensagem;
document.getElementById("resultado2").innerHTML= mensagem;

}