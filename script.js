function toggleMode() {
    // pegando o html
    const html = document.documentElement 

    // fazendo a troca das classes
    html.classList.toggle('light') 

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', 'assets/avatar-light.png')
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', 'assets/avatar.png')
    }
}

// trocar somente o fundo
    
    // ao inves disso 

    // function toggleMode() {
    //     const html = document.documentElement
    // }
    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

    // fazer somente isso 

    // function toggleMode() {
    //     const html = document.documentElement
    // html.classList.toggle('light')
    // }
