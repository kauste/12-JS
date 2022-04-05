//CIKLAI


function sumaIntervale(nuo, iki) { // imanoma ir su while
    suma = 0;
    for (i = nuo; i <= iki; i++) {
        suma += i;
    }
    return suma;
}

console.log(sumaIntervale(0, 0), '------>', 0); //tokius pasitikrinimui daro destytojas
console.log(sumaIntervale(0, 4), '------>', 10);
console.log(sumaIntervale(0, 100), '------>', 5050);
console.log(sumaIntervale(547, 815), '------>', 183189); //-kas su sio negerai ir kodel?
console.log(sumaIntervale(-50, 50), '------>', 0);
console.log(sumaIntervale(-70, 30), '------>', -2020);
