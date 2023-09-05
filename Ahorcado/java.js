let letrasContainer = document.querySelector(".letras-container");
let botonInicio = document.querySelectorAll(".botonInicio");
let newGame = document.querySelector(".newGame");
let palabraEscondida = document.querySelector(".palabra .escondida");
let btnAnimales = document.querySelector("#btn1");
let btnPaises = document.querySelector("#btn2");
let btnFrutas = document.querySelector("#btn3");
let index = document.querySelector(".j");
let vidas = document.querySelector(".vidas span");
let rayita = document.querySelector(".rayita");
let imageness = document.querySelector(".imageness");




let letras = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let palabras = {
           paises:[  "uruguay","brasil","argelia","alemania","portugal","italia","peru","nigeria","australia","belgica"],
           animales:["perro","gato","lobo","leon","rinoceronte","elefante","tortuga","tiburon","ballena","jirafa"],
           frutas:["manzana","banana","limon","uva","naranja","kiwi","granada","sandia","melon","frutilla"] }



botonInicio.forEach(element => {
element.addEventListener("click", function(){

    document.querySelector(".botones").remove()
    newGame.insertAdjacentHTML("beforeend",`<button class="botonNuevo">New Game</button>`);
    document.querySelector(".botonNuevo").addEventListener("click",function(){
        window.location.reload()
    })

})
})



let numero = 0;
numero = numero + 1;

for(let i = 0; i < letras.length; i++)
letrasContainer.insertAdjacentHTML("beforeend",`<div style="display:none" class="letritas item${numero}"><button class="btnLetras l${numero}"><p>${letras[i]}</p></button></div>`);


let botonLetras = document.querySelectorAll(`.l${numero}`);

let contador = 0;


botonLetras.forEach(element => {
    element.addEventListener("click",function(e){
        let letraElegida = e.target.innerText;
        let todasLetras = document.querySelectorAll(".i");
        
       
            todasLetras.forEach(elemento =>{
            if(elemento.innerText == letraElegida){
                elemento.style.color = "rgba(255, 120, 3, 0.936)";
                contador = contador + 1;
                if(contador == todasLetras.length ){
                    setTimeout(() =>{
                    alert("Ganaste!!!")
                },300);
                }

            }  
            
            })
            let num = Array.from(todasLetras)
            if(!num.some(elemento => elemento.innerText == letraElegida)){
                vidas.innerHTML = parseInt(vidas.innerHTML) - 1}
            
                if(vidas.innerHTML == 0){
                    imageness.src = "imagenes/6.png"
                    setTimeout(() =>{
                    alert("Perdiste !!")
                    window.location.reload()
                },400);
                    }else if(vidas.innerHTML == 5){
                        imageness.src = "imagenes/1.png"
                    }
                    else if(vidas.innerHTML == 4){
                        imageness.src = "imagenes/2.png"
                    }
                    else if(vidas.innerHTML == 3){
                        imageness.src = "imagenes/3.png"
                    }
                    else if(vidas.innerHTML == 2){
                        imageness.src = "imagenes/4.png"
                    }
                    else if(vidas.innerHTML == 1){
                        imageness.src = "imagenes/5.png"
                    }
              element.style.display = "none";      
        })
        
        
})




btnAnimales.addEventListener("click",function(){
    document.querySelector(".container-juego").style.display = "block";
    let random = Math.floor(Math.random()*palabras.animales.length)
    let arr = palabras.animales[random].split("")
    for(let i = 0; i < arr.length; i++){
    index.insertAdjacentHTML("beforeend",`<p class="i">${arr[i]}</p><div class="rayita"></div>`)
    document.querySelectorAll(".letritas").forEach(element => element.style.display = "block")
    }
})
btnPaises.addEventListener("click",function(){
    document.querySelector(".container-juego").style.display = "block";
    let random = Math.floor(Math.random()*palabras.paises.length)
    let arr = palabras.paises[random].split("")
    for(let i = 0; i < arr.length; i++){
    index.insertAdjacentHTML("beforeend",`<p class="i">${arr[i]}</p><div class="rayita"></div>`)
    document.querySelectorAll(".letritas").forEach(element => element.style.display = "block")
    }
})
btnFrutas.addEventListener("click",function(){
    document.querySelector(".container-juego").style.display = "block";
    let random = Math.floor(Math.random()*palabras.frutas.length)
    let arr = palabras.frutas[random].split("")
    for(let i = 0; i < arr.length; i++){
    index.insertAdjacentHTML("beforeend",`<p class="i">${arr[i]}</p><div class="rayita"></div>`)
    document.querySelectorAll(".letritas").forEach(element => element.style.display = "block")
    
}
})


