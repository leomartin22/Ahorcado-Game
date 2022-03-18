var botonIniciarJuego = document.querySelector("#iniciar-juego");
var nuevaPalabra = document.querySelector("#input-nueva-palabra");
var btnpalabra = document.querySelector("#nueva-palabra");

var btnAgregar = document.querySelector("#nueva-palabra");
btnAgregar.onclick = agregarPalabra;

var listaPalabrasSecretas = [  "VACA",  "OSO",  "OVEJA",  "BUHO",  "BURRO",  "VENADO",  "CONEJO",  "CHIVO",  "COCODRILO",  "MURCIELAGO",  "DINOSAURIO",  "FOCA",  "RATON",  "IGUANA",];

botonIniciarJuego.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo(0, 320);
  nuevaPalabra.disabled=true;
  btnpalabra.disabled=true;
  var palabra = seleccionarPalabraSecreta(listaPalabrasSecretas);  
  crearGuiones(palabra);
  var aciertos = 0;
  var intentos = 0;
  verificarTecla(palabra, aciertos, intentos);
});

function seleccionarPalabraSecreta(lista) {
  var numeroAleatorio = Math.floor(Math.random() * lista.length); //entero con menor valor
  var palabraAleatoria = lista[numeroAleatorio];
  var palabraSecreta = palabraAleatoria.split("");
  return palabraSecreta;
}

function validarPalabra(palabra) {
  var exito = true;
  var palabra = palabra.toUpperCase();
  for (let i = 0; i < palabra.length; i++) {
    var codigo = palabra[i].charCodeAt(0);
    if (!(codigo > 64 && codigo < 91) || palabra.trim().length == 0) {
      alert(
        "Por favor no ingrese palabras con acento o caracteres especiales o números"
      );
      exito = false;
      break;
    }
  }
  return exito;
}

function agregarPalabra() {
  var palabra = nuevaPalabra.value.toUpperCase().trim();
  if (palabra.length >= 2) {
    if (listaPalabrasSecretas.indexOf(palabra) >= 0) {
      alert("La palabra ya existe");
      return;
    }
    if (validarPalabra(palabra)) {
      listaPalabrasSecretas.push(palabra);
      console.log(listaPalabrasSecretas);
      alert("¡Palabra agregada!");
      nuevaPalabra.value = "";
    }
  } else {
    alert("La palabra debe tener al menos 2 letras");
  }
}

function crearGuiones(palabra) {
  for (i = 0; i < palabra.length; i++) {
    pincel.beginPath();
    pincel.moveTo(360 + i * 80, 720);
    pincel.lineTo(420 + i * 80, 720);
    pincel.closePath();
    pincel.stroke();
  }
}

function verificarTecla(palabra, aciertos, intentos) {
  document.addEventListener("keydown", (event) => {
    var teclaPresionada = event.key;
    var valido = validarPalabra(teclaPresionada);

    if (valido) {
      teclaValida = teclaPresionada.toUpperCase();
      intentos = intentos + 1;
      console.log("intentos: " + intentos);
      for (i = 0; i < palabra.length; i++) {
        if (palabra[i] == teclaValida) {
          dibujarLetraPalabra(teclaValida, i);
          aciertos = aciertos + 1;
          console.log("aciertos: " + aciertos);
          var exito = true;
          if (aciertos == palabra.length) {
            dibujarGanaste();
            document.removeEventListener("keydown", event);
          }
        }
      }

      if (exito) {
        letrasCorrectas.push(teclaValida);
        console.log("letras correctas: " + letrasCorrectas);
      }

      var errores = intentos - aciertos;
      console.log("errores: " + errores, "intentos:" + intentos);
      dibujarHorca(errores);
      dibujarletasIncorrectas(teclaValida, errores);
      console.log("palabra incorrecta: " + teclaValida);

      if (errores > 6) {
        dibujarPerdiste();
        dibujarPalabraSecreta(palabra);
      }
    }
  });
}
