// let a = [1, 2]
// a.pippo = "ciao"
// a.length

// console.log(a.pippo)

function max(a) {
    let [primo, ...resto] = a
    
    if (typeof primo == "undefined")
        return -Infinity
    
    if (resto.length == 0)
        return primo
    
    return Math.max(primo, max(resto))
}

function min(a) {
    let [primo, ...resto] = a
    
    if (typeof primo == "undefined")
        return Infinity
    
    if (resto.length == 0)
        return primo
    
    return Math.min(primo, min(resto))
}
console.log(
    max([1, 2, 3, 40, 5, 6, -10]),
    min([1, 2, 3, 40, 5, 6, -10]))

function maxmin(a) {
    let [primo, ...resto] = a
    
    if (typeof primo == "undefined")
        return [-Infinity, Infinity]
    
    if (resto.length == 0)
        return [primo, primo]
    
    let [rmax, rmin] = maxmin(resto)
    return [Math.max(primo, rmax), Math.min(primo, rmin)]
}

console.log(maxmin([1, 2, 3, 40, 5, 6, -10]))

function sommaLista(head) {
    // head.val
    // head.next
}
function sommaLista(a) {
    let [val, ...next] = a
    // head.val
    // head.next
}

function sommaListaCoda(a) {
    let val = a.pop()
    // next -> a
    // head.val
    // head.next
}


console.log([1, 2, 3, 40, 5, 6, -10].filter(x => x > 3))

console.log(["1", "2", "3"].includes(3))
console.log(["1", "2", "3"].some(x => x === 3))
console.log(["1", "2", "3"].some(x => x == 3))

for (let a of [1, 2, 3, 4])
    console.log(a);

let counter = 0;
[1, 2, 3, 4].forEach(a => {
    console.log(a);
    counter += 1;
})
console.log(counter);


function raddoppia(v) {
    return v * 2
}

console.log([1, 2, 3, 4].map(v => v*2))

console.log([1, 2, 3, 4].map(raddoppia))

console.log([1, 2, 3, 4].forEach(a => raddoppia))

console.log([1, 2, 3, 4].reduce(
    (acc, curr) => acc * curr, 1));

let kvs = [["nome", "Tommaso"], ["eta", 38]]

let dati = kvs.reduce(
    (acc, curr) => {
        let [k, v] = curr;
        acc[k] = v;
        return acc;
    }, {})

let { nome, eta } = dati

console.log(`Ti chiami ${nome} e hai ${eta} anni`)

// { a: età, b: bimbi=0 } = O
// let eta = O.a
// let bimbi = O.b || 0

function disegna(x, y,
    { raggio=0, colore="nero", bordo=1, etichetta="" } )
{ 
/* codice di disegno; usa x,y, raggio, colore, bordo, etichetta  */
}
// function disegna(x, y, parametri ) {
//     const { raggio=0, colore="nero", bordo=1, etichetta="" }
//      = parametri
// }
