function somma (a:number, b:number): number {
    return a+b
}

class Thing {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
}

let flag: boolean = false
let list: number[] = [1,2,3]

let tupla: [string,number] = ["ciao",2]
tupla.push("ciao")

enum Color {
    Red, //0
    Green, //1
    Blue, //2
}
let c: Color = Color.Green //c vale 2

enum Color2 {
    Red = 1,
    Green, //2
    Blue //3
}

let colorName: string = Color[2] //Blue

let maybe: unknown
if(typeof maybe === "boolean") {
    //...
}

//Merged type (tipo unione)
let prezzo: string | number
type Price = string | number
let prezzo2: Price

//Type inference, type is not specified but automatically assigned based on the value (number here)
let s = 3

//Typescript uses a type system defined as Structural Type System, which assumes that if an object is of a certain type, it probably has specific methods.
//Typescript has interfaces
interface LabeledValue {
    label: string
    //Only the signature
    setTime(d: Date): void
}
//Makes sure some categories of objects follow specific rules
//Equivalent of writing:
function something(label: {label2: string}) { //Assumes label has a string attribute label2
    console.log(label.label2)
}
//Interfaces can use "extends"
//Implementation of an interface (everything must be specified again, like attribute label)
class LabelFR implements LabeledValue {
    currentTime: Date = new Date()
    label: string = "hi"
    constructor() {

    }
    //Return type of functions like here (void)
    setTime(d: Date): void {
        this.currentTime = d
    }
}

//TS is rigid with parameters
//Optional parameters must come after mandatory ones, optional parameters must have a default value
function f(first: number, second = 1) {
    return
}