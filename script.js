//Suavização do scroll
 $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

let Hamburguer = document.querySelector(".hambuguer");
let Sidebar = document.querySelector(".container");

Hamburguer.addEventListener("click" , () =>{
    Sidebar.classList.toggle("change");
})

function fecharMenu(){
    Sidebar.className = Sidebar.className.replace(" change","");
}









var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
loop();
function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
      
    } else {
      
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time


// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}







// let logoRobofoguete = document.getElementById("Logo-robo-foguete");
// let chatRobo = document.getElementById("chat-robo");
// window.addEventListener("scroll" , function() {
//     let value = window.scrollY;
//     let opacity;
//      logoRobofoguete.style.left = value * .5 + "px";

// });




let imgAtual = 0;
  let tempoTroca = 0;
  let Intervalo = 300;

function inicia(){
  slide = document.getElementsByClassName("slide");
  pontoIndicador = document.getElementsByClassName("ponto-indicador-slide");
 carregaImg(imgAtual);
 tempo();
}


function carregaImg(img){
  for(let i = 0; i < slide.length; i++){
     slide[i].style.display = "none";
     pontoIndicador[i].className = pontoIndicador[i].className.replace("ativo","");
  }
  slide[img].style.display = slide[img].style.display.replace("none","");
  pontoIndicador[img].className += " ativo";
}

function troca(n){
  tempoTroca = 0;
  imgAtual+=n;
  if(imgAtual > slide.length-1){
    imgAtual = 0;
  }
  if(imgAtual < 0){
    imgAtual = slide.length-1;
  }
  
  carregaImg(imgAtual);
}

function tempo(){
  tempoTroca++;
  if(tempoTroca >= Intervalo){
      tempoTroca = 0;
      troca(1); //sempre vai receber 1 para passar para a prox imagem
  }
  window.requestAnimationFrame(tempo);
}

function TrocaIndicador(img){
  imgAtual = img;
  tempoTroca = 0;
  carregaImg(imgAtual);
}



window.addEventListener("load",inicia);  //chama a função inicia quando carrega a pagina






















  

