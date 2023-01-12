//Impresion del letrero de "Link copiado" al presionar el boton

let copiarlink = document.querySelector(".bottom_copy");
let textcopiar =  document.querySelector(".linkcopy");
copiarlink.addEventListener('click',()=>{
   textcopiar.classList.add('active');
   setTimeout(()=>{ textcopiar.classList.remove('active');},"2500")
});

//-----------------------------------------------------------------

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

/*Creacion del tablero al insertar img a los diferentes hijos donde la carta front_card 
tendra la tarjeta cubierta y la  carta back_card tendra la carta descubierta.
*/
function createTab(){
   for(var i=0;i<16;i++){
      document.querySelector(".cart"+ i).firstElementChild.innerHTML="<img src="+"img/tarjeta_cubierta.png"+">";
      document.querySelector(".cart"+ i).lastElementChild.innerHTML="<img src="+imagenes[cadena[i]]+">";
   }
}
createTab();
//------tablero de cartas-----------
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
carta0.addEventListener('click',()=>{
   if(contClick==1){
      click1=0;
      carta0.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=0;
      carta0.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});
carta1.addEventListener('click',()=>{
   if(contClick==1){
      click1=1;
      carta1.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=1;
      carta1.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});carta2.addEventListener('click',()=>{
   if(contClick==1){
      click1=2;
      carta2.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=2;
      carta2.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});carta3.addEventListener('click',()=>{
   if(contClick==1){
      click1=3;
      carta3.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=3;
      carta3.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});
carta4.addEventListener('click',()=>{
   if(contClick==1){
      click1=4;
      carta4.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=4;
      carta4.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});
carta5.addEventListener('click',()=>{
   if(contClick==1){
      click1=5;
      carta5.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=5;
      carta5.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});
carta6.addEventListener('click',()=>{
   if(contClick==1){
      click1=6;
      carta6.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=6;
      carta6.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});
carta7.addEventListener('click',()=>{
   if(contClick==1){
      click1=7;
      carta7.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=7;
      carta7.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});
carta8.addEventListener('click',()=>{
   if(contClick==1){
      click1=8;
      carta8.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=8;
      carta8.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});
carta9.addEventListener('click',()=>{
   if(contClick==1){
      click1=9;
      carta9.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=9;
      carta9.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});carta10.addEventListener('click',()=>{
   if(contClick==1){
      click1=10;
      carta10.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=10; 
      carta10.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});
carta11.addEventListener('click',()=>{
   if(contClick==1){
      click1=11;
      carta11.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=11;
      carta11.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});
carta12.addEventListener('click',()=>{
   if(contClick==1){
      click1=12;
      carta12.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=12;  
      carta11.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});
carta13.addEventListener('click',()=>{
   if(contClick==1){
      click1=13;
      carta13.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=13;
      carta13.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});
carta14.addEventListener('click',()=>{
   if(contClick==1){
      click1=14;
      carta14.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=14;
      carta14.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});
carta15.addEventListener('click',()=>{
   if(contClick==1){
      click1=15; 
      carta15.innerHTML="<img src="+imagenes[cadena[click1]]+">";
      contClick++;
   }
   else if(contClick==2) {
      click2=15;
      carta15.innerHTML="<img src="+imagenes[cadena[click2]]+">";
      verificar();
   }
});

//-------Funcion que va a verificar si es par o no------
function verificar(){
   if(parejas==7){
      console.log("parejas encontradas:8");
      console.log("Se acabo el juego.");
   }
   else{
      if(cadena[click1]!='X' && cadena[click2]!='X' && cadena[click1] == cadena[click2]){
         cadena[click1]='X';
         cadena[click2]='X';
         click1,click2=null;
         contClick=1;
         parejas++;
         console.log("parejas encontradas:"+parejas);
      }
      else{
         setTimeout(()=>{
           if(cadena[click1]!='X')tab[click1].ninerHTML="<img src="+"img/tarjeta_cubierta.png"+">";
           if(cadena[click2]!='X')tab[click2].innerHTML="<img src="+"img/tarjeta_cubierta.png"+">";
           click1,click2=null;
            contClick=1;
         },"500");
         
      }
   }
}