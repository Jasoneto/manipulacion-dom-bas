//Funciones declarativas

function miFuncion () {
    return 3;
}

miFuncion();


//Funciones de expresión

var miFuncion = Function(a,b) {
    return a + b;
}

miFuncion();

function saludarEstudiantes(estudiante) {
    console.log(estudiante);
}

saludarEstudiantes("Jason");

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

sumar(1,2);

