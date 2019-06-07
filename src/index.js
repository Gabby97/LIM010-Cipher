//Variable de las hojas 
const hojaUno = document.getElementById('hoja-uno');
const hojaDos = document.getElementById('hoja-dos');
const hojaTres = document.getElementById('hoja-tres');
const hojaCuatro = document.getElementById('hoja-cuatro');

//variable  de mis botones
const boton2 = document.getElementById('button2');
const boton3 = document.getElementById('button3');
const boton4 = document.getElementById('button4');
const inputPassword = document.getElementById('pw');
const btnIngresar = document.getElementById('check');
const btnEjecutar = document.getElementById('ejecutar');
const btnRegresar = document.getElementById('regresar');
const btnEjecutar1 = document.getElementById('ejecutar1');
const btnRegresar1 = document.getElementById('regresar1');

let contador = 0;

btnIngresar.addEventListener('click', () => {
    if (contador < 3) {
        if (inputPassword.value == 'LABORATORIA') {
            alert('Hola! Bienvenido');
            document.getElementById('hoja-uno').style.display = 'none';
            document.getElementById('hoja-dos').style.display = 'block';
        } else {
            alert('Contraseña incorrecta, Vuelve a intentarlo');
            contador++;
        }
    } else {
        
        /*alert('Contraseña incorrecta, Vuelve a intentarlo');*/
        alert('Ya utilizaste todos tus intentos, en este momento no podrás ingresar');
    }
});


boton2.addEventListener('click', () => {
           document.getElementById('hoja-uno').style.display = 'block';
           document.getElementById('hoja-dos').style.display = 'none';
});

boton3.addEventListener('click', () => {
           document.getElementById('hoja-dos').style.display = 'none';
           document.getElementById('hoja-tres').style.display = 'block';
})

boton4.addEventListener('click', () => {
           document.getElementById('hoja-dos').style.display = 'none';
           document.getElementById('hoja-cuatro').style.display = 'block';
})

btnRegresar.addEventListener('click', () =>{
           document.getElementById('hoja-tres').style.display = 'none';
           document.getElementById('hoja-dos').style.display = 'block';
})
/*btnEjecutar1.addEventListener('click', () => {
           document
})*/
btnRegresar1.addEventListener('click', () => {
          document.getElementById('hoja-cuatro').style.display = 'none';
          document.getElementById('hoja-dos').style.display = 'block';
})





//Funcion que dispara el login
/*document.getElementById('hoja-uno').style.display ='block';
document.getElementById('hoja-dos').style.display ='none';
document.getElementById('hoja-tres').style.display='none';
document.getElementById('hoja-cuatro').style.display='none';*/


/*boton1.addEventListener('click', function (){
hojaDos.style.display = 'block';
hojaTres.style.display = 'none';
});

//funcion que retrocede al dar return
boton2.addEventListener('click', function(){
    hojaDos.style.display ='none';
    hojaUno.style.display ='block';

});

//Funcion que elecciones de code or decode

boton3.addEventListener('click', function (){
    hojaDos.style.displace = 'none';
    hojaTres.style.displace = 'block';
})*/

