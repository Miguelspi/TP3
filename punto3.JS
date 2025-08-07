function Saludar() {
        const nombre = document.getElementById("nombreInput").value;
    
        if (nombre === "") {
        alert("Por favor escribe tu nombre");
        return; 
    }
    
    document.getElementById("resultado").textContent = "¡Hola " + nombre + "!";
    
    document.getElementById("nombreInput").value = "";
}