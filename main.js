// Ejercicio 1
// Ejercicio 1
let vida = 100;
let vidaMaxima = 100;
let limiteBajo = 50;
let misBayas = 3;

let bucleVida = setInterval(function() {
    vida = vida - 5;

    if (vida < limiteBajo && vida > 0 && misBayas > 0) {
        vida = vida + 30;
        misBayas--;

        if (vida > vidaMaxima) {
            vida = vidaMaxima;
        }

        console.log("¡Te curaste con una baya!");
    }

    if (vida < 0) {
        vida = 0;
    }

    console.log("Vida actual:", vida);
    console.log("Bayas que quedan:", misBayas);

    if (vida === 0) {
        console.log("Perdiste el juego");
        clearInterval(bucleVida);
    }

}, 2000);


// Ejercicio 2
const bolsa = [
    { nombre: "Dusk Ball", cantidad: 7, tipo: "Normal" },
    { nombre: "Escape Rope", cantidad: 2, tipo: "Normal" },
    { nombre: "Shadow Ball", cantidad: 1, tipo: "TM" },
    { nombre: "Earthquake", cantidad: 2, tipo: "TM" },
    { nombre: "Lava Cookie", cantidad: 8, tipo: "Consumable" }
];

function meterCosa(nombre, cantidad, tipo) {
    const itemNuevo = {
        nombre: nombre,
        cantidad: cantidad,
        tipo: tipo
    };
    bolsa.push(itemNuevo);
    console.log("Metiste " + nombre + " a la bolsa");
}

function acomodarBolsa() {
    const tipoNormal = bolsa.filter(cosa => cosa.tipo === "Normal");
    const tipoTm = bolsa.filter(cosa => cosa.tipo === "TM");
    const tipoConsumible = bolsa.filter(cosa => cosa.tipo === "Consumable");

    console.log("--- COSAS NORMALES ---");
    console.log(tipoNormal);

    console.log("--- COSAS TM ---");
    console.log(tipoTm);

    console.log("--- COSAS CONSUMIBLES ---");
    console.log(tipoConsumible);
}

function cambiarCantidad(nombreBusca, nuevaCant) {
    for (let i = 0; i < bolsa.length; i++) {
        if (bolsa[i].nombre === nombreBusca) {
            bolsa[i].cantidad = nuevaCant;
            console.log("Ahora " + nombreBusca + " tiene " + nuevaCant);
            return;
        }
    }
    console.log("No se encontró ese objeto.");
}

function borrarCosa(nombreBusca) {
    for (let i = 0; i < bolsa.length; i++) {
        if (bolsa[i].nombre === nombreBusca) {
            bolsa.splice(i, 1);
            console.log("Borraste " + nombreBusca);
            return;
        }
    }
    console.log("No se encontró para borrar.");
}

function buscarUnaCosa(nombreBusca) {
    const encontrado = bolsa.find(cosa => cosa.nombre === nombreBusca);

    if (encontrado) {
        console.log(encontrado);
    } else {
        console.log("No se encontró: " + nombreBusca);
    }
}

console.log("--- BOLSA INICIAL ---");
console.log(bolsa);

console.log("--- BOLSA ACOMODADA ---");
acomodarBolsa();

console.log("--- AGREGAR OBJETO ---");
meterCosa("Full Restore", 4, "Consumable");
buscarUnaCosa("Full Restore");

console.log("--- CAMBIAR CANTIDAD ---");
cambiarCantidad("Dusk Ball", 12);
buscarUnaCosa("Dusk Ball");

console.log("--- BORRAR OBJETO ---");
borrarCosa("Escape Rope");
buscarUnaCosa("Escape Rope");

console.log("--- BOLSA FINAL ---");
console.log(bolsa);


// Ejercicio 3
const poke1 = {
    nombre: "Gengar",
    tipo: "Fantasma/Veneno",
    ataque: "Bola Sombra",
    fuerza: 35,
    vida: 65,
    defensa: 10
};

const poke2 = {
    nombre: "Garchomp",
    tipo: "Dragón/Tierra",
    ataque: "Terremoto",
    fuerza: 30,
    vida: 80,
    defensa: 15
};

function pegar(atacante, defensor) {
    let danoReal = atacante.fuerza - defensor.defensa;

    if (danoReal < 0) {
        danoReal = 0;
    }

    defensor.vida = defensor.vida - danoReal;

    if (defensor.vida < 0) {
        defensor.vida = 0;
    }

    console.log(atacante.nombre + " ataca y hace " + danoReal + " de daño a " + defensor.nombre);
    console.log("A " + defensor.nombre + " le quedan " + defensor.vida + " de vida.");
}

function pelea(luchadorA, luchadorB) {
    console.log("¡EMPIEZA LA PELEA: " + luchadorA.nombre + " VS " + luchadorB.nombre + "!");

    while (luchadorA.vida > 0 && luchadorB.vida > 0) {
        pegar(luchadorA, luchadorB);

        if (luchadorB.vida <= 0) {
            console.log("¡Gana " + luchadorA.nombre + "!");
            break;
        }

        pegar(luchadorB, luchadorA);

        if (luchadorA.vida <= 0) {
            console.log("¡Gana " + luchadorB.nombre + "!");
            break;
        }
    }
}

pelea(poke1, poke2);