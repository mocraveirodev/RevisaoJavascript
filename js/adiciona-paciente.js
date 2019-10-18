let botaoAdicionar = document.querySelector("#adicionar-paciente");

obtemPaciente = (form) => {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

validaPaciente = (paciente) => {
    let erros = [];

    (paciente.nome.length == 0) ? erros.push("O nome não pode ser em branco") : "";
    (paciente.gordura.length == 0) ? erros.push("A gordura não pode ser em branco") : "";
    (paciente.peso.length == 0) ? erros.push("O peso não pode ser em branco") : "";
    (paciente.altura.length == 0) ? erros.push("A altura não pode ser em branco") : "";

    !validaPeso(paciente.peso) ? erros.push("Peso é inválido") : "";
    !validaAltura(paciente.altura) ? erros.push("Altura é inválida") : "";

    return erros;
}

exibeMensagensDeErro = (erros) => {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

montaTd = (dado, classe) => {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

montaTr = (paciente) => {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    let nomeTd = montaTd(paciente.nome, "info-nome");
    let pesoTd = montaTd(paciente.peso, "info-peso");
    let alturaTd = montaTd(paciente.altura, "info-peso");
    let gorduraTd = montaTd(paciente.gordura, "info-gordura");
    let imcTd = montaTd(paciente.imc, "info-imc");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    //Extrai informações do paciente do form
    let paciente = obtemPaciente(form);

    //Cria tr e td do paciente
    let pacienteTr = montaTr(paciente);

    //Validação do paciente

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }
    // if (!validaPaciente(paciente)) {
    //     console.log("Paciente inválido");
    //     return;
    // }

    //Adiciona paciente na tabela
    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

    let lista = document.querySelector("#mensagens-erro")
    
    lista.innerHTML = "";
});

// let botao = document.querySelector('#botao');

//     function botaoHandler() {

//         alert('Botão clicado');
//     }

//      function outroHandler() {

//         alert('Botão clicado também!');
//     }


//     botao.onclick = botaoHandler;
//     botao.onclick = outroHandler; // substitui botaoHandler