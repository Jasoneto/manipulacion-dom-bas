// Para una sola opción default si el parámetro if es false
if (true) {
    console.log("Hola");
} else {
    console.log("soy falso");
}

//si quiero tener más opciones en caso de ser false, se usa "else if"

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu 1ra votación");
} else if (edad > 18) {
    console.log("puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
}

// ? significa "entonces"
condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno";
