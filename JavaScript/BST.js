let t = {
    val: 6,
    sx: {
        val: 5,
        sx: {val: 2},
        dx: {val: 5}
    },
    dx: {
        val: 7,
        dx: {val: 8}
    }
}
//Stampa albero binario in ordine (visita)
function abrStampaCrescente(t) {
    if (t) {
        abrStampaCrescente(t.sx)
        console.log(t.val)
        abrStampaCrescente(t.dx)
    }
}
abrStampaCrescente(t)

//Ritorna l'albero sotto forma di array in ordine crescente (... si chiama spread e copia tutti gli elementi di qualcosa in qualcos'altro)
function abrCrescente(t) {
    return t ? [...abrCrescente(t.sx),
        t.val,
        ...abrCrescente(t.dx)
    ] : []
    /*
    let sx = abrCrescente(t.sx)
    let dx = abrCrescente(t.dx)
    sx.push(t.val)
    return sx.concat(dx)
    */
}
console.log(abrCrescente(t))

//Ritorna l'albero sotto forma di array in ordine decrescente 
function abrDecrescente(t) {
    return t ? [...abrDecrescente(t.dx),
        t.val,
        ...abrDecrescente(t.sx)
    ] : []
}
console.log(abrDecrescente(t))

//Ricerca massimo (il nodo più a destra)
function abrMax(t) {
    if (!t)
        return -Infinity
    return t.dx ? abrMax(t.dx) : t.val
}
console.log(abrMax(t))

//Ricerca minimo (il nodo più a sinistra)
function abrMin(t) {
    if (!t)
        return +Infinity
    return t.sx ? abrMin(t.sx) : t.val
}
console.log(abrMin(t))

//Cerca elemento 
function abrCerca(t, v) {
    if (!t)
        return null
    if (t.val == v)
        return t
    return (t.val > v) ? abrCerca(t.sx, v) : abrCerca(t.dx, v)
}
console.log(abrCerca(t, 2))
console.log(abrCerca(t, 4))

//Inserimento nodo
function abrInserisci(t, v) {
    if (!t)
        return {val: v}
    if(v <= t.val)
        t.sx = abrInserisci(t.sx,v)
    else
        t.dx = abrInserisci(t.dx,v)
    return t
}
console.log(abrInserisci(t,1))

//Controlla se l'albero è binario di ricerca
function abrVerifica(t) {
    //???
}