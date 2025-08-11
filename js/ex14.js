var estado, valor
valor = parseFloat(prompt("Informe o valor do produto"))
estado = prompt("Informe o Estado")

if (estado == "MG") {
    alert("preço final= " + valor * 1.07)
}
else if (estado == "SP") {
    alert("preço final= " + valor * 1.12)
}
else if (estado == "RJ") {
    alert("preço final= " + valor * 1.15)
}
else if (estado == "MS") {
    alert("preço final= " + valor * 1.08)
}
else {
    alert("Erro, estado não válido")
}