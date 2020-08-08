
// let total = document.getElementById('total');
//
// function btn0(){
//     total.value += "0";
// }
// function btn1() {
//     total.value += "1";
// }
// function  btn2(){
//     total.value += "2";
// }
// function btn3(){
//     total.value += "3";
// }
// function btn4(){
//     total.value += "4";
// }
// function btn5(){
//     total.value += "5";
// }
// function btn6(){
//     total.value += "6";
// }
// function btn7(){
//     total.value += "7";
// }
// function btn8(){
//     total.value += "8";
// }
// function btn9(){
//     total.value += "9";
// }
// function btnSoma (){
//     total.value += "+";
// }
//
// function btnMultiplica (){
//     total.value += "x";
// }
//
// function calc() {
//     total.value = eval(total.value);
// }
//
//
// function ac() {
//     total.value = '';
// }
//
//
// document.getElementById("0").addEventListener("click",btn0);
// document.getElementById("1").addEventListener("click",btn1);
// document.getElementById("2").addEventListener("click", btn2);
// document.getElementById("3").addEventListener("click", btn3);
// document.getElementById("4").addEventListener("click", btn4);
// document.getElementById("5").addEventListener("click", btn5);
// document.getElementById("6").addEventListener("click", btn6);
// document.getElementById("7").addEventListener("click", btn7);
// document.getElementById("8").addEventListener("click", btn8);
// document.getElementById("9").addEventListener("click", btn9);
//
//
// document.getElementById("som").addEventListener("click", btnSoma);
// document.getElementById("X").addEventListener("click", btnMultiplica);
//
// document.getElementById("calc").addEventListener("click", calc);
// document.getElementById("AC").addEventListener("click", ac);

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
