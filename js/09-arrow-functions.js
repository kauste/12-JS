const pirmas = 7;
const antras = 5;

// iprasta funkcija
console.log('-------IPRASTA FUNKCIJA---------')

function suma (a, b) {
    return a + b
}

const r2 = suma(15, 99);
console.log(r2);

const r3 = suma(pirmas, antras);
console.log(r3);

function atimtis (a, b) {
    return a - b;
}
const r4 = atimtis(pirmas, antras);
console.log(r4);

console.log('-------ANONIMINE/ BEVARDE FUNKCIJA---------')
// kintamajam skirta anonimine/ bevarde funkcija. funkcijai priskirta konstanta. tada zo

const atimtele = function (a, b)  {
    return a - b
}
const r5 = atimtele(15, 99);
console.log(r5);

console.log(atimtele(15, 99));

const r6 = atimtele(pirmas, antras);
console.log(r6);

const dalyba1 = function(a, b) {
    return a / b;
}
const r7 = dalyba1(pirmas, antras);
console.log(r7);

console.log('-------ARROW FUNKCIJOS---------')
//arrow funkcijos (rodyklines)

const dalyba2 = (a, b) => { ///yra daugiau skirtumu nei tik mazesnis simboliu kiekis
    return a / b;
}
const r8 = dalyba2(pirmas, antras);
console.log(r8);

const daugyba1 = (a, b) => {
    return a * b;
}
const r9 = daugyba1(pirmas, antras);
console.log(r9);

// jei logikos bloke yra tik 1 procedura, pvz, (a * b), tai galime nerasyti {} ir return ABIEJU, grieztai, tik siuo atveju

const daugyba2 = (a, b) =>  a * b;
const r10 = daugyba1(pirmas, antras);
console.log(r10);

// jei logikos bloke {} yra tik  1 procedura, galima nerasyti {} ir return
const daugyba = (a, b) =>  a * b;
const r11 = daugyba(88,22);
console.log(r11);

console.log('-------KVADRATU---------')
// kvadratu. jei parametru bloke yra tik 1 parametras, galime nerasyti (). bet jei nera nei vieno parametro reikia 0

const kvadratu = a =>  a * a  // a = a **2
const r12 = kvadratu(pirmas);
console.log(r12);

const tekstas = 'Labas rytas';
function pirmaRaide(text) {
    return text[0];
}
console.log(pirmaRaide(tekstas));

const  pirmaRaide2 = function (text) {
    return text[0];
}
console.log(pirmaRaide2(tekstas));

//arrow

const  pirmaRaide3 =  (text) => {
    return text[0];
}
console.log(pirmaRaide3(tekstas));

const  pirmaRaide4 =  text => {
    return text[0];
}
console.log(pirmaRaide4(tekstas));

const  pirmaRaide5 =  text =>  text[0];
console.log(pirmaRaide5(tekstas));

const  pirmaRaide6 =  s=>  s[0];
console.log(pirmaRaide6(tekstas));

