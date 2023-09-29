(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


/*
Em resumo, o código está criando uma funcionalidade de controle de botões e 
um botão para alternar entre modos claro e escuro em uma página da web. 
Quando um botão de controle é clicado, ele altera as classes dos botões e 
dos elementos correspondentes na página. O botão de alternância de tema muda 
entre os modos claro e escuro, aplicando uma classe ao corpo do documento.*/