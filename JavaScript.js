/*
Author: Ing(c) Daniel Rico Palacio
primer Bootcamp "piscina-42" UTP sobre fullstack
Date:2023-01-13
Technologic University of Pereira
*/
//Cuando se abra la pagina se ubicara en el inicio de la pagina
window.onbeforeunload = function (){window.scrollTo(0,0);}
/*
Esta funcion flecha lo que hace es que nos va a servir  para reproducir ciertos audios que son necesarios
dependiendo de lo que suceda en el juego por ejemplo el audio de una pareja o el audio del final.
*/
let music;
const playAudio = (string) => {
   music = new Audio('Audio/' + string + '.mp3')
   music.play();
};


//Impresion del letrero de "Link copiado" al presionar el boton añadiendo o removiendo la clase activo
let copiarlink = document.querySelector(".bottom_copy");
let textcopiar =  document.querySelector(".linkcopy");
copiarlink.addEventListener('click',()=>{
   textcopiar.classList.add('active');
   setTimeout(()=>{ textcopiar.classList.remove('active');},"2500")
});
//Impresion del mismo letrero pero cuando se activa el responsive añadiendo o removiendo la clase activo
let copiarlinkResponsive = document.querySelector(".bottom_copy_responsive");
let textcopiarResponsive =  document.querySelector(".linkcopy_responsive");
copiarlinkResponsive.addEventListener('click',()=>{
   textcopiarResponsive.classList.add('active');
   setTimeout(()=>{ textcopiarResponsive.classList.remove('active');},"2500")
});
//  Juego de Memorama 
let imagenes = [
   "img/parejas-001.png",//Imagen de Maria
   "img/parejas-002.png",//Imagen de José
   "img/parejas-003.png",//Imagen del niño Dios
   "img/parejas-004.png",//Imagen de Melchor
   "img/parejas-005.png",//Imagen de Gaspar
   "img/parejas-006.png",//Imagen de Baltazar
   "img/parejas-007.png",//Imagen de Pastor
   "img/parejas-008.png",//Imagen de la mula y el buey
];
//Los clicks llevaran el número de tarjeta en el que fue seleccionado.
let click1,click2;
let onclik=true;
//contador de click para contar los dos
let contClick=1;
//contador de las parejas
let parejas = 0;
/*Generación aleatoria de las iamgenes en el tablero.
Apartir de la "cadena_pos_imagenes",sus valores son distribuidos de manera aleatoria por la "cadena"
donde cada valor esta dubplicado ya que como son pareja ,se necesitan dos imagenes de cada carta
y deacuerdo al valor se asignara una o otra carta a cada espacio.
*/
var cadena_pos_imaganes =[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
var cadena = ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'];
function mezclador_tarjetas(a){ 
      random = Math.floor(Math.random()*16);
      if(a<16){
         if(cadena_pos_imaganes[random]!='X'){
         cadena[a]=cadena_pos_imaganes[random];
         cadena_pos_imaganes[random]= 'X';
         mezclador_tarjetas(a+1);
         }//fin if
         else mezclador_tarjetas(a);
         }//fin if
}
mezclador_tarjetas(0);
/*
Creacion del tablero al insertar img a los diferentes hijos donde la carta front_card 
tendra la tarjeta cubierta y la  carta back_card tendra la carta descubierta.
*/
function createTab(){
   for(var i=0;i<16;i++){
   document.querySelector(".cart"+ i).lastElementChild.innerHTML="<img src="+imagenes[cadena[i]]+">";
   }
}
createTab();
//  Tablero de cartas
let carta0 = document.querySelector(".cart0");
let carta1 = document.querySelector(".cart1");
let carta2 = document.querySelector(".cart2");
let carta3 = document.querySelector(".cart3");
let carta4 = document.querySelector(".cart4");
let carta5 = document.querySelector(".cart5");
let carta6 = document.querySelector(".cart6");
let carta7 = document.querySelector(".cart7");
let carta8 = document.querySelector(".cart8");
let carta9 = document.querySelector(".cart9");
let carta10 = document.querySelector(".cart10");
let carta11 = document.querySelector(".cart11");
let carta12 = document.querySelector(".cart12");
let carta13 = document.querySelector(".cart13");
let carta14 = document.querySelector(".cart14");
let carta15 = document.querySelector(".cart15");

//Asignacion de valor del click respecto a la carta seleccionada.
/* 
   En esta parte del codigo lo que se hace es a cada carta se le agrega un 
   evento de 'click',pero se le agrega de una manera especial ya que si agregamos
   el evento de manera "carta0.addEventListener('click',CartUp(0));" lo que pasa
   es que no se espera a escuchar el evento sino que ejecuta la función por eso agregamos el 
   evento de la manera "cart0.addEventListener('click',()=>{CartUp(0);});" con una función
   flecha ya que al hacer esto el evento espera a escuchar el 'click' y luego ejecuta lo que
   hay dentro de la función fecha que es la función 'CartUp()' con el valor que necesitemos
   para referenciar la posición de la carta en la cual se hizo click.
*/
carta0.addEventListener('click',()=>{CartUp(0);});
carta1.addEventListener('click',()=>{CartUp(1);});
carta2.addEventListener('click',()=>{CartUp(2);});
carta3.addEventListener('click',()=>{CartUp(3);});
carta4.addEventListener('click',()=>{CartUp(4);});
carta5.addEventListener('click',()=>{CartUp(5);});
carta6.addEventListener('click',()=>{CartUp(6);});
carta7.addEventListener('click',()=>{CartUp(7);});
carta8.addEventListener('click',()=>{CartUp(8);});
carta9.addEventListener('click',()=>{CartUp(9);});
carta10.addEventListener('click',()=>{CartUp(10);});
carta11.addEventListener('click',()=>{CartUp(11);});
carta12.addEventListener('click',()=>{CartUp(12);});
carta13.addEventListener('click',()=>{CartUp(13);});
carta14.addEventListener('click',()=>{CartUp(14);});
carta15.addEventListener('click',()=>{CartUp(15);});

/*
La función CartUp es una función que puede ser llamadas por cualquier carta y esta recibe un valor que
luego se va a usar para ir a la cadena en la posicion que represente el valor entregado,luego de acuerdo al
contador de clicks se da cuenta a que click le tiene que asignar un valor,las dos primeras verificaciones
que hace la funcion es para saber si se puede hacer click dependiendo del valor de "onclick" y la segunda
es para verificar si  en la carta que se dio presion esta o no ya destapada.

Luego realiza una verificación para saber si en la cadena en la posicion valor hay un caracter 'X' si es
asi quiere decir que esa carta ya fue jugada y que aparte es parte de una pareja ya destapada.

La cuarta verificacion lo que hace es verificar que no se este presionando la misma carta con el segundo
click a su vez volviendo a hacer la verificacion en la cadena del anterior if.

Si se esta dando click en la misma carta se pierden los valores de ambos click y el contador de click vuelve
a 1 como si el click no se hubiera perdido.

Ya finalmente si no cumplio ninguna de las anteriores restricciones se le vuelve a dar la vuelta a la carta.
*/
function CartUp(valor){
   if(onclik==false){
      return;
   }
   else{
      if(document.querySelector(".cart"+valor).classList.contains('rotation')==true){
      return;
   }//fin if
      if(contClick==1 && cadena[valor]!='X'){
         click1=valor;
         document.querySelector(".cart"+valor).classList.add("rotation");
         contClick++;
      }//fin if
      else if(contClick==2 && click1!=valor && cadena[valor]!='X') {
         click2=valor;
         document.querySelector(".cart"+valor).classList.add("rotation");
         setTimeout(()=>{verificar();},600);
      }//fin if
      else if(click1==valor){
         click1,click2=null;
         contClick=1;
      }//fin if
      else{
         click1,click2=null;
         contClick=1;
         document.querySelector(".cart"+valor).classList.remove("rotation");
      }//fin else
   }//fin else
   }//fin function
/*    
   Funcion que va a verificar si es par o 
   Esta función lo que hace es recibir los dos  valores de los clicks "click1" y "click2"
   de acuerdo al valor de los click va y revisa a la cadena,alli mira si los dos valores son iguales
   quiere decir que son pareja y en esas mismas posiciones inserta un caracter 'X' para luego saber que ya fueron
   destapadas,ademas mientras verifica desactiva el click poniendo a "onclick=false" en las demas tarjetas para no generar confusion en el cambio 
   con un nuevo valor en alguno de los click.
   Si por el contrario no resultan ser pareja las cartas les remueve la clase "rotation" y vuelven a estar tapadas.
   En ambos casos cuando se termina el proceso el contador de clicks vuelve a 1 para poder seguir jugando.
   */
   let bodyText = document.querySelector(".bodyText");
   let titleText = document.querySelector(".titleText");
function verificar(){
   if(parejas==7){
      music.pause();
      playAudio('correcta');
         window.scroll(0,0);
         cuerpo.style.overflow="hidden";
         parejaFind(cadena[click1]);
         cadena[click1]='X';
         cadena[click2]='X';
         click1,click2=null;
         contClick=1;
         parejas++;
         console.log("parejas encontradas:"+parejas);
         onclik=true;
      document.querySelector(".finalizar").style.display="inline";
      document.querySelector(".Pesebre_buttom").style.display="none";
   }//fin if
   else if(parejas<7){
      onclik=false;
      if(cadena[click1] == cadena[click2]){
         music.pause();
         playAudio('correcta');
         window.scroll(0,0);
         cuerpo.style.overflow="hidden";
         setTimeout(()=>{parejaFind(cadena[click1]);
         cadena[click1]='X';
         cadena[click2]='X';
         click1,click2=null;
         contClick=1;
         parejas++;
         console.log("parejas encontradas:"+parejas);
         onclik=true;
      },300);
      }//fin if
      else{
         music.pause();
         playAudio('incorrecta');
            document.querySelector(".cart"+click1).classList.remove("rotation");
            document.querySelector(".cart"+click2).classList.remove("rotation");
            click1,click2=null;
            contClick=1;
            onclik=true;
      }//fin else
   }//fin if   
}//fin function

//   Intro
/* Este seria la desactivacion del intro atra vez de un boton que su accion es
   apagar el display del div "containerIntro"
*/
let btnempezar = document.querySelector(".start_buttom");
let modal_intro=document.querySelector(".containerIntro");
let cuerpo = document.querySelector("body");
btnempezar.addEventListener('click',()=>{
   cuerpo.style.overflow="visible";
   modal_intro.style.display = "none";
   playAudio('intro');
});
/* Pesebre ventana:Aca es donde esta ubicado el boton que aparece junto con el pescesbre el cual
permite añadir una clase al div del pesebre y con esa clase desactivarlo
*/

let Pesebre = document.querySelector(".containerPesebre");
let btnContinuar = document.querySelector(".Pesebre_buttom");
btnContinuar.addEventListener("click",()=>{
   music.pause();
   cuerpo.style.overflow="visible";
   Pesebre.classList.add("nonePesebre");
});

/*En esta funcion se le entrega el valor de la carta de acuerdo a:
0=Maria
1=Jose
2=Jesus
3=Melchor
4=Gaspar
5=Baltazar
6=Pastor
7=La mula y el buey

De acuerdo al valor se es seleccionado un caso donde con un "innerHTML" se le inserta un objeto HTML
con etiqueta de parrafo y adentro de el su texto correspondiente,luego se reproduce el audio para cada
pareja de cartas,lo siguiente es añadir la clase que tiene la animación de desaparecer y ya que cada animacion
dura 2.5s se pone un setTimeout para esperar el mismo tiempo y final mente con display="none" desaparecer el sticker
que cubria en la imagen,finalmente  revelamos la imagen del pesebre donde se muestra su animacion y la frase de cada pareja.

*/
function parejaFind(valor){
   switch(valor){
      case 0: {
         bodyText.innerHTML="<p>La primera celebración navideña en la que se monto un pesebre para la conmemoración del nacimiento de Jesus,fue en la noche buena del año 1223,realizada por San Francisco de Asís.</p>";
         music.pause();
         playAudio('pareja1');
         document.querySelector('.maria').classList.add("animationActive");
         setTimeout(()=>{document.querySelector('.maria').style.display="none";},3400);
         Pesebre.classList.remove("nonePesebre");
         cuerpo.classList.overflow="hidden";
      }
      break;
      case 1: {
         bodyText.innerHTML="<p>En Ecuador,Mexico,Colombia,Guatemala,El Salvador,Venezuela,Perú,Argentina,Chile y Canarias,la figura del niño Jesus se coloca después de la llegada de la navidad.</p>";
         music.pause();
         playAudio('pareja2');
         document.querySelector('.jose').classList.add("animationActive");
         setTimeout(()=>{document.querySelector('.jose').style.display="none";},3400);
         Pesebre.classList.remove("nonePesebre");
         cuerpo.classList.overflow="hidden";
      }
      break;
      case 2: {
         bodyText.innerHTML="<p>El villancico es un genero de cancion cuya letra hace referencia a la navidad.</p>";
         music.pause();
         playAudio('pareja3');
         document.querySelector('.jesus').classList.add("animationActive");
         setTimeout(()=>{document.querySelector('.jesus').style.display="none";},3400);
         Pesebre.classList.remove("nonePesebre");
         cuerpo.classList.overflow="hidden";
      }
      break;
      case 3: {
         bodyText.innerHTML="<p>El villancico es un genero de cancion cuya letra hace referencia a la navidad.</p>";
         music.pause();
         playAudio('pareja4');
         document.querySelector('.melchor').classList.add("animationActive");
         setTimeout(()=>{document.querySelector('.melchor').style.display="none";},3400);
         Pesebre.classList.remove("nonePesebre");
         cuerpo.classList.overflow="hidden";
      }
      break;
      case 4: {
         bodyText.innerHTML="<p>La palabra Tutaina es utilizada en Perú para referirse coloquialmente a una fiesta pequeña,por lo que el titulo de este villancico se refiere a la celebración de la tradicional novena de aguinaldos.</p>";
         music.pause();
         playAudio('pareja5');
         document.querySelector('.gaspar').classList.add("animationActive");
         setTimeout(()=>{document.querySelector('.gaspar').style.display="none";},3400);
         Pesebre.classList.remove("nonePesebre");
         cuerpo.classList.overflow="hidden";
      }
      break;
      case 5: {
         bodyText.innerHTML="<p>A la nanita nana es un villancico compuesto por Geremías Quintero,oriundo de barbacoas,Nariño.</p>";
         music.pause();
         playAudio('pareja6');
         document.querySelector('.baltazar').classList.add("animationActive");
         setTimeout(()=>{document.querySelector('.baltazar').style.display="none";},3400);
         Pesebre.classList.remove("nonePesebre");
         cuerpo.classList.overflow="hidden";
      }
      break;
      case 6: {
         bodyText.innerHTML="<p>A las novenas se les llama \"Las Posadas\" y son fiestas populares en Mexico,Honduras,Guatemala,El Salvador,Costa Rica,Nicaragua y Panamá.</p>";
         music.pause();
         playAudio('pareja7');
         document.querySelector('.pastor').classList.add("animationActive");
         setTimeout(()=>{document.querySelector('.pastor').style.display="none";},3400);
         Pesebre.classList.remove("nonePesebre");
         cuerpo.classList.overflow="hidden";
      }
      break;
      case 7: {
         bodyText.innerHTML="<p>En las posadas cada uno de los nueve dias representa un valor,como humildad,fortaleza,desapego,caridad,confianza,justicia,pureza,alegria y generosidad.</p>";
         music.pause();
         playAudio('pareja8');
         document.querySelector('.mulaBuey').classList.add("animationActive");
         setTimeout(()=>{document.querySelector('.mulaBuey').style.display="none";},3400);
         Pesebre.classList.remove("nonePesebre");
         cuerpo.classList.overflow="hidden";
      }
      break;
      default: console.log("ayuda");
   }
}

/* Le asignamos al boton .finalizar para que muestre el pescebre final cambiando el titulo ,apagando el mismo boton .finalizar y el cuerpo .bodyText para luego remover la clase noneFinal 
haciendo que su display se encienda.
*/
let finalizar = document.querySelector(".finalizar");
finalizar.addEventListener("click",()=>{
   music.pause();
   playAudio('final');
   titleText.innerHTML="<h2>Armaste tu pesebre</h2>";
   document.querySelector(".reset").classList.remove("noneFinal");
   document.querySelector(".bodyText_Final").classList.remove("noneFinal");
   document.querySelector(".footer_final").classList.remove("noneFinal");
   bodyText.style.display="none";
   finalizar.style.display="none";
});
/*
Asignación al boton .reset para recargar la pagina y volver a empezar el juego. 
 */
let Again = document.querySelector(".reset");
Again.addEventListener("click",()=>{
   location.reload();
});
