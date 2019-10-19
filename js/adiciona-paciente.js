let obtemPaciente = (form) => {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }

    return paciente;
}

let validaPaciente = (paciente) => {
    let erros = [];

    (paciente.nome.length == 0) ? erros.push("Nome não pode ser em branco!") : "";
    (paciente.peso.length == 0) ? erros.push("Peso não pode ser em branco!") : "";
    (paciente.altura.length == 0) ? erros.push("Altura não pode ser em branco!") : "";
    (paciente.gordura.length == 0) ? erros.push("Gordura não pode ser em branco!") : "";

    !validaAltura(paciente.altura) ? erros.push("Altura inválida!") : "";
    !validaPeso(paciente.peso) ? erros.push("Peso inválido!") : "";

    console.log(erros)

    // if(!validaAltura(altura)){
    //     erros.push("Altura inválida!")
    // }else{
    //     ""
    // }
    return erros
}

let exibeMensagensDeErro = (erros) => {
    let ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""
    erros.forEach( erro => {
        let li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    });
}

let montaTd = (dado,classe) => {
    let td = document.createElement("td")
    td.classList.add(classe)
    td.textContent = dado

    return td;
}

let montaTr = (paciente) => {
    let pacienteTr = document.createElement("tr")

    pacienteTr.classList.add("paciente")

    let nomeTd = montaTd(paciente.nome,"info-nome")
    let pesoTd = montaTd(paciente.peso,"info-peso")
    let alturaTd = montaTd(paciente.altura,"info-altura")
    let gorduraTd = montaTd(paciente.gordura,"info-gordura")
    let imcTd = montaTd(paciente.imc,"info-imc")
    
    // let nomeTd = document.createElement("td")
    // let pesoTd = document.createElement("td")
    // let alturaTd = document.createElement("td")
    // let gorduraTd = document.createElement("td")
    // let imcTd = document.createElement("td")

    // nomeTd.classList.add("info-nome")
    // pesoTd.classList.add("info-peso")
    // alturaTd.classList.add("info-altura")
    // gorduraTd.classList.add("info-gordura")
    // imcTd.classList.add("info-imc")

    // nomeTd.textContent = paciente.nome
    // pesoTd.textContent = paciente.peso
    // alturaTd.textContent = paciente.altura
    // gorduraTd.textContent = paciente.gordura
    // imcTd.textContent = paciente.imc

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr
}

let botaoAdicionar = document.querySelector("#adicionar-paciente")

// botaoAdicionar.addEventListener("click", function(){
botaoAdicionar.addEventListener("click",(event) => {
    event.preventDefault()
    // console.log("Hello World")

    let form = document.querySelector("#form-adiciona")

    let paciente = obtemPaciente(form)

    let erros = validaPaciente(paciente)

    if(erros.length > 0){
        exibeMensagensDeErro(erros)
        return
    }

    // console.log(paciente)

    // let nome = form.nome.value
    // let peso = form.peso.value
    // let altura = form.altura.value
    // let gordura = form.gordura.value

    let pacienteTr = montaTr(paciente)
    // let pacienteTr = document.createElement("tr")
    // pacienteTr.classList.add("paciente")

    // let nomeTd = document.createElement("td")
    // let pesoTd = document.createElement("td")
    // let alturaTd = document.createElement("td")
    // let gorduraTd = document.createElement("td")
    // let imcTd = document.createElement("td")

    // nomeTd.classList.add("info-nome")
    // pesoTd.classList.add("info-peso")
    // alturaTd.classList.add("info-altura")
    // gorduraTd.classList.add("info-gordura")
    // imcTd.classList.add("info-imc")

    // nomeTd.textContent = paciente.nome
    // pesoTd.textContent = paciente.peso
    // alturaTd.textContent = paciente.altura
    // gorduraTd.textContent = paciente.gordura
    // imcTd.textContent = paciente.imc

    // pacienteTr.appendChild(nomeTd)
    // pacienteTr.appendChild(pesoTd)
    // pacienteTr.appendChild(alturaTd)
    // pacienteTr.appendChild(gorduraTd)
    // pacienteTr.appendChild(imcTd)

    let tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)

    let ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""

    form.reset()

    // console.log(pacienteTr)
})