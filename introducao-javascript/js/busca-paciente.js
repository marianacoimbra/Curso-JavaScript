var botaoBuscarPacintes = document.querySelector("#busca-pacientes");

botaoBuscarPacintes.addEventListener("click", function() {

    console.log("Buscando pacientes...");

    //objeto responsavel por realizar requisições com o Javascript
    var xhr = new XMLHttpRequest();

    //Para configurar o XMLHttpRequest utilizamos a função .open()
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pac555ientes");

    //Para pegarmos a resposta quando a requisiçao HTTP voltar
    //precisamos colocar um escutador de evento no próprio 
    //XMLHttpRequest, escutando o evento de load:
    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");
       
        // Para detectarmos se ocorreu algo, devemos utilizar o código de status da requisição HTTP, que pode ser obtido através da propriedade .status do XMLHttpRequest
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            //transforma o formato json em um formato de objeto de Javascript
            var pacientes = JSON.parse(resposta);    
       
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    //Metodo que envia a requisicao
    xhr.send();
});