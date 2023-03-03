function saludo(){
    let nombre = prompt("Por favor, ingresa tu nombre:");
    while (nombre === "") {
      nombre = prompt("Por favor, ingresa tu nombre:");
    }
    alert("¡Hola, " + nombre + "!");
}
saludo();
