function mudarTemaLight(id) { 
    if (id == "light") {
        document.getElementsByTagName("body")[0].style.background = "#fff";
        document.querySelector(".link-facebook").style.color = "#3b5998";
        document.querySelector(".obter-app").style.color = "#000";
        document.querySelector(".nao-tem-conta").style.color = "#000";
        document.querySelector(".foto").src = "./imagens/celular-white.png"
    }    
}
mudarTemaLight();

function mudarTemaDark (id) {
    if (id == "dark") 
    document.getElementsByTagName("body")[0].style.background = "#000";
    document.querySelector(".link-facebook").style.color = "#fff";
    document.querySelector(".obter-app").style.color = "#fff";
    document.querySelector(".nao-tem-conta").style.color = "#ccc";
    document.querySelector(".foto").src = "./imagens/celular-dark.png"
} 
mudarTemaDark();


