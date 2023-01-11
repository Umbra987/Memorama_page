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
   "img/parejas-001.png",
   "img/parejas-002.png",
   "img/parejas-003.png",
   "img/parejas-004.png",
   "img/parejas-005.png",
   "img/parejas-006.png",
   "img/parejas-007.png",
   "img/parejas-008.png",
];

//Generación aleatoria de las iamgenes en el tablero.
var cadena_pos_imaganes =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
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