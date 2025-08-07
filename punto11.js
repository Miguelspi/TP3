function creaDiv() {
    const nuevoDiv = document.createElement("div");
    
    nuevoDiv.textContent = "Javascript permite crear páginas dinámicas";
    
    nuevoDiv.style.color = "white";
    nuevoDiv.style.backgroundColor = "red";
    nuevoDiv.style.textAlign = "center";
   
    document.getElementById("contenedor").appendChild(nuevoDiv);
}