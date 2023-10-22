//Vamos a hacer nuestro primer llamado a una api
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//acá utilizamos require()
// esto es debido a que utilizaremos este recurso, el cual
//anteriormente habiamos descargado con -> npm i xmlhttprequest
// y lo metemos dentro de dicho require()

const API = 'https://api.escuelajs.co/api/v1/products';

//guardamos el link de la API a la que le pediremos los datos
//lo raro que encuentro en esto, es que luego no volveremos 
//hacer referencia a esta variable, en cambio usamos urlApi 

function fetchData(urlApi,callback){
    let xhttp = new XMLHttpRequest(); //AQUI creamos un objeto vacío utilizando
    //el crecurso que descargamos, para poder utilizarlo como tal, como objeto.
    //y de esta forma manupular la petición. ahora lo llamaremos recursivamente
    //con los estados y poniendole funciones utilizando dicha logica
    xhttp.open('GET',urlApi,true);
        //El metodo .open() realiza la petición de apertura de comunicación,
        // mi código con la API, utilizaremos 'GET' luego se envia la urlApi,
        // si es asincrono es true.
        xhttp.onreadystatechange = function(event){
        //en particular .onreadystatechange tiene un ciclo de vida
        //de 5 estados de un llamado xmlhtpprequest. el 0,1,2,3 y 4.
        if(xhttp.readystate === 4){ //*"NÚMEROS MÁGICOS" porque estan sin referencia
        //cuando el onreadystatechange cambia, 
        // le preguntamos si el estado es exactamente 4
        if (xhttp.status === 200){ //*"NÚMEROS MÁGICOS" porque estan sin referencia
        //entonces solo si el estado es 4, le volvemos a preguntar
        //si el estado del status es exactamente 200, lo que significaría
        //que fue recibida, acetpada, procesada correctamente
            callback(null, JSON.parse(xhttp.responseText));
        //ahora le decimos que al texto que recíbamos, lo pasemos/transformemos
        //en un JSON. Poreso el JSON.parse. y no se porque el primer
        //argumento de callback es null
        }}else{
        //ahora manejaremos el error en caso de recibir uno
            const error = new Error('Error' + urlApi);
        //esta linea nos devolverá una forma de manejar el error
        //poniendola dentro de un constructor de objetos new, seguido de ERROR
        //entre los parentesise le pedimos el link del error para poder leerlo
            return callback(error,null);
        //
        }
    xhttp.send();
    //el método .send() envia la petición al servidor
}