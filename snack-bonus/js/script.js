// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS

function numeriInclusi(array, a, b) {
  const nuovoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= a && array[i] <= b) {
      nuovoArray.push(array[i]);
    }
  }
  return nuovoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = 3;
const b = 6;

const valoriCompresi = numeriInclusi(array, a, b);
console.log(valoriCompresi);
