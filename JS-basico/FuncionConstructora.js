function auto(marca, modelo, annio); {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Nissan", "Versa", 2022);
var autoNuevo2 = new auto("Tesla", "Model 3", 2021);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

//intentanding hacer un buble con una función constructora...lol

//y A la final lo copié de otro porque no supe cómo :(

    function auto (MARCA, MODELO, ANNIO){
        this.marca = MARCA;
        this.modelo = MODELO;
        this.annio = ANNIO;
      }
      var autos = [];
      for(let i = 0 ; i < 30 ; i++){
        var marca = prompt("Ingresa la marca del auto");
        var modelo = prompt("Ingresa el modelo del auto");
        var annio = prompt("Ingresa el año del auto");
        autos.push(new auto (marca, modelo, annio));
      }
      
      for(let i = 0 ; i < autos.length ; i++){
        console.log(autos[i]);
      }