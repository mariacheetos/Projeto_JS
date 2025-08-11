var l, g
l = parseFloat(prompt("Informe a quantidade de litros"))
g = parseFloat(prompt("Informe o preço atual da gasolina"))

if (l >= 10 && l <= 20) {
    alert(l * g * 0.9)
}
if (l > 20) {
    alert(l * g * 0.8)
}