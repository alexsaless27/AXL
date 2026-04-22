function vPedido(){
    let produto= Number(document.getElementById("produto").value);
    let mensage= "";
    switch(produto){
        case 1:
            mensagem= "Você escolheu Hambúguer";
            break;
            case 2:
            mensagem= "Você escolheu Pizza";
            break;
            case 3:
            mensagem= "Você escolheu Refri";
            break;
            default:
                mensagem= "Código inválido";
    }
    document.getElementById("resultado").innerHTML= mensagem;
}