function mostrarInfo(ramo) {
  const info = {
    matematica: "Matemáticas I: Álgebra, funciones, ecuaciones.",
    programacion: "Programación: Lógica, estructuras, Python básico."
  };

  const infoDiv = document.getElementById("infoRamo");
  infoDiv.style.display = "block";
  infoDiv.innerHTML = `<strong>${ramo}</strong><br>${info[ramo] || 'Información no disponible'}`;
}
