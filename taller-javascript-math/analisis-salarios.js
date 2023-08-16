const personMedianaName = document.querySelector("#mediana-de-persona");
const personMedianaNameBtn = document.querySelector(".mediana-de-persona");
const personMedianaNameRes = document.querySelector(
  ".mediana-de-persona-resultado"
);
const personProyecName = document.querySelector("#proyeccion-de-persona");
const personProyecNameBtn = document.querySelector(".proyeccion-de-persona");
const personProyecNameRes = document.querySelector(
  ".proyeccion-de-persona-resultado"
);
const medianaEmpresaName = document.querySelector("#mediana-de-empresa");
const medianaEmpresaNameBtn = document.querySelector(".mediana-de-empresa");
const medianaEmpresaNameRes = document.querySelector(
  ".mediana-de-empresa-resultado"
);
const medianaEmpresaYear = document.querySelector("#mediana-de-empresa-year");
const empresaProyecName = document.querySelector(
  "#proyeccion-de-empresa-salario"
);
const empresaProyecNameBtn = document.querySelector(
  ".proyeccion-de-empresa-salario"
);
const empresaProyecNameRes = document.querySelector(
  ".proyeccion-de-empresa-salario-resultado"
);
const medianaPaisNameBtn = document.querySelector(".mediana-de-pais");
const medianaPaisNameRes = document.querySelector(".mediana-de-pais-resultado");
const medianaPaisTopBtn = document.querySelector(".mediana-top-pais");
const medianaPaisTopRes = document.querySelector(".mediana-top-pais-respuesta");
const newPersonName = document.querySelector("#name");
const newPersonCi = document.querySelector("#ci");
const newPersonYear = document.querySelector("#year");
const newPersonEmpresa = document.querySelector("#empresa");
const newPersonSalario = document.querySelector("#salario");

function findPerson(ciPerson) {
  return salarios.find((person) => person.ci === ciPerson);
}
function medianaForPerson(ciPerson) {
  for (salario of salarios) {
    if (salario.ci != ciPerson) {
      personMedianaNameRes.innerText += `El número ingresado no está en el sistema`;
      return;
    } else {
      const name = findPerson(ciPerson).name;
      const jobs = findPerson(ciPerson).trabajos;
      const salarios = jobs.map((job) => job.salario);
      const mediana = MathSalarios.calcMediana(salarios);
      personMedianaNameRes.innerText += `La mediana de ${name} es ${mediana}`;
      return mediana;
    }
  }
}
personMedianaNameBtn.addEventListener("click", () =>
  medianaForPerson(parseInt(personMedianaName.value))
);

function proyeccionForPerson(ciPerson) {
  for (salario of salarios) {
    if (salario.ci != ciPerson) {
      personProyecNameRes.innerText += `El número ingresado no está en el sistema`;
      return;
    }
    const name = findPerson(ciPerson).name;
    const jobs = findPerson(ciPerson).trabajos;
    let porcentajeDeCrecimiento = [];
    for (let j = 1; j < jobs.length; j++) {
      const jobToEnter = jobs[j].salario;
      const jobToLeave = jobs[j - 1].salario;
      const variableSalary = jobToEnter - jobToLeave;
      const porcentajeDeCrecimientoAnual = variableSalary / jobToLeave;
      porcentajeDeCrecimiento.push(porcentajeDeCrecimientoAnual);
    }
    const medianaDePorcentajes = MathSalarios.calcMediana(
      porcentajeDeCrecimiento
    );
    const nuevoSalario = Math.floor(
      jobs[jobs.length - 1].salario +
        medianaDePorcentajes * jobs[jobs.length - 1].salario
    );
    personProyecNameRes.innerText += `La proyeccion del nuevo salario para ${name} es ${nuevoSalario}`;
    return nuevoSalario;
  }
}
personProyecNameBtn.addEventListener("click", () =>
  proyeccionForPerson(parseInt(personProyecName.value))
);
//Análisis por empresa
const empresas = {};
for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }
    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

function medianaForEmpresa(name, year) {
  if (!empresas[name]) {
    medianaEmpresaNameRes.innerText += "La empresa no existe";
    console.warn("La empresa no existe");
  } else if (!empresas[name][year]) {
    medianaEmpresaNameRes.innerText += "No hay registro del salario";
    console.warn("No hay registro del salario");
  } else {
    medianaEmpresaNameRes.innerText += `La mediana de la empresa ${name} es ${MathSalarios.calcMediana(
      empresas[name][year]
    )}`;
    return MathSalarios.calcMediana(empresas[name][year]);
  }
}
medianaEmpresaNameBtn.addEventListener("click", () =>
  medianaForEmpresa(
    medianaEmpresaName.value,
    parseInt(medianaEmpresaYear.value)
  )
);

