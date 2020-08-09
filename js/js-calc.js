

let total = document.getElementById('total');

function insert(num) {
    total.value = total.value + num
}

function equal() {
    var exp =  total.value;
    if (exp) {
        total.value = eval(exp);
    }
}

function clean() {
    total.value = '';
}
