//Impresion del letrero de "Link copiado" al presionar el boton

let copiarlink = document.querySelector(".bottom_copy");
let textcopiar =  document.querySelector(".linkcopy");
copiarlink.addEventListener('click',()=>{
   textcopiar.classList.add('active');
   setTimeout(()=>{ textcopiar.classList.remove('active');},"2500")
});

//-----------------------------------------------------------------