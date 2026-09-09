//I moduli servono per tenere ordinate le cose, riutilizzare un programma.
//Un modulo è un file sorgente in JS che contiene una o più dichiarazioni (funzioni, classi...)
//Il modulo esporta dichiarazioni o importa dichiarazioni


//File salvato come "./modulo.js"
function f1() {

}

export function f2() {

}

export const PIGRECO = 3.14


//Altro file che importa modulo (importa le cose esportate da modulo)
import * as mod from './modulo.js'
//const mod = require './modulo.js'

console.log(mod.f2())

var q=mod.PIGRECO