let tree = {
    val: 1,
    sx: {
        val: 2
    },
    dx: {
        val: 3,
        sx: {
            val: 4
        },
        dx: {
            val: 5
        }
    }
}

function anticipata(t) {
    if (!t)
        return
    
    console.log(t.val)
    anticipata(t.sx)
    anticipata(t.dx)
}
// anticipata(tree);

function anticipataArr(t) {
    if (!t)
        return []
    
    // let mio = [t.val] // [1]
    // let asx = anticipataArr(t.sx) // [2]
    // let adx = anticipataArr(t.dx) // [3, 4, 5]

    // return [t.val].concat(anticipataArr(t.sx), anticipataArr(t.dx))

    return [
        t.val,
        ...anticipataArr(t.sx),
        ...anticipataArr(t.dx)
    ]
}
console.log(anticipataArr(tree))

function posticipataArr(t) {
    if (!t)
        return []

    return [
        ...posticipataArr(t.sx),
        ...posticipataArr(t.dx),
        t.val
    ]
}
console.log(posticipataArr(tree))

function simmetricaArr(t) {
    if (!t)
        return []

    return [
        ...simmetricaArr(t.sx),
        t.val,
        ...simmetricaArr(t.dx)
    ]
}
console.log(simmetricaArr(tree))

function massimo(t) {
    if (!t)
        return -Infinity
    
    return Math.max(t.val, massimo(t.sx), massimo(t.dx))
}
console.log(`Massimo: ${massimo(tree)}`)

function somma(t) {
    if (!t)
        return 0
    
    return t.val + somma(t.sx) + somma(t.dx)
}
console.log(`Somma: ${somma(tree)}`)

function contiene(t, v) {
    if (!t)
        return false
    if (t.val == v)
        return true

    return contiene(t.sx, v) || contiene(t.dx, v)
}
console.log(`Contiene 3? ${contiene(tree, 3)}`)

function contaQuanti(t, v) {
    if (!t)
        return 0
    
    // if (t.val == v)
    //     return 1 + contaQuanti(t.sx, v) + contaQuanti(t.dx, v)
    // else
    //     return contaQuanti(t.sx, v) + contaQuanti(t.dx, v)

    return ((t.val == v) ? 1 : 0)
        + contaQuanti(t.sx, v)
        + contaQuanti(t.dx, v)
}

// Scambiare fra di loro i rami destro e sinistro
// della radice di un albero binario
function swapBranchesRadix(t) {
    if (!t)
        return
    
    let tmp = t.sx
    t.sx = t.dx
    t.dx = tmp
    // [t.sx, t.dx] = [t.dx, t.sx]
}
// console.log(anticipataArr(tree))
// swapBranchesRadix(tree)
// console.log(anticipataArr(tree))

// Scambiare fra di loro i rami destro e sinistro
// di un albero binario
function swapBranches(t) {
    swapBranchesRadix(t)

    if (t.sx)
        swapBranches(t.sx)
    
    if (t.dx)
        swapBranches(t.dx)
}
// console.log(anticipataArr(tree))
// swapBranches(tree)
// console.log(anticipataArr(tree))

// Con la copia
function swapBranchesCopy(t) {
    if (!t)
        return null
    
    return {
        val: t.val,
        sx: swapBranchesCopy(t.dx),
        dx: swapBranchesCopy(t.sx),
    }
}
// console.log(anticipataArr(tree))
// console.log(anticipataArr(swapBranchesCopy(tree)))
// console.log(anticipataArr(tree))

// Tagliare da un albero binario tutti i rami
// che iniziano da un nodo con valore dato
function trimTree(t, v) {
    // Così funziona ma non va sulla radice
    // if (!t)
    //     return 

    // if (t.dx && t.dx.val == v)
    //     t.dx = null
    // if (t.sx && t.sx.val == v)
    //     t.sx = null

    // trimTree(t.sx, v)
    // trimTree(t.dx, v)

    if (!t)
        return null
    
    t.sx = trimTree(t.sx, v)
    t.dx = trimTree(t.dx, v)

    return t.val === v ? null : t
}

console.log(anticipataArr(tree))
tree = trimTree(tree, 1)
console.log(anticipataArr(tree))

function anticipataK(t) {
    if (!t)
        return
    
    console.log(t.val)

    for (let i = 0; i < t.figli.length; i++)
        anticipataK(t.figli[i])
}