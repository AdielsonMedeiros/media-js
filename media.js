var nota1=0
var nota2=0
var nota3=0
var nota4=0
var media=0
var resultado=0

function calcular(){
    nota1 = parseFloat(document.getElementById ('num1').value)
    nota2 = parseFloat(document.getElementById ('num2').value)
    nota3 = parseFloat(document.getElementById ('num3').value)
    nota4 = parseFloat (document.getElementById ('num4').value)
    media = (nota1 + nota2+ nota3+nota4) /4

    
    
    if (media >= 6){
        resultado = document.getElementById ("resultado")
        resultado.innerHTML = '<br> Sua média é:  ' + media.toFixed(2) + ' <h2> você está aprovado!'
        document.getElementById('num1').value =''
        document.getElementById('num2').value =''
        document.getElementById('num3').value =''
        document.getElementById('num4').value =''
        return false
        
    } else if ( media < 6){
        resultado = document.getElementById ("resultado")
        resultado.innerHTML = ' <br>Sua Média é:  ' + media.toFixed(2) + '<h2> você está reprovado!' 
        document.getElementById('num1').value =''
        document.getElementById('num2').value =''
        document.getElementById('num3').value =''
        document.getElementById('num4').value =''
        return false
        
    }
}