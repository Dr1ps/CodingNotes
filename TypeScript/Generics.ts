//Here's an identity function
function identity(arg: number): number {
    return arg
}
//This is only for the number type, we would have to define one for every type
//But we can do this:
function identity2(arg: any): any {
    return arg
}
//There's a thing called "Type Variable" that specifies the type wanted
function identity3<T>(arg: T): T {
    return arg
}
let output = identity3<string>("Hey")
//This is way more precise than "any"
//TS also can do a type inference
output = identity3("Hey again")
//Caution, we cannot assume T is a specific type
function identity4<T>(arg: T): T {
    console.log(arg.length) //error, length doesnt exist in all types
    return arg
}
//To solve this, we can use a constraint
//We could limit the type usage to types that have "length"
//This method below ensures the type T has length.
//Only accepts types for which it makes sense for them to inherit length
interface Lengthwise {
    length: number
}

function identity5<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
}

//Generic interface
interface GeneriIdentityFn<T> {
    (arg: T): T
}
//Generic class
class GenericValue<T> {
    value: T
    constructor(value:T) {
        this.value = value
    }
}

