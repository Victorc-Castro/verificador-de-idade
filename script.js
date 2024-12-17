function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './assets/h1.png')
                img.style.borderRadius = '50%'
            } else if (idade >=10 && idade < 21) {
                // Jovem
                img.setAttribute('src', './assets/h2.png')
                img.style.borderRadius = '50%'
            }else if (idade >=21 && idade < 50) {
                // Adulto
                img.setAttribute('src', './assets/h3.png')
                img.style.borderRadius = '50%'
            }else {
                // Idoso
                img.setAttribute('src', './assets/h4.png')
                img.style.borderRadius = '50%'
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './assets/m1.png')
                img.style.borderRadius = '50%'
            } else if (idade >=10 && idade < 21) {
                // Jovem
                img.setAttribute('src', './assets/m2.png')
                img.style.borderRadius = '50%'
            }else if (idade >=21 && idade < 50) {
                // Adulta
                img.setAttribute('src', './assets/m3.png')
                img.style.borderRadius = '50%'
            }else {
                // Idosa
                img.setAttribute('src', './assets/m4.png')
                img.style.borderRadius = '50%'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    } 
}