//estoy creando este archivo en 
//particular para llevar las clases del curso en un repositorio github

//el problema que queria documentar es particularmente en la clase EventLoop

//donde se nos muestra una secuencia de funciones para mostrar
//el asincronismo y los elementos síncronos.

//*Este codigo es de un programa que no funcionaa. es solo ejemplificador:

$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");

//PRIMERO LA EXPLICACION DEL CODIGO

//SEGUNDO, LO QUE YO VEO RARO.

//Segun vimos en el codigo primero se imprime en consola 'Hi'
//Pero inmediatamente a nosotros hacer click se ejectua el timer()
//que imprimira el console.log('You clicked the button'); luego de 2 segundos
//POR LO QUE SE DEBERÍA IMPRIMIR EN CONSOLA, 
//antes o despues del mensaje asíncrono console.log("Welcome to loupe.");
// pero SEGURO que antes que se imprima el  console.log("Click the button!");