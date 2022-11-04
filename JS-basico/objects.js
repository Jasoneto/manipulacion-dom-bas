//el objeto tiene un parámetro que es una función

var miAuto = {
    marca: "Nissan",
    modelo: "Versa",
    annio: "2023",
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
// -This- hace referencia al objeto global o sea -miAuto-