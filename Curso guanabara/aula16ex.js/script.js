var lista = []

function adicionarValor(){    
    resposta.innerHTML = ''
    let numero = document.getElementById('numero')
    let tabelaLista = document.getElementById('listaNumeros')
    let tabela = document.createElement('option')
    let valorTestado = testaValor(numero)
    let valorAdicionado = adicionaLista(valorTestado)
    
        
    if (valorTestado == false || valorAdicionado == false){
        alert('Erro com os valores')        
        
    }else{                          
        tabela.text = `O numero ${valorAdicionado} foi adicionado`
        tabelaLista.append(tabela)
        lista.push(valorAdicionado) 
    }       
    numero.value = ''
    numero.focus()   
}

function testaValor(n1){
    let teste = (n1)
    if (teste.length < 1 || teste < 1 || teste > 100){
        alert('Erro com a entrada de dados, tente novamente. Valores entre 1 e 100')
        return false
    }else{
        return teste 
    }    
}

function adicionaLista(n2){    
    let teste = Number(n2.value)      
    if (lista.indexOf(teste) != -1){        
        return false
    }else{
              
        return teste
    }
}

function calcular(){
    if (lista.length == 0){
        alert('Adicione valores')
    }else{        
        lista.sort
        let soma = 0
        for ( let i in lista){
           soma += lista[i]
        }        
        let resposta = document.getElementById('resposta')
        resposta.innerHTML = ''
        resposta.innerHTML += `<p>Ao todo temos ${lista.length} cadastrados.</p>`
        resposta.innerHTML += `<p>O maior valor é ${lista[lista.length - 1]}</p>`
        resposta.innerHTML += `<p>O menor valor é ${lista[0]}</p>`
        resposta.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        resposta.innerHTML += `<p>A média dos valores é ${soma / lista.length}`           
    }
}


/*
function testeCaracteres(n){
    let teste = Number(n.value)
    //alert(`O valor é ${teste}`)

    if ( teste > 100 || teste < 1 ){
        alert('Digite um numero válido')
        
    }else {
        return teste
    }

}

function verificaçãoIgualdade(n){
    let igualdade = n    
    if (lista.indexOf(igualdade) == -1){
        lista.push(n)
        return n        
    }else{
        alert(`Numero ja existente ${n}`)
        return false              
    }
}

function adicionarValor(){
    let numero = document.getElementById('numero')
    let adicionar = verificaçãoIgualdade(testeCaracteres(numero))
        
    let lista = document.getElementById('listaNumeros')
    let tabela = document.createElement('option')
    //alert(testeCaracteres(numero))
    if (adicionar == false){
        alert('Adicione outro numero')
    }else{
        tabela.text = `O numero ${adicionar} foi adicionado`
    }
    numero.value = ''
    numero.focus()

    
    lista.append(tabela)         

    //alert(`O valor adicionado foi ${numero}`)
}

function somatoria(l){
    let soma = 0 
    for (let i in l){
        soma += [i]
    }
    return soma
}


function calcular(){
    if (lista.length == 0){
        alert('Adicione valores antes de finalizar')
    }else {
        lista.sort()
        
        let res = document.getElementById('resposta')

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`

        
        


    }

    
}
*/