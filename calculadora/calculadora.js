//const numeros = document.querySelectorAll('.btn-num')
const clear = document.querySelector('.btn-clear')
const del = document.querySelector('.btn-del')
const eq = document.querySelector('.btn-eq')
const display = document.querySelector('.display')

function btnParaDisplay(valor) {
    display.value += valor
}

function realizaConta() {
    let conta = display.value
    conta = eval(conta)

    display.value = String(conta)
}

document.addEventListener('click', function(e) {
    const el = e.target
    if(el.classList.contains('btn-num')) {
        btnParaDisplay(el.innerText)
    }
})

clear.addEventListener('click', function() {
    display.value = ' '
})

del.addEventListener('click', function() {
    display.value = display.value.slice(0, -1)
})

eq.addEventListener('click', function() {
    realizaConta()
})

