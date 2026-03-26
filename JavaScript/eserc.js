/*
ESERCIZIO 1
Scrivere una funzione ordinaStudenti(s) che ha come parametro un array s di oggetti.
Ogni oggetto rappresenta uno studente con due proprietà numeriche: matricola, voto.

La funzione deve ordinare l'array in place (cioè deve modificare l'array originale) secondo questi criteri:
1. Gli studenti con matricola pari devono comparire prima di quelli con matricola dispari.
2. All'interno di ciascun gruppo (pari e dispari), gli studenti devono essere ordinati in ordine crescente di voto.
3. In caso di voto uguale, l’ordinamento deve essere fatto in base alla matricola crescente.

ESEMPIO
Dato l'array 
s = [{ matricola: 3, voto: 25 }, { matricola: 2, voto: 29 }, { matricola: 1, voto: 18 }, 
     { matricola: 4, voto: 20 }, { matricola: 5, voto: 18 }, { matricola: 6, voto: 29 }]

Dopo la chiamata ordinaStudenti(s), l'array s sarà uguale a:
[{ matricola: 4, voto: 20 }, { matricola: 2, voto: 29 }, { matricola: 6, voto: 29 },
 { matricola: 1, voto: 18 }, { matricola: 5, voto: 18 }, { matricola: 3, voto: 25 }]
*/

function ordinaStudenti(s) {
    s.sort((a, b) => {
        let aPari = a.matricola % 2 == 0
        let bPari = b.matricola % 2 == 0
        // ordino prima i pari
        if (aPari != bPari)
            return aPari ? -1 : 1 // se aPari allora a < b
        
        // qui a, b sono entrambi pari o dispari

        // se i voti sono diversi, ordino per voto crescente...
        if (a.voto != b.voto)
            return a.voto - b.voto

        // ...se i voti sono uguali ordino per matricola crescente
        return a.matricola - b.matricola
    })
}

let s = [
    { matricola: 3, voto: 25 }, { matricola: 2, voto: 29 }, { matricola: 1, voto: 18 },
    { matricola: 4, voto: 20 }, { matricola: 5, voto: 18 }, { matricola: 6, voto: 29 }
]

ordinaStudenti(s)
console.log(s)

/* ESERCIZIO 2
Scrivere una funzione ordinaPersone(p) che ha come parametro un array p di oggetti.
Ogni oggetto rappresenta una persona con due proprietà: nome (una stringa), eta (un numero).

La funzione deve ordinare l'array in place (cioè deve modificare l'array originale) secondo questi criteri:
1. In ordine alfabetico crescente per nome.
2. In caso di nomi uguali, in ordine decrescente per eta.

L'ordinamento dei nomi deve essere effettuato utilizzando il metodo localeCompare() disponibile in JavaScript.
Ad esempio, "Pippo".localeCompare("Paola") restituisce il valore positivo 1 ad indicare che "Pippo" viene dopo "Paola".
Si consiglia di consultare la documentazione online di localeCompare() per maggiori dettagli sul suo comportamento.

ESEMPIO
Dato l'array
p = [{nome: "Marta", eta: 22}, {nome: "Marta", eta: 23}, {nome: "Paola", eta: 18}, {nome: "Davide", eta: 19}]
Dopo la chiamata ordinaPersone(p), l'array p sarà uguale a:
[{nome: "Davide", eta: 19}, {nome: "Marta", eta: 23}, {nome: "Marta", eta: 22}, {nome: "Paola", eta: 18}]
*/

function ordinaPersone(p) {
    p.sort((a, b) => {
        let confronto = a.nome.localeCompare(b.nome)
        if (confronto != 0)
            return confronto
        return b.eta - a.eta
    })
}

let p = [{nome: "Marta", eta: 22}, {nome: "Marta", eta: 23}, {nome: "Paola", eta: 18}, {nome: "Davide", eta: 19}]
ordinaPersone(p)
console.log(p)


/* ESERCIZIO 3
Scrivere una funzione applicaNaturali(f, a) che ha come parametri:
1. una funzione f da numeri naturali a numeri naturali;
2. un array a di numeri.

La funzione deve restituire un oggetto con le seguenti proprietà:
• risultati: un array contenente i valori ottenuti applicando f a ciascun elemento di a.
• min: il valore minimo dell’array risultati.
• max: il valore massimo dell’array risultati.

Nota: Se un elemento di a non è un numero naturale, il corrispondente valore in risultati deve essere undefined e non deve concorrere al calcolo di min e max.

ESEMPIO
Il risultato di applicaNaturali(x => x * x, [2, 5, -3, 4, 1.5, 0]) è l'oggetto:
{
  risultati: [4, 25, undefined, 16, undefined, 0],
  min: 0,
  max: 25
}
*/

