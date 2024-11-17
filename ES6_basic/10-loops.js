export default function appendToEachArrayValue(array, appendString) {
  const nuevoArray = []; // creamos el array vacio
  for (const value of array) { // value toma cada valor del array que se pasa
    nuevoArray.push(appendString + value); // se concatena value + appenString
    // y se guarda en nuevoarray mediante metodo push
  }

  return nuevoArray; // se retorna el nuevo array
}
