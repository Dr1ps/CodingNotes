//Funzione che prende un multiset e un predicato e restituisce un subset degli elementi che soddisfano p (string -> bool)
function filteredSet(S, p) {
    let res = {}
    for (let item in S) {
        if (p(item))
            res[item] = S[item]
    }
    return res
}

S = {o: 1, due: 2, tre: 3}
let p = item => item.length < 2 ? true : false
console.log(filteredSet(S,p))

/*
Funzione che restituisce un array con i numeri > p (da sx a dx) la cui somma non supera k (ad una certa si ferma)
*/
function ksumlimit(p,k,...n) { // "...n" mette tutti i parametri successivi in un array n da usare all'interno della funzione
    let res = []
    sum = 0
    for (let item of n) {
        if (item > p) {
            sum += item
            if (sum <= k) {
                res = [...res,item]
            }
            else {
                break;
            }
        }
    }
    return res
}

let array = ksumlimit(3, 20, 5, 10, 4, 8, 1, 7);
console.log(array)

/*
Funzione che prende un array con elementi numerici e restituisce
un nuovo array con in pos 0 il prodotto del minimo e del massimo di A.
in posizione 1 deve avere il prodotto del secondo piu alto e del secondo piu basso, l'array è modificato in place.
*/
function prodEstremi(A) {
    let k = 0
    let i = 0
    for(k;k<Math.ceil(A.length / 2);k++) {
        let min = +Infinity
        let max = -Infinity
        for(i;i<A.length;i++) {
            if (A[i]<min) {
                min = A[i]
                A.splice(i-1,1)
            }
            if (A[i]>max) {
                max = A[i]
                A.splice(i-1,1)
            }
        }
        A.pop()
        A = [max*min,...A]
        i += 1
    }
    return A
}

let A = [2,8,4,1,0]
console.log(prodEstremi(A))

