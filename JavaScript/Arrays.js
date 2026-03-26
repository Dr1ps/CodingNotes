
//Function max that returns the maximum value in the array "a" (recursive)
function max(a) {
    //The 3 dots is a spread, it copies the element of an array somewhere else or allows the opposite
    let [primo, ...resto] = a

    if (typeof primo == "undefined")
        return -Infinity
    //If the fist element is the only one then it's the max
    if (resto.length == 0)
        return primo

    return Math.max(primo, max(resto))
}

//Same function as above, but for the minimum value
function min(a) {
    let [primo, ...resto] = a

    if (typeof primo == "undefined")
        return Infinity

    if (resto.length == 0)
        return primo

    return Math.min(primo, min(resto))
}



//Finds maximum and minimum in an array and returns it as a couple of values (array)
function maxmin(a) {
    let [primo, ...resto] = a

    if (typeof primo == "undefined")
        return [-Infinity, Infinity]

    if (resto.length == 0)
        return [primo, primo]

    let [rmax, rmin] = maxmin(resto)
    return [Math.max(primo, rmax), Math.min(primo, rmin)]
}

//Test logs for the functions above
//Array initialization
let arr = [1, 2, 3, 40, 5, 6, -10]
console.log("Array: " + arr)
//Max and min functions test log
console.log("Max: " + max(arr), "Min: " + min(arr))
//Maxmin function test log
console.log("Max & Min: " + maxmin(arr))

console.log(a.filter(x => x > 3))

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

console.log([1, 2, 3, 4].map(v => v * 2))

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
    { raggio = 0, colore = "nero", bordo = 1, etichetta = "" }) {
    /* codice di disegno; usa x,y, raggio, colore, bordo, etichetta  */
}
// function disegna(x, y, parametri ) {
//     const { raggio=0, colore="nero", bordo=1, etichetta="" }
//      = parametri
// }