function proyeccionSalariosPorEmpresa(nombre) {
  if (!empresas[nombre]) {
    empresaProyecNameRes.innerText += "La empresa no existe";
    console.warn("La empresa no existe");
  } else {
    const empresaPorYear = Object.keys(empresas[nombre]);
    const medianaPorYear = empresaPorYear.map((year) => {
      return medianaForEmpresa(nombre, year);
    });
    let porcentajeDeCrecimiento = [];
    for (let j = 1; j < medianaPorYear.length; j++) {
      const jobToEnter = medianaPorYear[j];
      const jobToLeave = medianaPorYear[j - 1];
      const variableSalary = jobToEnter - jobToLeave;
      const porcentajeDeCrecimientoAnual = variableSalary / jobToLeave;
      porcentajeDeCrecimiento.push(porcentajeDeCrecimientoAnual);
    }
    const medianaDePorcentajes = MathSalarios.calcMediana(
      porcentajeDeCrecimiento
    );
    const nuevoSalario = Math.floor(
      medianaPorYear[medianaPorYear.length - 1] +
        medianaDePorcentajes * medianaPorYear[medianaPorYear.length - 1]
    );
    console.log(nuevoSalario);
    empresaProyecNameRes.innerText += `La proyección de slario para la empresa ${nombre} este nuevo año es de ${nuevoSalario}`;
    return nuevoSalario;
  }
}
empresaProyecNameBtn.addEventListener("click", () =>
  proyeccionSalariosPorEmpresa(empresaProyecName.value)
);
//analisis general
function medianaGeneral() {
  // const medianaPeople = salarios.map((person)=>medianaForPerson(person.ci));
  const medianaPeople = salarios.map((person) => mediana(person.ci));
  medianaPaisNameRes.innerText += `La mediana general es ${MathSalarios.calcMediana(
    medianaPeople
  )}`;
  return MathSalarios.calcMediana(medianaPeople);
}

medianaPaisNameBtn.addEventListener("click", () => medianaGeneral());

function medianaTopTen() {
  const medianaPeople = salarios.map((person) => mediana(person.ci));
  medianaPeople.sort((a, b) => a - b);
  const cantidadDeElementosAnalisis = Math.round(medianaPeople.length / 10);
  const limite = medianaPeople.length - cantidadDeElementosAnalisis;
  const topTen = medianaPeople.slice(limite, medianaPeople.length);

  // slice copia y no altera el arreglo inicial
  // splice corta el arreglo inicial
  medianaPaisTopRes.innerText += `La media del top ten en el país es ${MathSalarios.calcMediana(
    topTen
  )}`;
  return MathSalarios.calcMediana(topTen);
}
medianaPaisTopBtn.addEventListener("click", () => medianaTopTen());
function mediana(ciPerson) {
  const name = findPerson(ciPerson).name;
  const jobs = findPerson(ciPerson).trabajos;
  const salarios = jobs.map((job) => job.salario);
  const mediana = MathSalarios.calcMediana(salarios);
  return mediana;
}
function formSubmitted(event) {
  event.preventDefault();
  salarios.map((salario) => {
    let foundPerson = salarios.find(
      (person) => person.name === newPersonName.value
    );

    if (!foundPerson) {
      salarios.push({
        name: newPersonName.value,
        ci: parseInt(newPersonCi.value),
        trabajos: [
          {
            year: parseInt(newPersonYear.value),
            empresa: newPersonEmpresa.value,
            salario: parseInt(newPersonSalario.value),
          },
        ],
      });
    } else {
      let yearExists = foundPerson.trabajos.some(
        (trabajo) => trabajo.year === parseInt(newPersonYear.value)
      );

      if (!yearExists) {
        foundPerson.trabajos.push({
          year: parseInt(newPersonYear.value),
          empresa: newPersonEmpresa.value,
          salario: parseInt(newPersonSalario.value),
        });
      }
    }
  });
  newPersonCi.value = "";
  newPersonEmpresa.value = "";
  newPersonName.value = "";
  newPersonSalario.value = "";
  newPersonYear.value = "";
  return;
}
