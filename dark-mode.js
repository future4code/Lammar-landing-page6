let darkOn = false

function darkMode() {
    document.body.classList.toggle("dark-mode");

    if (darkOn === false){
        let alterarNome = document.getElementsByClassName("btn-dark")
        alterarNome[0].innerHTML = "LightMode"
        darkOn = true

    } else{
        let alterarNome = document.getElementsByClassName("btn-dark")
        alterarNome[0].innerHTML = "DarkMode"
        darkOn = false
    }

}

