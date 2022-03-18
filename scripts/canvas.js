var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");

function crearTableroDeJuego() {
  pincel.fillStyle = "black";
  pincel.lineWidth = 10;

 //++++++++++++++++++++  HORCA  +++++++++++++++++++++++++++++++++++++++++++++++
    //palo vertical horca
    pincel.fillRect(100,50,10,400);
    //palo horizontal horca
    pincel.fillRect(100,50,200,10);   
    //base horca
    pincel.fillRect(30,400,150,150);
    //palo cabeza horca
    pincel.fillRect(300,50,10,50);
// +++++++++++++++++++++++ FIN HORCA ++++++++++++++++++++++++++++++++++++++++++++++++
}

//++++++++++++++ CABEZA  ++++++++++++++++++++++++++++++++++++++++++++++++++++++
function dibujarCabeza(x, y, radio, color) {

  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2*3.14);
  pincel.fill();
}

//+++++++++++++++++++FIN CABEZA +++++++++++++++++++++++++++++++++++++

                              //++++++++++++++ CUERPO  ++++++++++++++++++++++++++++++++++++++++++++++++++++++
                              function dibujarCuerpo() {
                                  pincel.lineJoin = "round";

                                  pincel.fillRect(290,150,30,200);
                              }
                              //+++++++++++++++++++FIN CCUERPO +++++++++++++++++++++++++++++++++++++

//++++++++++++++ PIERNA IZQUIERDA  ++++++++++++++++++++++++++++++++++++++++++++++++++++++
function dibujarPiernaI() {


pincel.beginPath();
pincel.lineWidth = 10;
pincel.strokeStyle = "black";
pincel.moveTo(295,348);
pincel.lineTo(250,450);
pincel.stroke();
}

//+++++++++++++++++++FIN PIERNA IZQUIERDA +++++++++++++++++++++++++++++++++++++

                                  //++++++++++++++ PIERNA DERECHA  ++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                  function dibujarPiernaD() {


                                      pincel.beginPath();
                                      pincel.lineWidth = 10;
                                      pincel.strokeStyle = "black";
                                      pincel.moveTo(315,348);
                                      pincel.lineTo(365,450);
                                      pincel.stroke();
                                  }

                                  //+++++++++++++++++++FIN PIERNA DERECHA +++++++++++++++++++++++++++++++++++++



//++++++++++++++ BRAZO IZQUIERDO  ++++++++++++++++++++++++++++++++++++++++++++++++++++++
function dibujarBrazoI() {
pincel.fillRect(200,200,100,10); 


                                     
}
//+++++++++++++++++++FIN BRAZO IZQUIERDA +++++++++++++++++++++++++++++++++++++

                                          //++++++++++++++ BRAZO DERECHO  ++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                          function dibujarBrazoD() {
                                              pincel.fillRect(310,200,100,10); 
                                          
                                             
                                                                                     
                                          }

                                          //+++++++++++++++++++FIN BRAZO DERECHO +++++++++++++++++++++++++++++++++++++

function dibujarHorca(errores) {
  pincel.fillStyle = "black";
  pincel.lineWidth = 7;

  if (errores >= 1) {
    dibujarCabeza(305, 130, 40, "black");
  }

  if (errores >= 2) {
    dibujarCuerpo();
  }

  if (errores >= 3) {
   dibujarPiernaI();
  }

  if (errores >= 4) {
    dibujarPiernaD();
  }

  if (errores >= 5) {
    dibujarBrazoI();
  }

  if (errores >= 6) {
   dibujarBrazoD();
  }
}

function dibujarLetraPalabra(tecla, posicion) {
  pincel.font = "50pt comic";
  pincel.fillStyle = "black";
  pincel.fillText(tecla, 360 + posicion * 80, 700);
}

function dibujarGanaste() {
  pincel.font = "60pt comic";
  pincel.fillStyle = "green";
  pincel.fillText("¡Ganaste!", 730, 200);
}

function dibujarPerdiste() {
  pincel.font = "60pt comic";
  pincel.fillStyle = "red";
  pincel.fillText("¡Perdiste!", 730, 200);
}

function dibujarPalabraSecreta(palabra) {
  palabraA = palabra.join("");
  console.log(palabra);
  pincel.font = "25pt comic";
  pincel.fillStyle = "blue";
  pincel.fillText("La palabra era: " + palabraA, 750, 300);
}

function dibujarletasIncorrectas(letra, errores) {
  pincel.font = "40pt comic";
  pincel.fillStyle = "red";
  pincel.fillText(letra, 790 + errores * 50, 400);
}

crearTableroDeJuego();
