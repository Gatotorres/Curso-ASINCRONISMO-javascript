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
        if(xhttp.readystate === 4){
        if (xhttp.status === 200){
            callback(null, JSON.parse(xhttp.responseText));
        }}else{
            const error = new Error('Error' + urlApi);
            return callback(error,null);
        }
    xhttp.send();
}