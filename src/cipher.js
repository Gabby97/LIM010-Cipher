
window.cipher = {
  encode: (offset, string) => {
    let resultado = ''; // alamacena el valor cifrado
    for (let i = 0; i < string.length; i++){ // recorre el string del usuario
      let numAscii = string.charCodeAt(i); // numero dde letra en el codigo  Ascii
      let letraCifra; // almacena fórmula de cifrado que se utiliza
      let nuevaCifra; // nueva letra cifrada
      if (numAscii >= 65 && numAscii <= 90){ // letras mayusculas 
        letraCifra = (numAscii -  65 + parseInt(offset)) % 26 + 65 ; // obtener nuevo numero de letra Asci 
        nuevaCifra = String.fromCharCode(letraCifra); // valor de la letra cifrada
        resultado += nuevaCifra; // strin Cifrado
      }
      else if(numAscii === 32){
            resultado += ' ';
      }
    }
    return resultado;
  },
  decode: (offset, string) => {
    let resultado = ''; // alamacena el valor descifrado
    for (let i = 0; i < string.length; i++){ // recorre el string del usuario
      let numAscii = string.charCodeAt(i); // numero dde letra en el Ascii
      let letraCifra; // almacena fórmula de cifrado que se utiliza
      let nuevaCifra; // nueva letra descifrada 
      if (numAscii <= 90 && numAscii >= 65){ // letras mayusculas 
        letraCifra = (numAscii - 90 - parseInt(offset)) % 26 + 90 ; // obtener nuevo numero de letra Asci 
        nuevaCifra = String.fromCharCode(letraCifra); // valor de la letra descifrada
        resultado += nuevaCifra; // strin descifrado

      }
      else if(numAscii === 32){
        resultado += ' ';
  }
    }
    return resultado;

     }
  };

