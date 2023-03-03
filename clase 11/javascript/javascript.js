//PRIMER CONSIGNA
let precio = 0;
let precioFinal = 0;
// Valor base del helado
const helado = 30;

// Aca ingresar el topping elegido entre oreo - kitkat- kinder
const topping = "oreo"

if (topping == "oreo") {
    precio = 10
    precioFinal =  helado + precio
}
else if (topping == "kitkat") {
    precio = 15

    precioFinal =  helado + precio
}
else if (topping == "kinder") {
    precio = 25
    precioFinal =  helado + precio
}else{
    precioFinal = helado
   console.log('No tenemos este topping');
}

console.log('El precio final del helado es: ' + precioFinal);

//SEGUNDA CONSIGNA
let pedido = ""

switch (pedido) {
    case "carne":
        console.log("puede agregar al pedido vino tinto");
        break;
    case "pescado":
        console.log("puede agregar vino blanco a su pedido");
        break;
    case "verduras":
        console.log("puede agregar agua a su pedido");
        break
        default:
            console.log("elija carne, pescado o verdura")

}


//TERCER CONSIGNA

let mascotas = ["dastan", "farah", "draco", "lizzy", "pepinillo"];

mascotas.pop();
mascotas.push("moimi");

for (let i = 0; i < mascotas.length; i++) {
    console.log(mascotas[i])

}


//CUARTA CONSIGNA

let numero = 10
while (numero < 11 ){
    console.log(numero = "tu numero es más chico que 11");
}