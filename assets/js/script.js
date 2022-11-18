//3.1  

// const ele = document.getElementById("ele1");

// function pintar(elemento){
//     ele.style.backgroundColor = 'yellow'
//     }
  
// ele.addEventListener("click", pintar);



//3.2
 
const ele = document.getElementById("ele1");

function pintar(elemento, color ="green") {
     elemento.style.backgroundColor = color
 }

ele.addEventListener("click", ()=>{
     pintar(ele,"yellow")
 });

