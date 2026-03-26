/*
 * Funzione sommaRepdigit(A, b)
 *
 * Calcola la somma di tutti i numeri in un array la cui rappresentazione in una
 * data base è un repdigit (cioè è composta da una sola cifra ripetuta).
 *
 * Un repdigit è un numero la cui rappresentazione in una certa base è composta
 * da una sola cifra ripetuta. Ad esempio:
 * - 222 in base 3 (tutte le cifre sono 2)
 * - 1111 in base 2 (tutte le cifre sono 1)
 *
 * Parametri:
 * - A: array di numeri naturali da analizzare
 * - b: base numerica (deve essere b ∈ ℕ, b > 1)
 *
 * Restituisce:
 * La somma di tutti i numeri in A che sono repdigit in base b
 *
 * Esempi:
 *
 * sommaRepdigit([26, 40, 15, 13], 3) → 79
 * 26 in base 3 è 222 (repdigit), 40 in base 3 è 1111 (repdigit),
 * 15 in base 3 è 120 (non repdigit), 13 in base 3 è 111 (repdigit).
 * Somma: 26 + 40 + 13 = 79
 *
 * sommaRepdigit([7, 10, 15], 2) → 22
 * sommaRepdigit([5, 12, 18], 5) → 30
 *
 * Nota:
 * - Ogni numero di una singola cifra (0-9) è per definizione un repdigit.
 * - Non è consentito l'uso di metodi predefiniti per la conversione di base
 *   (come toString(b) o parseInt). La conversione deve essere implementata
 *   tramite l'algoritmo delle divisioni successive.
 */

function sommaRepdigit(A, b) {
  let somma = 0;

  for (let numero of A) {
    let primaCifra = numero % b;
    let residuo = numero;

    while (residuo > 0) {
      if (residuo % b !== primaCifra) break;

      residuo = Math.floor(residuo / b);
    }

    if (residuo === 0) somma += numero;
  }

  return somma;
}

/*
 * Funzione comparatoreTask(criterio, ascendente)
 *
 * Restituisce una funzione di comparazione utilizzabile con sort() per ordinare
 * un array di oggetti "task" secondo un criterio specificato.
 *
 * Struttura di un oggetto task:
 * - titolo: stringa che descrive il task
 * - id: identificatore univoco del task (stringa)
 * - priorita: numero intero da 1 a 5, dove 5 è la massima priorità
 * - dipendenze: array di stringhe che rappresentano gli id di altri task
 *
 * Parametri:
 * - criterio: stringa che specifica il criterio di ordinamento. Valori possibili:
 *   · "dipendenze": ordina per numero di dipendenze
 *   · "priorita": ordina per priorità
 *   · "id": ordina alfabeticamente per id (default se non specificato)
 *
 * - ascendente: booleano che determina la direzione dell'ordinamento
 *   · true: ordine ascendente/crescente (default se non specificato)
 *   · false: ordine discendente/decrescente
 *
 * Restituisce:
 * Una funzione di comparazione compatibile con Array.sort()
 *
 * Comportamento di default:
 * - Se criterio non è specificato, si applica "id"
 * - Se ascendente non è specificato, si assume true
 */

function comparatoreTask(criterio = "id", ascendente = true) {
  return function (task1, task2) {
    let risultato = 0;

    switch (criterio) {
      case "dipendenze":
        risultato = task1.dipendenze.length - task2.dipendenze.length;
        break;

      case "priorita":
        risultato = task1.priorita - task2.priorita;
        break;

      default:
      case "id":
        risultato = task1.id.localeCompare(task2.id);
        break;
    }

    return ascendente ? risultato : -risultato;
  };
}

/*
 * Funzione unioneParziale(A, n)
 *
 * Restituisce l'insieme di tutti gli elementi che compaiono in almeno n insiemi
 * diversi presenti nell'array A.
 *
 * Parametri:
 * - A: array di insiemi, ciascuno dei quali realizzato come visto a lezione
 * - n: numero naturale che indica in quanti insiemi diversi un elemento deve
 *      comparire per essere incluso nel risultato
 *
 * Restituisce:
 * Un insieme contenente tutti gli elementi che compaiono in almeno n insiemi
 * diversi di A
 *
 * Esempi:
 *
 * A = [{a, b}, {b, c}, {a, c, d}]
 * unioneParziale(A, 2) → {a, b, c}
 * // a compare in 2 insiemi, b compare in 2 insiemi, c compare in 2 insiemi,
 * // d compare in 1 solo insieme
 *
 * unioneParziale(A, 1) → {a, b, c, d}
 * // tutti gli elementi compaiono in almeno 1 insieme
 *
 * unioneParziale(A, 3) → ∅
 * // nessun elemento compare in 3 o più insiemi
 *
 * Nota:
 * Si abbia cura di trattare anche i casi limite (ad esempio n = 0, A vuoto, ecc.)
 */

function unioneParziale(A, n) {
  let unioneP = {};
  let contaElementi = {};

  if (n > 0)
    for (let insieme of A)
      for (let elemento in insieme)
        contaElementi[elemento] = (contaElementi[elemento] || 0) + 1;

  for (let elemento in contaElementi)
    if (contaElementi[elemento] >= n) unioneP[elemento] = 1;

  return unioneP;
}

/*
 * Funzione ricorsiva prodottoFLista(head, f)
 *
 * Calcola il prodotto dei valori dei nodi di una lista concatenata per i quali
 * un predicato f vale true.
 *
 * Parametri:
 * - head: testa della lista concatenata (implementata come visto a lezione)
 * - f: predicato sui nodi della lista. È una funzione che prende in input un
 *      nodo della lista e restituisce un valore booleano
 *
 * Restituisce:
 * Il prodotto dei valori dei nodi per i quali f(node) è true.
 * Restituisce 1 se nessuno dei valori dei nodi soddisfa il predicato f.
 *
 * Esempi:
 *
 * head = [5 → 4 → 12 → null]
 * prodottoFLista(head, (node) => (node.val % 2 == 0)) → 48
 * // f(4) = true, f(12) = true, quindi il prodotto è 4 * 12 = 48
 *
 * head = [3 → 7 → 9 → null]
 * prodottoFLista(head, (node) => (node.val > 5)) → 63
 * // f(7) = true, f(9) = true, quindi il prodotto è 7 * 9 = 63
 *
 * Nota:
 * Se la lista contiene un nodo il cui campo val non è un numero intero, la
 * funzione deve interrompersi e restituire il prodotto calcolato fino a quel
 * punto (escluso).
 *
 */

function prodottoFLista(head, f) {
  if (head == null || !Number.isInteger(head.val)) return 1;

  return (f(head) ? head.val : 1) * prodottoFLista(head.next, f);
}