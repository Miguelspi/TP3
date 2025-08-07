function calcular() {
    const lado = parseFloat(document.getElementById("lado").value);
    const area = lado * lado;
    const perimetro = 4 * lado;
    document.getElementById("resultado").innerHTML = "Área: " + area + "<br>Perímetro: " + perimetro;
}