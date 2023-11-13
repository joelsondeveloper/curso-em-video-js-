
let res = document.getElementById('res')

function contar() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var passo = document.getElementById('passo')

    if (n1.value.length == 0 || n2.value.length == 0 || passo.value == 0) {
        alert('impossivel contar')
    }
    else  {
        res.innerHTML = 'carregando...'
        let i = Number(n1.value)
        let i1 = Number(n2.value)
        let p1 = Number(passo.value)
        res.innerHTML = ' '
        if (i < i1) {
            while (i < i1) {
                
                res.innerHTML += `${i} \u{1f449} `
                i += p1
            }
        }
        else {
            
            while (i > i1) {
                
                res.innerHTML += `${i} \u{1f449} `
                i -= p1
            }
        }
    }
    
        
}

