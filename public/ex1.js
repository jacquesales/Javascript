function carregar() {
    var hr = window.document.getElementById('hora')
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()   
    msg.innerHTML = `<strong>Agora são ${hora} horas</strong>`

    if (hora >= 0 && hora < 12) {  
        hr.innerHTML = 'Bom dia!'  
        img.src = '../img/manha.jpg'
        document.body.style.background = '#FFB90F'
    } else if (hora >= 12 && hora < 18) {
        hr.innerHTML = 'Boa tarde!'
        img.src = '../img/tarde.jpg'
        document.body.style.background = '#CDBA96'
    } else {
        hr.innerHTML = 'Boa noite!'
        img.src = '../img/noite.jpg'
        document.body.style.background = '#607B8B'
    }
}