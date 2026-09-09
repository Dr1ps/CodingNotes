let l1 = { val: 1,
             next: {
                    val: 2,
                    next: {
                        val: 3,
                        next: {
                            val: 4,
                            next: null
                        }
                    }
                }
            };

// console.log(l1);

// stampiamo la funzione "alla javascript"
function listPrint(head) {
    if (head == null) {
        console.log("FINE.")
        return
    }

    console.log(head.val)
    listPrint(head.next)
}

// listPrint(l1)

function listPrintIterativa(head) {
    let n = head

    while (n !== null) {
        console.log(n.val)
        n = n.next
    }

    console.log("FINE (iterazioni).")
}

// console.log(l1)
// listPrintIterativa(l1)
// console.log(l1)


function listPrintReversed(head) {
     if (head == null) {
        return
    }

    listPrintReversed(head.next)
    console.log(head.val)
}

// listPrintReversed(l1)

function listFind(head, value) {
    if (!head)
        return null

    if (head.val === value)
        return head

    return listFind(head.next, value)
}

// console.log(listFind(l1, 9))
// console.log(listFind(l1, "2"))

function listPush(head, value) {
    if (head.next == null) {
        head.next = { val: value, next: null };
        return
    }

    listPush(head.next, value);
}


// listPrint(l1)
// listPush(l1, 5)
// listPrint(l1)

function listShift(head) {
    if (!head)
        return [null, undefined]
    
    return [head.next, head.val];
}

let l1SenzaTesta = listShift(l1)[0]
// listPrint(l1SenzaTesta)
let l1SenzaTestaSenzaTesta = listShift(l1SenzaTesta)[0]
// listPrint(l1SenzaTestaSenzaTesta)

function listUnshift(head, val) {
    return { val: val, next: head }
}

function listPush(head, val) {
    if (!head)
        return { val: val, next: null }

    return { val: head.val, next: listPush(head.next, val) }
}

function listInsert(x, value) {
   if (!x) return 
   let nuovo = { val: value, next: x.next }
   x.next = nuovo
}

function listPush(head, value) {
    console.log(`Invocata con head.val: ${head.val}`)

    if (!head) {
        console.log("Caso base con la lista vuota...")
        return { val: value, next: null }
    }
    // else { SE LA LISTA HA ALMENO 1 ELEMENTO
        if (head.next) { // + DI 1 ELEMENTO -> 2 o +
            listPush(head.next, value) // CHIAMATA RICORSIVA
        }
        else { // HO ESATTAMENTE 1 ELEMENTO -> SONO ALLA CODA
            console.log(`Caso base, inserisco ${value}`)
            listInsert(head, value)
        }
        
        return head
    // }
}

let l = {val:5,next:{val:3,next:{val:6,next:null}}}
// l = listPush(l, 2)

function listPrint(head) {
    if (!head) {
        console.log("FINE")
        return;
    }

    console.log(`${head.val},`)
    listPrint(head.next)
}

// listPrint(l);


function listPop(head) {
   if (!head) 
       return [null, undefined]
   if (!head.next)
       return [null, head.val]
   
   // let [newNext, removedVal] = listPop(head.next)
    let recR = listPop(head.next)

   head.next = recR[0]
   return [head, recR[1]]
}

// DESTRUTTURAZIONE 101
 let arr = [1, 2, 3, 4, 5, 6]
 let [a, b, c] = arr
 console.log(a, b, c)
console.log(arr[0], arr[1], arr[2])