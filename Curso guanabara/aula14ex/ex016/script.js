function calcular(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resposta = document.getElementById('resposta')
    

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){

        window.alert(' Insira um valor em cada campo')   
        resposta.innerHTML = 'Impossivel contar'


    }else {           
        resposta.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0){
            alert(' Não é possivel usar passo , foi usado passo 1)')
            p = 1
        }

        if (i < f){
            for (let c = i; c <= f; c += p){
                resposta.innerHTML += ` ${c} \u{1F449}`
            }

        }else{
            for(c = i; c >= f; c -= p){
                resposta.innerHTML += `${c} \u{1f449}`
            }
        }

        
        resposta.innerHTML += `\u{1f3c1}`

    }
}