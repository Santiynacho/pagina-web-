//Datos 
const nombre= "traco"
const clave ="1234567"
//Capturamos la informacion del DOM.
let nomIng= document.getElementById("usuario");
let claveIng= document.getElementById("contraseña");
let boton= document.getElementById("btn-ingresar");
// Escuchamos el evento 
boton.addEventListener(click, funtion(), {
 alert(nomIng.value);
});