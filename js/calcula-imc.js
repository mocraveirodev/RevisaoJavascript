document.querySelector(".titulo").textContent = "Aparecida Nutricionista";

const pacientes = document.querySelectorAll(".paciente");

// calculaImc = (peso,altura) => {
//     return peso / (altura * altura).toFixed(2);
// }

validaPeso = (peso) => {

    if (peso >= 0 && peso <= 300) {
        return true;
    } else {
        return false;
    }
}

validaAltura = (altura) => {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

calculaImc = (peso, altura) => {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    let tdAltura = paciente.querySelector(".info-altura");
    let tdPeso = paciente.querySelector(".info-peso");
    let tdImc = paciente.querySelector(".info-imc");


    let altura = tdAltura.textContent;
    let peso = tdPeso.textContent;

    //Comentando pois agora vamos usar a função para validar

    // let alturaEhValida = true;
    // let pesoEhValido = true;  

    // if (peso <= 0 || peso > 1000) {
    //     pesoEhValido = false;
    // }

    // if (altura <= 0 || altura >= 3) {
    //     alturaEhValida = false;
    // }  
    let alturaEhValida = validaAltura(altura);
    let pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
}