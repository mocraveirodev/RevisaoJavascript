for (let i = 0; i < data["pacientes"].length; i++) {
    console.log("for", data["pacientes"][i]);
}

data["pacientes"].forEach(function (paciente) {
    console.log("foreach", paciente);
});

for (i in data["pacientes"]) {
    console.log("for...in", data["pacientes"][i]);
}

for (i of data["pacientes"]) {
    console.log("for...of", i)
}

data["pacientes"].map((paciente) => console.log("map", paciente));

let filtrado = data["pacientes"].filter(paciente => (paciente["altura"] > 1.7));

console.log("filter", filtrado);

console.log("reduce", data["pacientes"].reduce((acumulador, valor) => (acumulador + valor["peso"])))

// console.log("for...in", data["pacientes"][i]["peso"]);