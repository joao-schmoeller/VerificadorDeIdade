function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')


        if (Fano == 0 || Fano.value > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(Fano.value)
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
        
        

        if (fsex[0].checked) {
            genero= 'Masculino'

            if (idade >= 0 && idade <=10) {
                //crianca
                img.setAttribute('src', 'criancamenino.png')
            }

            else if (idade > 10 && idade <= 18 ) { 
                //jovem
                img.setAttribute('src', 'homenjovem.png')
            }

            else if (idade > 18 && idade <= 55) {
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            }

            else{
                img.setAttribute('src', 'idosohomem.png')
            }

        } else if (fsex[1].checked) {
            genero= 'Feminino'

            if (idade >= 0 && idade <=10) {
                img.setAttribute('img', 'criancamenina.png')
            }else if (idade > 10 && idade < 18) {
                img.setAttribute('src', 'mulherjovem.png')
            }else if (idade > 18 && idade < 55) {
                img.setAttribute('src', 'mulheradulta.png')
            }else{
                img.setAttribute('src', 'idosamulher.png')
            }
          
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi detectado uma pessoa do ${genero} com idade de cerca de ${idade} anos`
        res.appendChild(img)
    
    }

}