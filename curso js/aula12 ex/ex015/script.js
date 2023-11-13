function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.setAttribute('height','250px')
        img.setAttribute('width','250px')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','cmas.png')
            }
            else if (idade < 21) {
            //jovem
            img.setAttribute('src','jmas.png')
            }
            else if (idade < 50) {
            //adulto
            img.setAttribute('src','amas.png')
            }
            else {
                //idoso
                img.setAttribute('src','imas.png')
            }
        }
        else if(fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','cfem.png')
            }
            else if (idade < 21) {
            //jovem
            img.setAttribute('src','jfem.png')
            }
            else if (idade < 50) {
            //adulto
            img.setAttribute('src','afem.png')
            }
            else {
                //idoso
                img.setAttribute('src','ifem.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}