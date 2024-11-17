export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array]; // se hace una copia de array para evitar modificar el original
  for (const [idx, value] of newArray.entries()) {
    newArray[idx] = appendString + value; // newArray es la variable que
    // creamos para no afectar la original
  }
  return newArray;
}
