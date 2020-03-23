var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    
    //funcao que estabelece um tempo antes de realizar funcao 
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});