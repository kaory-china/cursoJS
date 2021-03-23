function calcular() {
    let data = new Date()
    let anoAtual = data.getFullYear() // full yeaer, ano com 4 digitos
    let anoNasc = window.document.getElementById('txtano')
    let res = window.document.querySelector('div#res')

    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) { // se o user nao digitou ano ou ano for maior que ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('sexo')
        let idade = anoAtual - Number(anoNasc.value)
        let = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto') // como se criasse no html: <img id='foto'>

        if (fsex[0].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // bebe
                img.setAttribute('src', 'babygirl.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulta.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'idosa.jpg')
            }
            
        } else if (fsex[1].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // bebe
                img.setAttribute('src', 'babyboy.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    } 
}

   