// menu hamburguer
const menuBtn = document.querySelector('.menu-btn');    
const nav = document.querySelector('.nav'); 
let menuOpen = false;  
menuBtn.addEventListener('click',()=>{  

    if(!menuOpen){
       menuBtn.classList.add('open');
       nav.classList.add('nav-expandida');
       menuOpen = true;
    }else{
        menuBtn.classList.remove('open');  
        nav.classList.remove('nav-expandida')
        menuOpen = false 
    }
})

// botão darkMode
let darkOn = false
let alterarNome = document.getElementsByClassName("btn-dark")

function darkMode() {
    document.body.classList.toggle("dark-mode");

    if (!darkOn){
        alterarNome[0].innerHTML = "Ativar Modo Claro"
        darkOn = true

    } else{
        alterarNome[0].innerHTML = "Ativar Modo Escuro"
        darkOn = false
    }

}