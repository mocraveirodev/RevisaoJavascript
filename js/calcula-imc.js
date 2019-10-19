document.querySelector("#titulo").textContent = "Aparecida Nutricionista"

let paciente = document.querySelector("#primeiro-paciente");
const pacientes = document.querySelectorAll(".paciente");

let validaPeso = (peso) => {
    if (peso <= 0 || peso > 1000) {
        return false
    }else{
        return true
    }
}

let validaAltura = (altura) => {
    if (altura <= 0 || altura >= 3) {
        return false
    }else{
        return true
    }
}

let calculaImc = (peso,altura) => {
    // let imc = peso / (altura * altura);
    return Math.round(peso / (altura * altura));
}

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    // let tdPeso = paciente.querySelector(".info-peso");
    let peso = paciente.querySelector(".info-peso").textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    // let imc = peso / (altura * altura);

    let tdImc = paciente.querySelector(".info-imc");
    // tdImc.textContent = imc;

    let alturaEhValida = validaAltura(altura);
    let pesoEhValido = validaPeso(peso);

    // if (peso <= 0 || peso > 1000) {
    //     pesoEhValido = false;
    // }

    // if (altura <= 0 || altura >= 3) {
    //     alturaEhValida = false;
    // }

    if(!alturaEhValida){
        tdAltura.textContent = "Altura inválida!"
        tdAltura.classList.add("paciente-invalido")
    }

    if(!pesoEhValido){
        tdPeso.textContent = "Peso inválido!"
        tdPeso.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {
        // tdImc.textContent = imc.toFixed(2);
        // tdImc.textContent = Math.round(imc);
        tdImc.textContent = calculaImc(peso,altura);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
        // paciente.style.backgroundColor = "lightcoral"
        paciente.classList.add("paciente-invalido")
    }

}