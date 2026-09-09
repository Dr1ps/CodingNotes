function esempio(par) {
    let x = 10
    let y = 20

    f1() // -> metto in pila { x: 10, y: 20 }
    // appena ritorna ripristino { x: 10, y: 20 }
    
    x = 30

    f2() // -> metto in pila { x: 30, y: 20 }
    // appena ritorna ripristino { x: 30, y: 20 }

    y = 40

    return
}

function fibonacci(n) {
    if (n < 0) return 0

    if ((n == 0) || (n == 1)) return n

    return fibonacci(n-1) + fibonacci(n-2)
}

// for (let i = 0; i < 10; i++)
//     console.log(fibonacci(i))

fibonacci(-1)

function fattoriale(n) {
    if ((n == 0) || (n == 1)) return 1

    return n * fattoriale(n-1)
}


// Esercizio 1
function stampaCifreRec(n) {
    if (n < 10)
        console.log(n)
    else {
        console.log(n%10)
        stampaCifreRec(Math.floor(n/10))
    }
}

// stampaCifreRec(2)
// stampaCifreRec(102)
// stampaCifreRec(148234)
// stampaCifreRec(9203493248)

function arrayCifreRec(n) {
    if (n < 10)
        return [n]
    
    let arrCifre = arrayCifreRec(Math.floor(n/10))
    arrCifre.push(n%10)
    return arrCifre

    // let arrCifre = [n%10]
    // return arrCifre.concat(arrayCifreRec(Math.floor(n/10)))
}

// console.log(arrayCifreRec(2))
// console.log(arrayCifreRec(102))
// console.log(arrayCifreRec(148234))
// console.log(arrayCifreRec(9203493248))

function arrayCifreRecCoda(n, arr = []) {
    
    arr.unshift(n%10)
    if (n > 9)
        return arrayCifreRecCoda(Math.floor(n/10), arr)

    return arr
}

console.log(arrayCifreRecCoda(2))
console.log(arrayCifreRecCoda(102))
console.log(arrayCifreRecCoda(148234))
console.log(arrayCifreRecCoda(9203493248))