function enterVal(val) {
    let number = document.querySelector('#result').innerHTML;

    document.querySelector('#result').innerHTML = number + val
}

function clean() {
    document.querySelector('#result').innerHTML = ''
}

function back() {
    var resultado = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = resultado.substring(0, resultado.length -1)

}

function calc() {
    let resultado = document.querySelector('#result').innerHTML;

    if(resultado) {
        document.querySelector('#result').innerHTML = eval(resultado);
    } else {
        document.querySelector('#result').innerHTML = 'Nothing to Calculate'
    };

};