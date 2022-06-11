function mudarTema(id) { 
    if (id == "light" ) {
        document.getElementsByTagName("body")[0].style.background = "#fff";
        document.querySelector(".link-facebook").style.color = "#3b5998";
        document.querySelector(".foto").src = "./imagens/celular-white.png"
    } else {
        document.getElementsByTagName("body")[0].style.background = "#000";
        document.querySelector(".link-facebook").style.color = "#fff";
        document.querySelector(".foto").src = "./imagens/celular-dark.png"
    }    
}
mudarTema();


