var articulos = [
    { nombre: "Bicicleta", costo: 3000},
    { nombre: "Televisor", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];
//Find
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"       
});

//forEach
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Some, respuesta True o False
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;    
});

