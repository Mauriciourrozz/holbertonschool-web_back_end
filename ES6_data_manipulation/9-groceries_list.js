export default function groceriesList() {
  const comida = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
  const cantidad = [10, 10, 1, 1, 5];
  const lista = new Map();

  for (let i = 0; i < comida.length; i += 1) {
    lista.set(comida[i], cantidad[i]);
  }
  return lista;
}
