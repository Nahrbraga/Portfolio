function calcular() {
    const peso = document.querySelector('#peso')
    const altura = document.querySelector('#altura')
    const resultado = document.querySelector('.resultado')
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    

    if (imc < 18.5) {
        resultado.innerHTML = `Seu IMC é de ${imc} (Abaixo do peso)`
    } else if (18.5 <= imc && imc < 24.9 ) {
        resultado.innerHTML = `Seu IMC é de ${imc} (Peso normal)`
    } else if (25 <= imc && imc < 29.9) {
        resultado.innerHTML = `Seu IMC é de ${imc} (Sobrepeso)`
    } else if (30 <= imc && imc < 34.9) {
        resultado.innerHTML = `Seu IMC é de ${imc} (Obesidade grau 1)`
    } else if (35 <= imc && imc < 39.9) {
        resultado.innerHTML = `Seu IMC é de ${imc} (Obesidade grau 2)`
    } else {
        resultado.innerHTML = `Seu IMC é de ${imc} (Obesidade grau 3)`
    }
}
