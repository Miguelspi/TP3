class Cliente {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

class Factura {
    constructor(idCliente, total) {
        this.idCliente = idCliente;
        this.total = total;
        this.estado = "pendiente";
    }

    cobrar() {
        this.estado = "pagada";
    }

    imprimir() {
        return `Factura para cliente ${this.idCliente} | Total: $${this.total} | Estado: ${this.estado}`;
    }
}

const clientes = [
    new Cliente("Angelica Flores", "bety@email.com", "3875879658"),
    new Cliente("Leonel Messi", "leomessi@email.com", "1189874587"),
    new Cliente("Armando Paredes", "pared@email.com", "3888754785")
];

const facturas = [
    new Factura(0, 11000),
    new Factura(1, 55000)
];

function mostrarClientes() {
    const divClientes = document.getElementById("clientes");
    divClientes.innerHTML = "<h3>Lista de Clientes:</h3>";
    
    clientes.forEach((cliente, index) => {
        divClientes.innerHTML += `
            <p>${index}. ${cliente.nombre} - ${cliente.email} - Tel: ${cliente.telefono}</p>
        `;
    });
}

function mostrarFacturas() {
    const divFacturas = document.getElementById("facturas");
    divFacturas.innerHTML = "<h3>Lista de Facturas:</h3>";
    
    facturas.forEach((factura, index) => {
        divFacturas.innerHTML += `
            <p>Factura ${index}: ${factura.imprimir()}</p>
        `;
    });
}

function crearFactura() {
    const idCliente = prompt("Ingrese el ID del cliente (0, 1 o 2):");
    const total = prompt("Ingrese el total de la factura:");
    
    if (idCliente >= 0 && idCliente < clientes.length && !isNaN(total)) {
        const nuevaFactura = new Factura(parseInt(idCliente), parseFloat(total));
        facturas.push(nuevaFactura);
        alert("Factura creada exitosamente!");
        mostrarFacturas();
    } else {
        alert("Datos inválidos. Por favor intente nuevamente.");
    }
}

function mostrarDatos() {
    mostrarClientes();
    mostrarFacturas();
}


window.onload = mostrarDatos;