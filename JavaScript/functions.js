for (let x = -10; x <= 10; x += 0.1)
    console.log(`f(${x}) = ${x*x}`)

let min = +Infinity, max = -Infinity;

for (let x = 1; x <= 4; x += 0.01) {
    let fx = x**3 - 6*x**2 + 11*x - 6
    // let fx = 2 * x**2 + 3 * x + 1
    if (Math.abs(fx) < 1e-6) {
        console.log(`Trovato uno zero in ${x}`)
    }

    min = fx < min ? fx : min
    max = fx > max ? fx : max
}

console.log(`Minimo: ${min} - Massimo: ${max}`)

let raddoppia = x => x*2
let x = 15

console.log(raddoppia(x+1))

let prossimopari = (x) => {
    if (x % 2 == 0)
        return x + 2
    else
        return x + 1
}

let somma = (a, b, c) => a+b+c

console.log(prossimopari(77))

let cinque = () => {
    console.log("Sono nella funzione!")
    return 5
    // console.log("E qui??")
}

let sei = cinque

// console.log(sei(), cinque())

// let fun = x => 21

// let fun = function(x) {
//     return 21
// }
// function fun(x) {
//     return 21
// }

let stampatore = { stampami: console.log }
stampatore.stampami("Ciaoooooo")

let f = function somma(a, b) {
    return a + b
}
console.log(f(7,9))

let a = 1
console.log(((a, b) => a+b)(3*6, 8))

// console.log(5(7))

function replace(arr, target, replacement) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        // if (arr[i] === target)
        //     result.push(replacement)
        // else
        //     result.push(arr[i])
        result.push(arr[i] === target ? replacement : arr[i])
    }
    return result
}
