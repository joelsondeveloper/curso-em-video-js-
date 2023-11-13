function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >=0 && hora < 12) {
        img.innerHTML = '<img src="pexels-pixabay-355872 (1).png" alt="foto do dia" height="250px" width="250px">'
        document.body.style.background = '#ffd861'
    }
    else if (hora >= 12 && hora < 18) {
        img.innerHTML = '<img src="pexels-george-becker-126658.png" alt="foto do dia" height="250px" width="250px">'
        document.body.style.background = '#ca6b17'
    }
    else {
        img.innerHTML = '<img src="pexels-piccinng-3052361.png" alt="foto do dia" height="250px" width="250px">'
        document.body.style.background = '#081c1d'
    }
}