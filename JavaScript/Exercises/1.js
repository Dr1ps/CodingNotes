/*
Sistema gestione voti, classe Grade per rappresentare un esame sostenuto
*/
class Grade {

    #name
    #credits
    #date
    #grade
    #honors

    constructor(name,credits,date,grade,honors) {
        this.#name = name
        this.#credits = credits
        if(typeof date != "Date") {
            throw new TypeError ("Date input is not in a valid date format")
        }
        this.#date = new Date(date)
        this.#grade = grade
        this.#honors = honors
    }

    get name () {
        return this.#name
    }

    get credits () {
        return this.#credits
    }

    get date () {
        return new Date(this.#date)
    }

    get grade () {
        return this.#grade
    }

    get honors () {
        return this.#honors
    }

    set name (name) {
        this.#name = name
    }

    set credits (credits) {
        this.#credits = credits
    }

    set date (date) {
        this.#date = new Date(date)
    }

    set grade (grade) {
        this.#grade = grade
    }

    set honors (honors) {
        this.#honors = honors
    }

    equals (other) {
        if(typeof other != "Grade") {
            throw new TypeError("Cannot check equality between objects of different classes")
        }
        return this.#name === other.name &&
        this.#credits === other.credits &&
        this.#date.getTime() === other.date.getTime() &&
        this.#grade === other.grade &&
        this.#honors === other.honors
    }

    toString() {
        return "Esame di " + this.#name + ": " + this.#credits + 
        " CFU," //bla bla  
    }


}