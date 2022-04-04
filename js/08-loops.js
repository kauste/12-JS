/*
LOOP: for, while, for-of, foreach
OBJECT-LOOP

Per duomenis istiesu eina ne ciklai, o iteratoriai (labiausiai pamatinis dalykas programavime)
*/
const pazymiai = [1, 10, 9, 10, 10];

/* FOR */
console.log('--------FOR--------'); //jei didelis kiekis duomenu, tukstanciais, geriausia foras. Siaip jis viskam tinka
let sumaFor = 0;

const nuo = -80;
const iki = -70;
for(let i1 = 0; i1 < pazymiai.length; i1++) {
    sumaFor += pazymiai[i1]; 
    console.log('Suma For', sumaFor);
}

/* WHILE */
console.log('-------WHILE----------');

let sumaWhile = 0;
let i2 = 0
while (i2 <pazymiai.length) {
    const pazymys = pazymiai[i2];
    sumaWhile += pazymys;
    console.log('Suma While', sumaWhile);
    i2++;
}

/* FOR-OF  privalomas: ne tuscias masyvas*/
console.log('------FOR-OFF-------');

let sumaForOf = 0; 
let i3 = 0;
for (const gele of pazymiai) { // rasyk, ka nori, vis tiek duos paeiliui elementus is nurodyto masyvo.
    sumaForOf += gele;
    console.log(`${i3++}) pazymio ${gele} suma for-off ${sumaForOf}`);
}

/* FOREACH */
console.log('-----FOREACH--------');

let sumaForEach = 0;
pazymiai.forEach((a, b, c) => { // pazymiai.forEach((SU KUO DARYTI) => {KA DARYTI}) kaip ir visur
    console.log(a, b, c) //a- pazymys, b- kelintas elementas, c- visas pazymiu blokaas) 
});

sumaForEach = 0;
pazymiai.forEach((pazymys, i4) => {
    sumaForEach += pazymys;
    console.log(`${i4++}) pazymio ${pazymys} suma for-off ${sumaForEach}`);
}); //pats leciausias, destytojas nenaudoja

/* FOR IN  skirtas ne masyvansm, o objektams*/