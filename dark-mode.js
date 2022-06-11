let darkOn = false

function darkMode() {
    document.body.classList.toggle("dark-mode");

    if (darkOn === false){
        let alterarNome = document.getElementsByClassName("btn-dark")
        alterarNome[0].innerHTML = "Ativar Modo Claro"
        darkOn = true

    } else{
        let alterarNome = document.getElementsByClassName("btn-dark")
        alterarNome[0].innerHTML = "Ativar Modo Escuro"
        darkOn = false
    }

}

