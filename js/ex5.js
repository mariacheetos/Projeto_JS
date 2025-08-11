var n1, n2, n3, n4, m

n1 = parseFloat(prompt("Digite a nota:"))
n2 = parseFloat(prompt("Digite a nota:"))
n3 = parseFloat(prompt("Digite a nota:"))
n4 = parseFloat(prompt("Digite a nota:"))

m = (n1 + n2 + n3 + n4) / 4

if (m >= 7) {
    alert("Aprovado(a)")
}
else {
    alert("Reprovado(a)")
}