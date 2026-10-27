//getAttribute - obter valor do atributo (Valor da linha)
//setAttribute - definir ou modificar o valor da linha

function changeImage() {
    const img = document.getElementById("myImage");
    const coletarSrc = img.getAttribute("src");

    if (coletarSrc === "vasco.webp") {
        img.setAttribute("src", "error.webp");
        img.setAttribute("alt", "Imagem de outro time não encontrada");
    } else { //caso contrario realize o processo inverso
        img.setAttribute("src", "vasco.webp");
        img.setAttribute("alt", "Imagem do maior time");
    }

}