const precioSinIva = 300;
const ivaPorcentaje = 21;

const valorIva = (precioSinIva * ivaPorcentaje) / 100;
const precioTotal = precioSinIva + valorIva;

document.getElementById("resultado").textContent = 
    `El precio total con IVA es: $${precioTotal.toFixed(2)}`;

console.log(`Precio sin IVA: $${precioSinIva}`);
console.log(`IVA (${ivaPorcentaje}%): $${valorIva.toFixed(2)}`);
console.log(`Total a pagar: $${precioTotal.toFixed(2)}`);