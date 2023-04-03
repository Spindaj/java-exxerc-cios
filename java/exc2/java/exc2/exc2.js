let numero = parseFloat(prompt('Digite um número de 1 a 10: '))

if(numero > 10){
    alert('Erro! Apenas números de 1 a 10.')
    location.href = "index2.html"
    
}

let tabuada = [numero * 1 + '<br>' +
            numero * 2 + '<br>' +
            numero * 3 + '<br>' +
            numero * 4 + '<br>' +
            numero * 5 + '<br>' +
            numero * 6 + '<br>' +
            numero * 7 + '<br>' +
            numero * 8 + '<br>' +
            numero * 9 + '<br>' +
            numero * 10]

document.write(tabuada)