function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    // let hora = 19
    let hora = data.getHours()
    let minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {
        // bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#f4ddbe'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#f5a964'
    } else {
        // boa noite! 
        img.src = 'fotonoite.png'
        document.body.style.background = '#435c7d'
        
    }
}
