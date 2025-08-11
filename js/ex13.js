var km, l, m
km = parseFloat(prompt("Infome a quantidade de km percorrida"))
l = parseFloat(prompt("Infome a quantidade de litros consumida"))

m = km / l

if (m < 8) {
    alert("Venda o carro!")
}
else if (m > 12) {
    alert("Super econômico!")
}
else {
    alert("Econômico!")
}