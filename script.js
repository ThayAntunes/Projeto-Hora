function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha')
    //console.log(img)
    var data = new Date()
    var hora = data.getHours()
    //var hora = 2
    msg.innerHTML = `Agora são ${hora} horas.<br>`
    
    if (hora >= 5 && hora < 12) {
        // bom dia
        img.src = "imagens/manha.png"
        document.body.style.background = '#b8ad9d'
        msg.innerHTML += `Tenha um bom dia!`
    } else if (hora >= 12 && hora <16) {
        // boa tarde
        img.src = "imagens/tarde.png"
        document.body.style.background = '#7e8579'
        msg.innerHTML += `Tenha uma boa tarde!`
    } else if (hora >=16 && hora <20) {
        // boa tarde por do sol
        img.src = "imagens/evening.png"
        document.body.style.background = '#884330'
        msg.innerHTML += `Tenha uma boa tarde!`
    } else if (hora >= 20 && hora <24) {
        // boa noite 
        img.src = "imagens/noite.png"
        document.body.style.background = '#191827'
        msg.innerHTML += `Tenha uma boa noite!`
    } else {
        // boa madrugada
        img.src = "imagens/madrugada.png"
        document.body.style.background = '#192428'
        msg.innerHTML += `Tenha uma boa noite!`
    }    
}
