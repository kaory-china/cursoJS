function carregar() {
    let msg = window.document.getElementById('msg')
    let foto = window.document.getElementById('imagem')
    // let hora = new Date()
    // agora = hora.getHours()
    agora = 14
    msg.innerHTML = `Agora são ${agora} horas.`
    if (agora > 0 && agora < 12) {
        foto.src = 'manha.png'
        document.body.style.background = 'yellow'
    } else if (agora >= 12 && agora < 18) {
        foto.src = 'tarde.png'
        document.body.style.background = 'orange'
    } else {
        foto.src = 'noite.png'
        document.body.style.background = 'purple'
    }
}