function applicaNaturali(f, a) {
    let risultati = []
    let min = +Infinity
    let max = -Infinity
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 1 != 0 || a[i] < 0) // In alternativa a a[i] % 1 != 0 si può usare Number.isInteger(a[i])
            risultati.push(undefined)
        else {
            let y = f(a[i])
            risultati.push(y)
            min = y < min ? y : min
            max = y > max ? y : max
        }
    }
    return { risultati, min, max } // forma abbreviata di { risultati: risultati, min: min, max: max}
}

console.log(applicaNaturali(x => x * x, [2, 5, -3, 4, 1.5, 0]))

/* ESERCIZIO 4
Scrivere una funzione trovaCoppieVicini(p, d) che ha come parametro un array p di oggetti e un numero d.
Ogni oggetto rappresenta una persona con due proprietà: nome (una stringa), eta (un numero).

La funzione deve restituire in un array tutte le coppie di nomi di persone la cui differenza di età è minore o uguale a d anni.

ESEMPIO
Se p = [{nome: "Marta", eta: 22}, {nome: "John", eta: 24}, {nome: "Alice", eta: 21}, {nome: "Fabio", eta: 18}, {nome: "Laura", eta: 19}]
allora
trovaCoppieVicini(p, 1) == [["Marta", "Alice"], ["Fabio", "Laura"]]
trovaCoppieVicini(p, 2) == [["Marta", "John"], ["Marta", "Alice"], ["Alice", "Laura"], ["Fabio", "Laura"]]
*/

function trovaCoppieVicini(p, d) {
    let coppie = []
    for (let i = 0; i < p.length; i++) {
        for (let j = i + 1; j < p.length; j++) {
            if (Math.abs(p[i].eta - p[j].eta) <= d) {
                coppie.push([p[i].nome, p[j].nome]);
            }
        }
    }
    return coppie
}

p = [{nome: "Marta", eta: 22}, {nome: "John", eta: 24}, {nome: "Alice", eta: 21}, {nome: "Fabio", eta: 18}, {nome: "Laura", eta: 19}]
console.log(trovaCoppieVicini(p, 1))
console.log(trovaCoppieVicini(p, 2))

/* ESERCIZIO 5
Scrivere una funzione filtraOrdinaCoppie(v), che ha come parametro un array v di coppie numeriche.
Ogni coppia è rappresentata come un array di due numeri, ad esempio: [3, 8].

La funzione deve creare un nuovo array che contiene solo le coppie che soddisfano le seguenti condizioni:
1. Entrambi i valori della coppia sono numeri positivi.
2. La somma dei due numeri è maggiore o uguale a 10.

La funzione deve poi restituire il nuovo array ordinato secondo le seguenti regole:
1. In ordine crescente per la somma dei due numeri.
2. In caso di somma uguale, in ordine crescente per il primo elemento della coppia.

ESEMPIO
filtraOrdinaCoppie([[3, 4], [7, 4], [5, 10], [-2, 12], [6, 4], [10, 1], [8, 2], [-4, -9]])
restituisce [[6, 4], [8, 2], [7, 4], [10, 1], [5, 10]]
*/
function filtraOrdinaCoppie(v) {
    let risultato = []
    for (let i = 0; i < v.length; i++) {
        if (v[i][0] > 0 && v[i][1] > 0 && v[i][0] + v[i][1] >= 10)
            risultato.push(v[i])
    }

    risultato.sort((a, b) => {
        let sommaA = a[0] + a[1]
        let sommaB = b[0] + b[1]
        if (sommaA != sommaB)
            return sommaA - sommaB
        return a[0] - b[0]
    })

    return risultato
}

let v = [
  [3, 4],   // filtrato
  [7, 4],   // somma 11
  [5, 10],  // somma 15
  [-2, 12], // filtrato
  [6, 4],   // somma 10
  [10, 1],  // somma 11
  [8, 2],   // somma 10
  [-4, -9]  // filtrato
]

let vv = filtraOrdinaCoppie(v)
console.log(vv)
