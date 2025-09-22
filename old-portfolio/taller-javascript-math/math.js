console.group("Cuadrado");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado ** 2,
  };
}

console.groupEnd("Cuadrado");

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd("Triangulo");

console.log("%c carlosfalc", "color: blue; font-size: 20px;"); // imprimir con estilos en consola

console.group("circulo");
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const pi = 3.1415;
const circunferencia = diametroCirculo * pi;
const areaCirculo = radioCirculo ** 2 * pi;
console.log({
  radioCirculo,
  diametroCirculo,
  pi,
  circunferencia,
  areaCirculo,
});
function calcularCirculo(radio) {
  return {
    circunferencia: radio * 2 * Math.PI,
    area: Math.pow(radio, 2) * Math.PI,
  };
}
console.log(calcularCirculo(3));
console.groupEnd("circulo");

//altura triangulo isosceles no equilatero reto
console.group("Reto 1 triangulo");
function calcularAlturaTriangulo(lados, base) {
  if (lados == base) {
    return console.error("Tas mal flaco, no es un triangulo isosceles");
  } else {
    return Math.sqrt(lados ** 2 - base ** 2 / 4);
  }
}
console.log(calcularAlturaTriangulo(4, 6));
console.log(calcularAlturaTriangulo(5, 5));
console.group("Reto 1 triangulo");

//reto altura triangulo escaleno
console.group("Reto 2 triangulo");
function solution(lado1, lado2, lado3) {
  if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    return false;
  } else {
    const S = (lado1 + lado2 + lado3) / 2;
    return Math.round(
      (2 / lado1) * Math.sqrt(S * (S - lado1) * (S - lado2) * (S - lado3))
    );
  }
}
console.log(solution(7, 5, 6));
console.group("Reto 2 triangulo");

// [p * (100 - D)] / 100
