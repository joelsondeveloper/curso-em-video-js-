

function calcular() {
    var res = document.getElementById('res')
    var txtn = document.getElementById('txtn')
    let num = Number(txtn.value)
    if (txtn.value.length == 0) {
        alert('digite um numero')
    }
    else if (txtn.value.length > 14){
        alert('digite um numero mais baixo')
    }
    
    else {
        res.innerHTML = ''
        for(var pos = Number(1); pos <= 9; pos++ ) {
        let s = num * pos
        res.innerHTML += `<td>${num} x ${pos} = ${s}</td>`
          
        }
    }
}