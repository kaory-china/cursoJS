function gerarTabuada() {
    let num = document.getElementById('num').value
    let res = document.getElementById('res')

    let contador = 1

    if (num.length == 0) {
        window.alert('Digite um número') 
    } else {
        while (contador <= 10) {
            res.innerHTML += `<p>${num} x ${contador} = ${contador*num}</p>`
            contador++
        }
    }
    
}