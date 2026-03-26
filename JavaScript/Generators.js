function f() {
    //codice
    //return
}

function* g() {
    //codice
    //occasionale yield che ritorna il valore e mette in pausa la funzione
    //Una volta richiamata la funzione, rinizia dal punto in cui si era fermata.
}

function* range(a,b) {
    var i = a
    while (i < b) {
        yield i
        i++
    }
}

console.log (range)
let x = range(4,8)
//next() = ritorna lo yield successivo, ritorna un oggetto {value: valore,done: boolean che indica se la sequenza è finita}
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())

//I generatori sono iterabili
var y = range(4,8)
for (let el of y) {
    console.log(el)
}

function* gInp(v) {
    yield v
    yield 3 + (yield 2*v).val
}

let z = gInp(2)
console.log(z.next())
console.log(z.next())
console.log(z.next({val: 7, altro:42}))

function* arrayF() {
    yield [1,2,3]
    yield* [1,2,3]
}
let k = gInp(2)
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())