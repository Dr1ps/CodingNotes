/*
Crea una classe Figura con metodi area() e perimetro() vuoti.
Crea le classi:
Triangolo: definito coi 3 lati
Quadrato: definito con il lato
Rettangolo: definito con base e altezza
Cerchio: definito col raggio
Ciascuna delle classi deve implementare i metodi di Figura mediante override.
Crea classe Piramide, partendo da una figura di base e un altezza h con metodo volume() e ordina() che ordina delle piramidi in ordine crescente.
*/

class Figura {
    constructor() {

    }
    area() {

    }

    perimetro() {

    }
}

class Triangolo extends Figura {

    #l1
    #l2
    #l3

    constructor(l1,l2,l3) {
        super()
        this.l1 = l1
        this.l2 = l2
        this.l3 = l3
    }

    area() {
        //calcolo area 
        return 
    }

    perimetro() {
        return l1+l2+l3
    }
}

class Rettangolo extends Figura {

    #base
    #altezza

    constructor (base,altezza) {
        super()
        this.base = base
        this.altezza = altezza
    }
    area() {
        return this.base * this.altezza
    }

    perimetro() {
        return (this.base + this.altezza) * 2
    }
}

class Quadrato extends Figura {

    #lato

    constructor (lato) {
        super()
        this.lato = lato
    }

    area() {
        return lato * lato
    }

    perimetro() {
        return lato * 4
    }
}

class Cerchio extends Figura {

    #raggio

    constructor (raggio) {
        super()
        this.raggio = raggio
    }
    area() {

        return raggio*raggio*Math.PI
    }
    perimetro() {
        return 2*raggio*Math.PI
    }
}

class Piramide {

    #figura
    #altezza

    constructor(figura,altezza) {
        super()
        this.figura = figura
        this.altezza = altezza
    }

    volume() {
        let areaBase = this.figura.area()
        return areaBase * altezza / 3
    }

    ordina(piramidi) {
        let risult = []
        for (el in piramidi) {
            
        }
        return risult
    }

}