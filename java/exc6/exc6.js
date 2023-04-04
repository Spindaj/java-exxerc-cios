// Função para calcular o IMC

    // Recuperar os valores dos inputs
    let altura1 = parseFloat(prompt("altura1 (em metros)"))
    let peso1 = parseFloat(prompt("peso1"))
    let sexo = prompt("sexo 1: M || F")

    let altura2 = parseFloat(prompt("altura2 (em metros)"))
    let peso2 = parseFloat(prompt("peso2"))
    let sexo2 = prompt("sexo 2: M || F")

    let altura3 = parseFloat(prompt("altura3 (em metros)"))
    let peso3 = parseFloat(prompt("peso3"))
    let sexo3 = prompt("sexo 3: M || F")

    let altura4 = parseFloat(prompt("altura4 (em metros)"))
    let peso4 = parseFloat(prompt("peso4"))
    let sexo4 = prompt("sexo 4: M || F")

    let altura5 = parseFloat(prompt("altura5 (em metros)"))
    let peso5 = parseFloat(prompt("peso5"))
    let sexo5 = prompt("sexo 5: M || F")

    // Calcular o IMC para cada pessoa
    let imc1 = peso1 / (altura1 * altura1)
    let imc2 = peso2 / (altura2 * altura2)
    let imc3 = peso3 / (altura3 * altura3)
    let imc4 = peso4 / (altura4 * altura4)
    let imc5 = peso5 / (altura5 * altura5)

    // Exibir o "Resultado: " do IMC para cada pessoa
    document.write("Resultado 1: "+ imc1 + "<br>")
    document.write("Resultado 2: "+ imc2 + "<br>")
    document.write("Resultado 3: "+ imc3 + "<br>")
    document.write("Resultado 4: "+ imc4 + "<br>")
    document.write("Resultado 5: "+ imc5 + "<br>")

    // Contar a quantidade de pessoas do sexo: M || F masculino e feminino
    let qtdMasculino = 0
    let qtdFeminino = 0

    if (sexo1 == "M" || "m") {
        qtdMasculino++
    } else {
        qtdFeminino++
    }

    if (sexo2 == "M" || "m") {
        qtdMasculino++
    } else {
        qtdFeminino++
    }

    if (sexo3 == "M" || "m") {
        qtdMasculino++
    } else {
        qtdFeminino++
    }

    if (sexo4 == "M" || "m") {
        qtdMasculino++
    } else {
        qtdFeminino++
    }

    if (sexo5 == "M" || "m") {
        qtdMasculino++
    } else {
        qtdFeminino++
    }

alert(qtdMasculino + ' ' + qtdFeminino)
