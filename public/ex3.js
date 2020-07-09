function contar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtf')
    let int = document.getElementById('txtint')
    let res = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || int.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:  '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let itv = Number(int.value)

        if (itv <= 0) {
            alert('Intervalo inválido. Considerando Intervalo 1')
            itv = 1
        }

        if (i < f) {
            for (let c = i ; c <= f ; c += itv) {
                res.innerHTML += ` ${c} \u{27A1}`  
            }            
        } else {
            for (let c = i ; c >= f ; c -= itv){
                res.innerHTML += ` ${c} \u{27A1}`
            }            
        }
        res.innerHTML += `\u{274C}`   
    }
}


function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for (let c <= 10)
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}    