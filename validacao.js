function validacao(){
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('data').value;
    if (nome.length == 0 || data.length == 0){
        window.alert("Erro! Os campos nome e data são obrigatórios!!");
        event.preventDefault();
        if (nome.length == 0){
            document.getElementById('nome').focus();
        }
        else if (data.length == 0){
            document.getElementById('data').focus();
        }
    }
}
function cliquei(){
    var info = document.getElementById("informacao");
    var botao = document.getElementById("botao");
    if (botao.textContent == "Menos"){
        info.innerText = "";
        botao.innerText = "Mais";
    }
    else{
        info.innerText = "Para mais informações envie um email para: emessonsantos15@gmail.com";
        botao.innerText = "Menos";
    }
    
}