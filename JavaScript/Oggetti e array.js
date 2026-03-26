let pippo = {}
pippo.nome = "Filippo"
pippo.eta = 35
pippo.capelli = true

console.log(pippo.nome)
console.log(pippo.ciao)

if (!("esami" in pippo)) {
    console.log("Non ha ancora sostenuto esami...")
} else {
    console.log(pippo.esami)
}

pippo.esami = { lab1: 30 }

console.log(pippo.esami)
console.log(pippo.esami.lab1)

for (var k in pippo) {
    console.log(k)
    console.log(pippo[k])
}

console.log(pippo.nome)
delete pippo.nome
console.log(pippo.nome)

for (var k in pippo) {
    delete pippo[k]
}
console.log(pippo)

let a = ["ciao", "a", "tutti"]
console.log(a[0])
console.log(a[2])
console.log(a[10])

let b = [, "ciao", , "a", , , , "tutti"] 

console.log(b[0])
console.log(b[1])
console.log(b[2])
console.log(b[3])

let c = [1, 2, 3, 4, 5]
console.log(c.length)

for (let i = 0; i < c.length; i++)
    console.log(c[i])
