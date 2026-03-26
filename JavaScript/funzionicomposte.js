for (let i = 0; i < 2; i++) {
    for (let i = 5; i < 10; i++) {
        console.log(`Dentro ${i}`);
    }
    console.log(`Fuori ${i}`)
}

var x = 1

function f() {
  console.log(x)
  for (var i = 0; i < 10; i++) {
    let x = i * 2
    g(x + 1)
  }

  function g(n) {
    let f = x => 2 * x
    console.log(f(n))
  }
}

console.log(x)
f()
console.log(x + 10)

let f2 = f => x => 2 * f(x)

let myF = f2(Math.sqrt)
let myF1 = f2(Math.sin)

console.log(myF(9))

function componi(f, g) {
    let ret = function(x) {
        return f(g(x))
    }
    return ret
}

let radice_super_quadrata = componi(Math.sqrt, Math.sqrt)
let radice_tangenziale = componi(Math.sqrt, Math.tan)

console.log(radice_super_quadrata(10))
console.log(radice_tangenziale(10))

let stella = s => `*****${s}*****`

let stellami = componi(console.log, stella)

stellami("Tommaso")

let superstellami = componi(stellami, stella)

superstellami("Tommaso")
