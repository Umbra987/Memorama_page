//Impresion del letrero de "Link copiado" al presionar el boton
let copiarlink = document.querySelector(".bottom_copy");
let textcopiar =  document.querySelector(".linkcopy");
copiarlink.addEventListener('click',()=>{
   textcopiar.classList.add('active');
   setTimeout(()=>{ textcopiar.classList.remove('active');},"2500")
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
let tab = Array.from(document.querySelectorAll('.carta'));
console.log(tab);
//Los clicks llevaran el número de tarjeta en el que fue seleccionado.
var click1,click2;
//contador de click para contar los dos
let contClick=1;
//contador de las parejas
let parejas = 0;
//Generación aleatoria de las iamgenes en el tablero.
var cadena_pos_imaganes =[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
var cadena = ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'];
function mezclador_tarjetas(a){ 
      random = Math.floor(Math.random()*16);
      if(a<16){
         if(cadena_pos_imaganes[random]!='X'){
         cadena[a]=cadena_pos_imaganes[random];
         cadena_pos_imaganes[random]= 'X';
         mezclador_tarjetas(a+1);
         }
         else mezclador_tarjetas(a);
         }
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

function CartUp(valor){
   if(document.querySelector(".cart"+valor).classList.contains('rotation')==true){
      return;
   }
   if(contClick==1 && cadena[valor]!='X'){
      click1=valor;
      document.querySelector(".cart"+valor).classList.add("rotation");
      contClick++;
   }
   else if(contClick==2 && click1!=valor && cadena[valor]!='X') {
      click2=valor;
      document.querySelector(".cart"+valor).classList.add("rotation");
      verificar();
   }
   else if(click1==valor){
      click1,click2=null;
      contClick=1;
   }
   else{
      click1,click2=null;
      contClick=1;
      document.querySelector(".cart"+valor).classList.remove("rotation");
   }
   }
//    Funcion que va a verificar si es par o no
function verificar(){
   if(parejas==7){
      console.log("parejas encontradas:8");
      console.log("Se acabo el juego.");
   }
   else if(parejas<7){
      if(cadena[click1] == cadena[click2]){
         cadena[click1]='X';
         cadena[click2]='X';
         click1,click2=null;
         contClick=1;
         parejas++;
         console.log("parejas encontradas:"+parejas);
      }
      else{
         setTimeout(()=>{
            document.querySelector(".cart"+click1).classList.remove("rotation");
            document.querySelector(".cart"+click2).classList.remove("rotation");
            click1,click2=null;
            contClick=1;
         },"600");
         
      }
   }
}