function calcular() {
    const litros = parseFloat(document.getElementById("litros").value);
    const km = parseFloat(document.getElementById("km").value);
    const consumo = litros / km;
    document.getElementById("resultado").textContent = "Consumo: " + consumo.toFixed(2) + " L/Km";
}