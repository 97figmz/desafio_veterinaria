const fs = require("fs");

function registrar(nombre, edad, animal, color, enfermedad) {
    const cita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

    citas.push(cita);

    fs.writeFileSync("citas.json", JSON.stringify(citas));
}

function leer() {
    const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

    console.log(citas);
}

module.exports = { registrar, leer };