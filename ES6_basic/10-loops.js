export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array]; // Se hace una copia del array para evitar modificar el original
  for (const value of newArray) {
    newArray[value] = appendString + value;
  }
  return newArray;
}
