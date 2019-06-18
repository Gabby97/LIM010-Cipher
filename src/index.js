//Variable de las hojas 
const vistaUno = document.getElementById('vista-Uno');
const vistaDos = document.getElementById('vista-Dos');
const vistaTres = document.getElementById('vista-Tres');
const vistaCuatro = document.getElementById('vista-Cuatro');

//variable  de mis botones
const btnLogin = document.getElementById('check');
const btnReturn = document.getElementById('btn-Return');
const btnElegir = document.getElementById('btn-Elegir');
const btnElegir1 = document.getElementById('btn-Elegir1');
const btnPassword = document.getElementById('pw');
const btnRegresar = document.getElementById('regresar');
const btnRegresar1 = document.getElementById('regresar1');

let contador = 0;

btnLogin.addEventListener('click', () => {
    if (contador < 3) {
        if (btnPassword.value === 'LABORATORIA') {
            alert('Hola! Bienvenido');
            vistaUno.classList.add('ocultar');
            vistaDos.classList.replace('ocultar', 'mostrar');
        } else {
            alert('Contraseña incorrecta, Vuelve a intentarlo');
            contador++;
        }
    } else {
        alert('Ya utilizaste todos tus intentos, en este momento no podrás ingresar');
    }
});

/*btnLogin.addEventListener('keyup', (enter) => {
    if (event.keycode === 13) {
        enter.preventDefault ();
        document.getElementById('check').click();
    }

});*/




btnReturn.addEventListener('click', () => {
    vistaDos.classList.add('ocultar');
    vistaUno.classList.remove('ocultar', 'mostrar');
});

btnElegir.addEventListener('click', () => {
    vistaDos.classList.add('ocultar');
    vistaTres.classList.remove('ocultar', 'mostrar');
});

btnElegir1.addEventListener('click', () => {
    vistaDos.classList.add('ocultar');
    vistaCuatro.classList.remove('ocultar', 'mostrar');
});

btnRegresar.addEventListener('click', () => {
    vistaTres.classList.add('ocultar');
    vistaDos.classList.remove('ocultar', 'mostrar');
});
/*btnEjecutar1.addEventListener('click', () => {
           document
})*/
btnRegresar1.addEventListener('click', () => {
    vistaCuatro.classList.add('ocultar');
    vistaDos.classList.remove('ocultar', 'mostrar');
});
//variable para el cifrado  

//const textCifra = document.getElementById('text-cifra');
//const numero1 = document.getElementById('numro');
const bbtnEjecutar = document.getElementById('ejecutar');
//const cifrado = document.getElementById('text-result');

bbtnEjecutar.addEventListener('click', () => {
    const textCifra = document.getElementById('text-cifra').value;
    const numero1 = document.getElementById('numro').value;
    const resultado = cipher.encode(numero1, textCifra);

    document.getElementById('text-result').innerHTML = resultado;
});
// variable para el descifrado
const bbtonEjecutar = document.getElementById('ejecutar1');

bbtonEjecutar.addEventListener('click', () => {
    const textoCifrado = document.getElementById('texto-cifrado').value;
    const numero2 = document.getElementById('numero').value;
    const resultado = cipher.decode(numero2, textoCifrado);

    document.getElementById('tex-resultado').innerHTML = resultado;


});
