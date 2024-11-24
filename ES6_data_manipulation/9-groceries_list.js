export default function groceriesList() {
    const comida = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
    const cantidad = [10, 10, 1, 1, 5];
    const lista = new Map();

    for (let i in comida) {
        lista.set(comida[i], cantidad[i]);
    }
    return lista;
}