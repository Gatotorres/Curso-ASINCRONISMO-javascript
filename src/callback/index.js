//Los CALLBACKS
//son funciones que en sus párametros llaman a otras funciones
console.group('Primer Ejemplo ASINCRONISMO del curso')

//APARENTEMENTE el codigo que vi en la primer clase es un CALLBACK
//estoy creando este archivo en 
//particular para llevar las clases del curso en un repositorio github

//el problema que queria documentar es particularmente en la clase EventLoop

//donde se nos muestra una secuencia de funciones para mostrar
//el asincronismo y los elementos síncronos.

//*Este codigo es de un programa que "no funcionaa" es solo ejemplificador:

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

//
//PRIMERO LA EXPLICACION DEL CODIGO
//
//debería de devolver un codigo sincrono, pero
// en la explicacion y demostracion del profesor, nunca
// muestran el mensaje del console.log('You clicked the button!');


//
// POR ESO SEGUNDO, LO QUE YO VEO RARO.
//

//Segun vimos en el codigo primero se imprime en consola 'Hi'
//Pero inmediatamente a nosotros hacer click se ejectua el timer()
//que imprimira el console.log('You clicked the button'); luego de 2 segundos
//POR LO QUE SE DEBERÍA IMPRIMIR EN CONSOLA, 
//antes o despues del mensaje asíncrono console.log("Welcome to loupe.");
//Casi seguramente antes,pero SEGURO que antes
// que se imprima el  console.log("Click the button!");
//Debería de imprimirse console.log('You clicked the button!');

//en fin que eso el profe no lo explica y no se ve bien/correctamente.
console.groupEnd('Primer Ejemplo ASINCRONISMO del curso')


console.group('Primer ejemplo CallBack')

//
function sum(num1,num2){
    return num1 +num2;
}
function calc(num1,num2, callback){
    return callback(num1,num2);
}
console.log(calc(2,2,sum));

//4


console.groupEnd('Primer ejemplo CallBack')

//Ahora veremos como los setTimeout son CALLBACKS
//dichos trabajan POR LO VISTO con dos parametros

console.group('setTimeout Segundo ejemplo CallBack')

setTimeout(function () {
    console.log('Hola Javascript');
}, 5000);

//Hola Javascript
//[Done] exited with code=0 in 5.174 seconds
//Correctamente nos devuelve el resultado luego de 5000segundos

function gretting(name1) {
    console.log(`Hola ${name1}`);
}
setTimeout(gretting,2000,'Nahuel');


//hola Nahuel
//Hola Javascript
//[Done] exited with code=0 in 2.159 seconds
//Correctamente nos devuelve el resultado nahuel luego de 2000segundos
//y el resultado javascript luego de 5000segundos totales desde que son
//ejecutadas casi al mismo tiempo 
console.groupEnd('setTimeout Segundo ejemplo CallBack')


console.group('setTimeout Tercer ejemplo CallBack')

//en este ejemplo de callback, profundizamos, ejemplificando
//varias funciones que podrian responder resultados diferentes a partir de una
//misma llamada y un mismo input.

function sum(num1,num2){
    return num1 + num2;
}
function rest(num1,num2){
    return num1 - num2;
}
function mult(num1,num2){
    return num1 * num2;
}
function div(num1,num2){
    return num1 / num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2)
}
console.log(calc(7,3,mult));
console.log(calc(8,4,div));
//21
//2

//Entonces solo llamando calc e introduciendo
// los parametros en su orden correspondiente, podemos llamar
//recursivamente la funcion haciendo mas facil el trabajar con codigo


console.groupEnd('setTimeout Tercer ejemplo CallBack')


console.group('Playground Cuarto ejemplo CallBack')

//en esta clase tuvimos al playground, donde nos pedian
//una funcion cualquiera que devolviera algo luego de dos segundos 
//de haber sido ejecutada, tambien nos recomienda utilizar
//debes usar la función setTimeout, pero para ejecutarla debes 
//llamarla mediante el namescpace window para poder monitorear 
//su uso en la ejecución de pruebas

/*
    window.setTimeout(() => {
     // code
    })
*/

function execCallback(callback) {
    window.setTimeout(callback,2000)
  }
  console.log(execCallback('hola'));

console.groupEnd('Playground Cuarto ejemplo CallBack')
