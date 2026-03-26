// @ts-nocheck

//initial definement
let emptySet = {} 
let fruits = {'apple': 1, 'banana': 1, 'pear': 1}
console.log(fruits)

//functions

function addItem(set,item) {
    if (typeof set == undefined) {
        console.log("Undefined set")
        return
    }
    set[item] = 1
}

function deleteItem(set,item) {
    if (isIn(set,item)) {
        delete set[item]
        //insieme[elemento] = undefined -> not good
    }
}

function isIn(set,elemento) {
    return elemento in set
}

function union(a,b) {
    let c = {}
    c = {...a,...b} //"..." = spread, adds all items from a and b (copies), this notation does the stuff below:
    /*for(let item in a) {
        C[item] = 1
    }
    for(let item in b) {
        C[item] = 1
    }*/
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

//Trying to add an already existing item only updates it
addItem(fruits,'apple')
//This adds a new element
addItem(fruits,'grapes')
//This adds an undefined keyed item
addItem(fruits)

console.log(fruits)

//This adds the element watermelon and gets rid of the extra parameter
addItem(fruits,'watermelon',10)

console.log(fruits)


