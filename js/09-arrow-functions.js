const pirmas = 7;
const antras = 5;


// iprasta funkcija
function suma (a, b) {
    return a + b
}

const r1 = suma(88, 22)
console.log(r1)

const r2 = suma(15, 99)
console.log(r2)

const r3 = suma(pirmas, antras)
console.log(r3)

function atimtis (a, b) {
    return a - b
}
const r4 = atimtis(88,22)
console.log(r4)

// kintamajam skirta anonimine funkcija

const atimtele = function (a, b)  {
    return a - b
}
const r5 = atimtele(88,22)
console.log(r5)

console.log(`---------`)
//arrow funkcijs
const dalyba = (a, b) => {
    return a / b
}
const r6 = dalyba(88,22)
console.log(r6)

// jei logikos bloke {} yra tik  1 procedura, galima nerasyti {} ir return
const daugyba = (a, b) =>  a * b
const r7 = daugyba(88,22)
console.log(r7)

// kvadratu. jei parametru bloke yra tik 1 parametras, galime nerasyti (). bet jei nera nei vieno parametro reikia 0

const kvadratu = a =>  a * a
const r8 = kvadratu(pirmas)
console.log(r8)

const tekstas = 'Labas rytas' 
function pirmaRaide(text) {
    return text[0];
}
console.log(pirmaRaide(tekstas));

const tekstukas =  'Labas rytas' 
function pirmaRaide(text) {
    return text[0];
}
console.log(pirmaRaide(tekstukas));

const tekstelis = 'labuka'
const pirmaRaide = s => s[0];
console.log(pirmaRaide(tekstelis))