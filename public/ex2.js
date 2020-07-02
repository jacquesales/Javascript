function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', '../img/bebe-menino.jpg')
            } else if (idade < 8) {
                img.setAttribute('src', '../img/criança-menino.jpg')
            } else if (idade < 12) {
                img.setAttribute('src', '../img/menino.jpg')
            } else if (idade < 20) {
                img.setAttribute('src', '../img/jovem-menino.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', '../img/adulto-homem.jpg')
            } else {
                img.setAttribute('src', '../img/idoso.jpg')
            }
        } else {
            genero = 'Feminino'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', '../img/bebe-menina.jpg')
            } else if (idade < 8) {
                img.setAttribute('src', '../img/criança-menina.jpg')
            } else if (idade < 12) {
                img.setAttribute('src', '../img/menina.jpg')
            } else if (idade < 20) {
                img.setAttribute('src', '../img/jovem-menina.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', '../img/adulto-mulher.jpg')
            } else {
                img.setAttribute('src', '../img/idosa.jpg')
            }
        }
        resultado.innerHTML = `Temos uma pessoa de sexo ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}