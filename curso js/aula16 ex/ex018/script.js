valores = []
var calculou = 0
var calculo = document.getElementById('calculo')
function enviar() {
    var valor = document.getElementById('valor')
    let table = document.getElementById('res')
    if (valores.length == 20) {
        alert('passou de 19 valores digitados [ERRO]')
    }
    else if (valor.value.length == 0 ) {
        alert('digite algo')
    }
    else if (valores.find((item) => item == valor.value)) {
        alert('esse valor já está registrado')
    }
    else if (valor.value > 100 || valor.value < 0) {
        alert('valor fora do requirido')
    }
    else if (calculou !== 0) {
        calculou == 0
        calculo.innerHTML = ''
        valores.push(valo.value)
        table.innerHTML += `<th>${valor.value}</th>`
        valor.innerHTML = '0'
    }
    else {
        calculou == 0
        valores.push(valor.value)
        table.innerHTML += `<th>${valor.value}</th>`
        valor.innerHTML = '0'
    }
    valor.value = ''
    valor.focus()

}
function calcular() {
    
    if (calculou !== 0) {
        calculo.innerHTML = ''

        var som = 0
        for (var c = 0; c < valores.length; c++) {
            som = Number(som) + Number(valores[c])
        }
    
        calculo.innerHTML += `<h5>ao todo, temos ${valores.length} valores cadastrados</h5>`
        calculo.innerHTML += `<h5>o maior valor cadastrado é o ${Math.max(...valores)}</h5>`
        calculo.innerHTML += `<h5>o menor valor cadastrado é o ${Math.min(...valores)}</h5>`
 
        calculo.innerHTML += `<h5>a soma dos valores é igual a ${som}</h5>`
        calculo.innerHTML += `<h5>a media dos valores é igual a ${som / c}</h5>`
        calculou++

    }
    else if (valores.length == 0) {
        alert('adicione um valor')
    }
    else {
        var som = 0
        for (var c = 0; c < valores.length; c++) {
            som = Number(som) + Number(valores[c])
        }
    
        calculo.innerHTML += `<h5>ao todo, temos ${valores.length} valores cadastrados</h5>`
        calculo.innerHTML += `<h5>o maior valor cadastrado é o ${Math.max(...valores)}</h5>`
        calculo.innerHTML += `<h5>o menor valor cadastrado é o ${Math.min(...valores)}</h5>`
 
        calculo.innerHTML += `<h5>a soma dos valores é igual a ${som}</h5>`
        calculo.innerHTML += `<h5>a media dos valores é igual a ${som / c}</h5>`
        calculou++
    }
    valor.value = ''
    valor.focus()



}