// pacientes.forEach((paciente) => {

//     paciente.addEventListener("dblclick", function() {
//         this.remove();
//     });

// });

// let tabela = document.querySelector("#tabela-pacientes")

// tabela.addEventListener()

document.querySelector("#tabela-pacientes").addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500)

})