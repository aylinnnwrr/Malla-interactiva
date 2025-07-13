function mostrarInfo(ramo) {
  const info = {
    matematica: "Matemáticas I: Álgebra, funciones, ecuaciones.",
    programacion: "Programación: Lógica, estructuras, Python básico."
  };

  const infoDiv = document.getElementById("infoRamo");
  infoDiv.style.display = "block";
  infoDiv.innerHTML = `<strong>${ramo}</strong><br>${info[ramo] || 'Información no disponible'}`;
}
const info = {
  principiosMat: "Principios Matemáticos: Álgebra y fundamentos matemáticos.",
  fundAnatMovHum: "Fundamentos Anatomía Movimiento Humano: bases morfo-funcionales.",
  bioCelular: "Biología Celular: estructura y función celular.",
  fundMovHum: "Fundamentos Movimiento Humano: introducción general.",
  tallerComunic: "Taller de Competencias Comunicativas.",
  tallerAprendizaje: "Taller de Competencias para el Aprendizaje.",
  anatomiaFisio: "Anatomía/Fisiología: estructura y función del cuerpo.",
  actiFisSalud: "Actividad Física y Salud: ejercicio y bienestar.",
  fisTisBiofisica: "Fisiología de Tejidos y Biofísica: funcionalidad tisular.",
  quimica: "Química: bases químicas orgánicas e inorgánicas.",
  culturaValores: "Cultura y Valores: aspectos éticos.",
  tallerDesarrollo1: "Taller Desarrollo Personal I.",
  estadistica: "Estadística: aplicación en ciencias de la salud.",
  fisioFarmaco: "Fisiopatología y Farmacología: enfermedades y fármacos.",
  fisArticular: "Fisiología Articular: articulaciones y movilidad.",
  desPsicomotor: "Desarrollo Psicomotor: infantil y patológico.",
  bioquimica: "Bioquímica: procesos metabólicos.",
  ingles1: "Inglés Básico I.",
  saludPublica: "Fundamentos Salud Pública.",
  bioControlMotor: "Biomecánica y Control Motor.",
  personaSentido: "Persona y Sentido: aspectos humanísticos.",
  semiologia: "Semiología Kinésica e Imagenología.",
  tallerDesarrollo2: "Taller Desarrollo Personal II.",
  ingles2: "Inglés Básico II."
};
