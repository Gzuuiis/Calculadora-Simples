function digitos(num){
    if (num == 'C' ){
        calc.caixa.value = ''
     }
    else {
        calc.caixa.value = (calc.caixa.value + num)
     }
}
function calcs(){
    calc.caixa.value = eval(calc.caixa.value).toFixed(2)
}
function bspace(){
    valor = calc.caixa.value;
    volt = calc.caixa.value.length-1
    calc.caixa.value = valor.substring(volt,0)
}

function onoff(){
    var imagem = document.getElementById('onoff')
    var imagem_ligado = "file:///E:/Inform%C3%A1tica/Projetos/Calculadora/img/ligada.png"
    var imagem_desligado = "file:///E:/Inform%C3%A1tica/Projetos/Calculadora/img/desligada.png"

    var background_calculadora = document.getElementById('selet')
    var botoes = document.querySelectorAll('.botoes')
    
    if(imagem.src == imagem_desligado){
       imagem.src = imagem_ligado
       background_calculadora.style.backgroundColor = "rgb(201, 201, 201)"

       for(var i = 0; i < botoes.length; i++){
        botoes[i].style.backgroundColor = "rgb(96, 96, 96)"
        }
    }
    else if(imagem.src == imagem_ligado){
        imagem.src = imagem_desligado
        background_calculadora.style.transition = "800ms"
        background_calculadora.style.backgroundColor = "rgb(96, 96, 96)"

        for(var i = 0; i < botoes.length; i++){
            botoes[i].style.backgroundColor = "rgb(201, 201, 201)"
            botoes[i].style.transition = "800ms"
        }
     }
}