let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let resultado = document.getElementById('res')
let valores = []
let min = 1
let max = 100

function adicionar() {    
    if (numeros(num.value) && !inLista(num.value, valores))  {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function numeros(n) {
    if (Number(n) >= min && Number(n) <= max) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function analisar() {
    if (valores.length == 0) {
        alert('Adicione valores para analisar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let posicao in valores) {
            soma += valores[posicao]
            if (valores[posicao] > maior)
                maior = valores[posicao]
            if (valores[posicao] < menor)
                menor = valores[posicao]
        }
        media = soma / total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos <strong>${total}</strong> números cadastrados</p>`
        resultado.innerHTML += `<p> O maior valor informado é <strong>${maior}</strong></p>`
        resultado.innerHTML += `<p> O menor valor informado é <strong>${menor}</strong></p>`
        resultado.innerHTML += `<p> A soma de todos os valores é <strong>${soma}</strong></p>`
        resultado.innerHTML += `<p> A média dos valores informados é <strong>${media}</strong></p>`
    }
}