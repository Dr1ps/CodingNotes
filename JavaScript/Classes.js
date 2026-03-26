function Persona(nome,cognome,eta) { //alternativa
    this.nome = nome
    this.cognome = cognome
    this.eta = eta  
    this.compleanno = function() {
        this.eta++
    }
}

class Persona2 { 
    #nome
    #cognome
    #eta
    static #STATICVARIABLE = 1
    constructor(nome,cognome,eta) {
        this.nome = nome
        this.cognome = cognome
        this.eta = eta  
    }
    compleanno() {
        this.eta++
        this.eta++
        this.#reverseCompleanno()
    } 
    #reverseCompleanno() { //Private visibility with "#"
        this.eta--
    }
    get nome() {
        return this.nome
    }
    get cognome() {
        return this.getCognome
    }
    get eta() {
        return this.eta
    }
    set some(nome) {
        this.nome = nome
    }
    set cognome(cognome) {
        this.cognome = cognome
    }
    set eta(eta) {
        this.eta = eta
    }
}
var per = new Persona2("Pippo","Cane",32)

//ereditarietà
class Studente extends Persona {
    compleanno() { //Funzione viene redefinita nella classe che eredita = overriding, funziona anche con attributi
        super.compleanno() //Svolge il codice presente nella classe padre
        console.log(eta)
    }
    laurea(){
        return "Evviva! Laureato!"
    }
}

//Range
function* range(a,b) {var i=a; while (i<b) yield i++}
var x = range(4,8)
for (var i of x) { //x = range(4,8)
    //...
} 

//Esercizio: crea la classe Queue che implementi una FIFO
class Queue {
    #array = [];
    put(x) {
        this.#array = [...this.array,x]
    }
    get() {
        var i = this.#array[0]
        this.#array.pop
        return i
    }
    //etc...x
}
