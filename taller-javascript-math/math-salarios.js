const MathSalarios = {};

MathSalarios.calcPromedio = (arr) => {
  const suma = arr.reduce(
    (valorAcumulado, valorNuevo) => valorAcumulado + valorNuevo
  );
  return suma / arr.length;
};

MathSalarios.calcMediana = (arr) => {
  arr = arr.sort((a, b) => a - b);
  const isArrPar = esPar(arr);
  if (isArrPar) {
    const mitadesArr = [];
    const indexFirstMediana = arr.length / 2 - 1;
    mitadesArr.push(arr[indexFirstMediana]);
    const indexLastMediana = arr.length / 2;
    mitadesArr.push(arr[indexLastMediana]);
    return MathSalarios.calcPromedio(mitadesArr);
  } else {
    const indexMedianaArr = Math.floor(arr.length / 2);
    return arr[indexMedianaArr];
  }
};

MathSalarios.calcModa = (arr) => {
  let arrObj = {};
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    !arrObj[element] ? (arrObj[element] = 1) : (arrObj[element] += 1);
  }
  const arrToObj = Object.entries(arrObj);
  const arrOrdered = ordenarArrayListBi(arrToObj, 1);
  const modaArr = arrOrdered[arrOrdered.length - 1];
  return modaArr[0];
};
function esPar(arr) {
  return !(arr.length % 2);
}
function ordenarArrayListBi(arr, i) {
  return arr.sort((a, b) => a[i] - b[i]);
}
