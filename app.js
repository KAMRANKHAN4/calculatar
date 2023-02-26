

function getValue(number) {
    console.log(number);
    var screen = document.getElementById("screen").value += number
}
function equal() {
    var sameer = document.getElementById("screen").value 
    console.log(sameer);
    var kamran = eval(sameer)
    document.getElementById("screen").value = kamran
}
function clearall() {
    document.getElementById("screen").value = " "
}
function clearone() {
    var owais = document.getElementById("screen").value
    var kuchbhi = owais.slice(0,-1)
    document.getElementById("screen").value  = owais.slice(0,-1)
}






















// function getValue(num) {
//     console.log(num);
//     var screen = document.getElementById("screen").value += num
// }
// function equal() {
//     // console.log();
//     var screen = document.getElementById("screen").value
//     var sameer = eval(screen)
//     document.getElementById("screen").value = sameer

// }



























