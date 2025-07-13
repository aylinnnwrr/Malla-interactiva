function mostrarInfo(ramo) {
  const info = {
    matematica: "Matemáticas I: Álgebra, funciones, ecuaciones.",
    programacion: "Programación: Lógica, estructuras, Python básico."
  };

  const infoDiv = document.getElementById("infoRamo");
  infoDiv.style.display = "block";
  infoDiv.innerHTML = `<strong>${ramo}</strong><br>${info[ramo] || 'Información no disponible'}`;
}
function mostrarInfo(ramo) {
  const info = {
    principiosMat: "Principios Matemáticos: álgebra y fundamentos matemáticos.",
    fundAnatMovHum: "Fundamentos de Anatomía para el Movimiento Humano: bases morfo‑funcionales.",
    bioCelular: "Biología Celular: estructura y función celular.",
    fundMovHum: "Fundamentos del Movimiento Humano: conceptos introductorios.",
    tallerComunic: "Taller de Competencias Comunicativas: expresión escrita y oral.",
    tallerAprendizaje: "Taller de Competencias para el Aprendizaje: técnicas de estudio.",
    anatomiaFisio: "Anatomía y Fisiología: estructura y función del cuerpo humano.",
    actiFisSalud: "Actividad Física y Salud: ejercicio como herramienta de bienestar.",
    fisTisBiofisica: "Fisiología de Tejidos y Biofísica: funcionalidad tisular.",
    quimica: "Química: fundamentos de química general y orgánica.",
    culturaValores: "Cultura y Valores: perspectiva ética profesional.",
    tallerDesarrollo1: "Taller de Desarrollo Personal I: autoconocimiento.",
    estadistica: "Estadística para Ciencias de la Salud: análisis de datos.",
    fisioFarmaco: "Fisiopatología y Farmacología: procesos y medicamentos.",
    fisArticular: "Fisiología Articular: estabilidad y movilidad articular.",
    desPsicomotor: "Desarrollo Psicomotor Normal y Patológico: etapas y diagnósticos.",
    bioquimica: "Bioquímica: metabolismo y reacciones bioquímicas.",
    ingles1: "Inglés Básico I: lenguaje técnico en salud.",
    saludPublica: "Fundamentos de Salud Pública: promoción y prevención.",
    bioControlMotor: "Biomecánica y Control Motor: movimiento humano y control neuromuscular.",
    personaSentido: "Persona y Sentido: aspectos humanísticos en salud.",
    semiologia: "Semiología Kinésica e Imagenología: diagnóstico por imagen.",
    tallerDesarrollo2: "Taller de Desarrollo Personal II: habilidades de autocuidado.",
    ingles2: "Inglés Básico II: continuidad del lenguaje en salud.",
    fisioterapiaEjercicio: "Fisioterapia y Ejercicio Terapéutico: técnicas de intervención.",
    fisiologiaEjercicio: "Fisiología del Metabolismo Energético y del Ejercicio.",
    prehospitalariaAux: "Atención Prehospitalaria y Primeros Auxilios.",
    gestionSalud: "Gestión en Salud: administración de servicios kinésicos.",
    gerontologia: "Gerontología: envejecimiento y cuidados al adulto mayor.",
    rehabFamiliar: "Rehabilitación en Salud Familiar y Comunitaria.",
    rehabLocomotorInfantil: "Rehabilitación del Sistema Locomotor Infantil.",
    rehabCardioInfantil: "Rehabilitación Cardiorespiratoria Infantil.",
    prescripEjercPacCrónicos: "Prescripción de Ejercicio en Pacientes Crónicos.",
    eticaSalud: "Ética en Salud: principios y dilemas profesionales.",
    neuroRehabInfantil: "Neurorehabilitación Infantil.",
    rehabGeriatrica: "Rehabilitación Geriátrica.",
    rehabLocomotorAdulto: "Rehabilitación del Sistema Locomotor Adulto.",
    rehabCardioAdulto: "Rehabilitación Cardiorespiratoria Adulto.",
    investigacionMetodologia: "Metodología de la Investigación en Kinesiología.",
    rehabDeportiva: "Rehabilitación Deportiva.",
    neuroRehabAdulto: "Neurorehabilitación Adulto.",
    saludOcupacional: "Salud Ocupacional: ergonomía y prevención.",
    rehabCondEspeciales: "Rehabilitación en Condiciones Especiales de Salud.",
    tratamientoCritico: "Tratamiento Kinésico del Paciente Crítico.",
    seminarioInvestigacion: "Seminario de Investigación: proyecto final.",
    razonamientoClinico: "Razonamiento Clínico: análisis de casos.",
    electivo3: "Electivo III: asignatura optativa.",
    internadoProfesional1: "Internado Profesional I: práctica clínica supervisada.",
    internadoProfesional2: "Internado Profesional II: práctica final y continuidad."
  };

  const infoDiv = document.getElementById("infoRamo");
  infoDiv.style.display = "block";
  infoDiv.innerHTML = `<strong>${ramo}</strong><br>${info[ramo] || 'Información no disponible.'}`;
}
