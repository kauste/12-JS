/*
KINTAMIEJI

Iniciavimo budas:
const - pastovus kintmasis, jo negalima keisti; default iniciavimu budas, tik jei jis netink, rinktis leta.
let - antrinis budas iniciuoti, kai zinome, kad reiksme gales keistis
var - senkiausias ir geriau niekada nenaudoti jei rupi saugumas. Jis naudojamas tuomet, kai iniciavimo budas nepasirinktas, butu pvz:
nieko = 'nieko'
console.log(nieko)


Duomenu tipas:
- number (skaicius)
- string (tekstas)
- boolean (logine eiksme: true | false), kuriant kintamuosius geriau formuluoti kintamuju pavadinima kaip klausima 'ar', kad iskart suprasti, kad boolean. True turi reiksme 1, false turi reiksme 0. pvz ar prisijunges vartotojas, ar slaptazodis teisingas
- array (masyvas, sarasas, matrica*)- sarasiukas, ifo, kur gerai tureti vienoje vietoje. gali but ir number, ir string, geriau formuluoti daugiskaita. Sarasas gali buti sudarytas is sarasu.
*/


const myLuckyNumberIs = 7;
console.log('Lucky number:', myLuckyNumberIs);

let pinigine = 0;
console.log('Pinigine:', pinigine);
pinigine = 5;
console.log('Pinigine:', pinigine);

const Petras = 8565312;
const vardas = Petras;
console.log(Petras);
console.log(vardas);

const Petriukas = 856531233;
const vardenis = "Rugilyte";
console.log(Petriukas);
console.log(vardenis);

console.log('1) Labas, Rugile');
console.log('2) Laba diena, ' + vardenis + ".")

const pasisveikinimas = '3) Laba diena, ' + vardenis + "."
console.log(pasisveikinimas)
console.log(pasisveikinimas)
console.log(pasisveikinimas)

nieko = 'nieko' //automatiskai priskiriamas var
console.log(nieko)

const arVedes = true;
const arTuriVaiku = false;
const arMeluojaDelVaiku =true;
console.log('Ár vedes?', arVedes);
console.log('Ár turi vaiku?', arTuriVaiku);
console.log('Ar meluoja', arMeluojaDelVaiku);

console.log(2 + 2 * 2); //skaicius
console.log('2 + 2 * 2'); //tekstas

console.log(true, false);
console.log('ture', 'false');

const pazymiai = [8, 10, 9, 8 , 8, 9 , 9, 10];
console.log(pazymiai);

const studentuVardai = ['Maryte', 'Petriukas', 'Alfonsas', 'Zibuokle'];
console.log(studentuVardai);

const booleanlist = [true, false, false, true, true]
console.log(booleanlist);

const random = [1, 'Labas', true, [/*kitas masyvas */]] //gali toks buti, bet normaliu atveju nebuna, dazniausiai informacija buna homogeniska, arba skaiciai arba stringi, arba boolean, arba masyvu masyvai....