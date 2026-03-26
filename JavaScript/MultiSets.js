// @ts-nocheck

//initial definement
let fruits = {'apple': 3, 'banana': 2, 'pear': 1}
console.log(fruits)

//functions

function addItemMulti(set,item,amount) {
    if (typeof set == undefined) {
        console.log("Undefined set")
        return
    }
    set[item] = item in set ? set[item] + amount : amount //same thing as writing what's below:
    /*
    if(item in set) {
        set[item] += amount
        return
    }
    set[item] = amount*/
}

function deleteItemMulti(set,item,amount) {
    if (isIn(set,item)) {
        set[item] -= amount
        if(set[item] <= 0) {
            delete set[item]
        }
    }
}

function isIn(set,elemento) {
    return elemento in set //this method stays the same
}

function unionMulti(a,b) {
    let c = {}
    c = {...a} 
    for (let item in b) {
        if (item in c) {
            c[item] += b[item]
        }
        else {
            c[item] = b[item]
        }
    }
    return c
}

function intersection(a,b) {
    if(typeof b == "undefined")
        return a
    let c = {}
    for (let item in a) {
        if (isIn(b,item)) {
            c[item] = 1
        }
    }
    return c
}

function difference(a,b) {
    if(typeof b == "undefined")
        return a
    let c = {}
    for (let item in a) {
        if (!isIn(b,item)) {
            c[item] = 1
        }
    }
    return c
}

function isSubset(a,b) {
    for (let item in a) {
        if (!isIn(b,item)) {
            return false
        }
    }
    return true
}

function isEqual(a,b) {
    return isSubset(a,b) && isSubset(b,a)
}

//Tests



