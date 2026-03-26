//Servono per gestire errori
//I bug / difetti possono essere errori di:
    //sintassi(stringa non riconosciuta nel linguaggio)
    //battitura (typo)
    //logica (di solito silenziosi).
//Altri errori sono input sbagliati, errori HW, rete caduta etc... (errori esterni)
try {
    //Codice
} catch (e) {
    console.log(e)
}
finally {
    //Codice dopo l'errore per magari chiudere processi e stream
}

class OperatorError extends Error {} //Errore custom
