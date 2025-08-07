// Clase Proveedor
class Proveedor {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

// Clase Articulo
class Articulo {
    constructor(nombre, proveedor, precio) {
        this.nombre = nombre;
        this.proveedor = proveedor;
        this.precio = precio;
    }
    
    telefonoProveedor() {
        return {
            nombre: this.proveedor.nombre,
            telefono: this.proveedor.telefono
        };
    }
}

// Base de datos inicial
const proveedores = [
    new Proveedor("Tecnología S.A.", "ventas@tecnologia.com", "555-1001"),
    new Proveedor("Suministros Rápidos", "contacto@suministros.com", "555-2002")
];

const articulos = [
    new Articulo("Teclado Inalámbrico", proveedores[0], 25.99),
    new Articulo("Mouse Gamer", proveedores[1], 35.50)
];

// Función para mostrar proveedores
function mostrarProveedores() {
    const contenedor = document.getElementById("listaProveedores");
    contenedor.innerHTML = "<ul>";
    
    proveedores.forEach((proveedor, index) => {
        contenedor.innerHTML += `
            <li><strong>${index}</strong>. ${proveedor.nombre} - ${proveedor.email} - Tel: ${proveedor.telefono}</li>
        `;
    });
    contenedor.innerHTML += "</ul>";
}

// Función para mostrar artículos
function mostrarArticulos() {
    const contenedor = document.getElementById("listaArticulos");
    contenedor.innerHTML = "<ul>";
    
    articulos.forEach((articulo, index) => {
        const contacto = articulo.telefonoProveedor();
        contenedor.innerHTML += `
            <li><strong>${index}</strong>. ${articulo.nombre} - $${articulo.precio.toFixed(2)} 
            | Proveedor: ${contacto.nombre} (Tel: ${contacto.telefono})</li>
        `;
    });
    contenedor.innerHTML += "</ul>";
}

// Función para agregar proveedor
function agregarProveedor() {
    try {
        const nombre = document.getElementById("provNombre").value.trim();
        const email = document.getElementById("provEmail").value.trim();
        const telefono = document.getElementById("provTelefono").value.trim();
        
        if (!nombre || !email || !telefono) {
            throw new Error("Por favor complete todos los campos del proveedor");
        }
        
        if (!email.includes("@") || !email.includes(".")) {
            throw new Error("Por favor ingrese un email válido");
        }
        
        const nuevoProveedor = new Proveedor(nombre, email, telefono);
        proveedores.push(nuevoProveedor);
        mostrarProveedores();
        limpiarCamposProveedor();
        document.getElementById("artProvId").max = proveedores.length - 1;
    } catch (error) {
        alert(error.message);
    }
}

// Función para agregar artículo
function agregarArticulo() {
    try {
        const nombre = document.getElementById("artNombre").value.trim();
        const precio = parseFloat(document.getElementById("artPrecio").value);
        const provId = parseInt(document.getElementById("artProvId").value);
        
        if (!nombre || isNaN(precio)) {
            throw new Error("Por favor complete todos los campos del artículo");
        }
        
        if (isNaN(provId)) {
            throw new Error("Por favor ingrese un ID de proveedor válido");
        }
        
        if (provId < 0 || provId >= proveedores.length) {
            throw new Error(`ID de proveedor inválido. Use un valor entre 0 y ${proveedores.length - 1}`);
        }
        
        const nuevoArticulo = new Articulo(nombre, proveedores[provId], precio);
        articulos.push(nuevoArticulo);
        mostrarArticulos();
        limpiarCamposArticulo();
    } catch (error) {
        alert(error.message);
    }
}

// Funciones auxiliares
function limpiarCamposProveedor() {
    document.getElementById("provNombre").value = "";
    document.getElementById("provEmail").value = "";
    document.getElementById("provTelefono").value = "";
}

function limpiarCamposArticulo() {
    document.getElementById("artNombre").value = "";
    document.getElementById("artPrecio").value = "";
    document.getElementById("artProvId").value = "";
}

// Inicializar la vista
window.onload = function() {
    mostrarProveedores();
    mostrarArticulos();
    document.getElementById("artProvId").max = proveedores.length - 1;
};