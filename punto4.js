function calcularPromedio() {
    
    const num1 = parseInt(document.getElementById("valor1").value);
    const num2 = parseInt(document.getElementById("valor2").value);
    const num3 = parseInt(document.getElementById("valor3").value);
    
    
    const promedio = (num1 + num2 + num3) / 3;
    
    
    document.getElementById("resultado").textContent = 
        `El promedio es: ${promedio}`;
}