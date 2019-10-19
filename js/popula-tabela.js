window.onload = () => {
    mostraPaciente()
}

const pegaPaciente = () => {
    return data.pacientes
    // return data["pacientes"]
}

// console.log(pegaPaciente())

const mostraPaciente = () => {

    document.querySelector("#tabela-pacientes").innerHTML += `
        ${
            pegaPaciente().map((paciente) => `
                <tr class="paciente">
                    <td class="info-nome">${paciente["nome"]}</td>
                    <td class="info-peso">${paciente["peso"]}</td>
                    <td class="info-altura">${paciente["altura"]}</td>
                    <td class="info-gordura">${paciente["gordura"]}</td>
                    <td class="info-imc">${paciente["imc"]}</td>
                </tr>
            `).join("")
        }
    `

    // for( paciente of pegaPaciente()){
    //     document.querySelector("#tabela-pacientes").innerHTML +=
    //         "<tr class='paciente'>" +
    //             "<td class='info-nome'>" + paciente["nome"] + "</td>" +
    //             "<td class='info-peso'>" + paciente["peso"] + "</td>" +
    //             "<td class='info-altura'>" + paciente["altura"] + "</td>" +
    //             "<td class='info-gordura'>" + paciente["gordura"] + "</td>" +
    //             "<td class='info-imc'>" + paciente["imc"] + "</td>" +
    //         "</tr>"
    // }
}

for (i in data["pacientes"]) {
    console.log("for...in", data["pacientes"][i]);
}



    


    
    




