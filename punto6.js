class Ficha {
    constructor(nombre) {
        this.nombre = nombre;
        this.sesiones = [];
    }

    anotar(km) {
        this.sesiones.push(km);
    }

    media() {
        if (this.sesiones.length === 0) return 0;
        return this.sesiones.reduce((a, b) => a + b, 0) / this.sesiones.length;
    }
}

let ficha;

function anotar() {
    const nombre = document.getElementById("nombre").value;
    const km = parseFloat(document.getElementById("km").value);
    
    if (!ficha) ficha = new Ficha(nombre);
    ficha.anotar(km);
    document.getElementById("resultado").textContent = "Kilómetros anotados: " + km;
}

function media() {
    if (!ficha) return;
    const promedio = ficha.media();
    document.getElementById("resultado").textContent = "Media de km: " + promedio;
}