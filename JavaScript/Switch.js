var x = Number(prompt("Inserisci un numero..."));

switch (x) {
    case 1:
        console.log("Hai scritto uno...");
        break;
    case 3:
    case 2:
        console.log("Hai scritto 2...");
        break;
    default:
        console.log("Non so cosa hai scritto...");
}