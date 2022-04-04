const pazymiai = [1, 10, 9, 10, 10]; //neribotas skaicius


const pazymiuKiekis = pazymiai.length;
let pazymiuSuma = 0;
pazymiuSuma += pazymiai[0];
pazymiuSuma += pazymiai[1];
pazymiuSuma += pazymiai[2];
pazymiuSuma += pazymiai[3];
pazymiuSuma += pazymiai[4];

const vidurkis = pazymiuSuma / pazymiuKiekis;
console.log(vidurkis)

let index = 0;
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];

const vidurkis2 = pazymiuSuma / pazymiuKiekis;
console.log(vidurkis2)
console.log('------------')
//CIKLAI (LOOP)- tas, kas kartojasi. for- visu ciklu tevas, gali viska issprest. alternatyvus ciklai- tik pagal patoguma: while, for-in, for-of, foreach
// kai kartoji, norisi zinoti, kiek kartu kartoti. jei is anksto zinomas kiekis, kiek kartosis, tobulas yra for. jei nezinom, su juo sunkiau.
console.log('START')
for (let i=0; i<5; ++i) {   //i- kelintas tai yra kartas, 0-neprasisuko nei karto; iki kada suktis- antras paramentras (5), i++-> kai jau prasisuko i tampa vienetu (taspats ar i++ ar ++i). i yra pasiekiamas tik artimiausiu skliaustu apimtyje.
    console.log('pirmas', i)
}
console.log('END')

console.log('START')
for (let i=3; i<7; i++) { //jokio skirtumo ar i++ ar ++i
    console.log('antras', i)
}
console.log('END')


console.log('START')
for (let i = 0; i < 3; i++) { 
    const pazymys = pazymiai[i]
    console.log(pazymys)
}
console.log('END')

console.log('START')
for (let i = 0; i < pazymiai.length; i++) { 
    const pazymys = pazymiai[i]
    console.log(pazymys)
}
console.log('END')

console.log('START')
let suma = 0;///sumos negalima inicijuotis ciklo metu, nes suma bus nuresetinama vel prie 0 ir uz ciklo ribu bus nepasiekiama, svarbu issidestymas
for (let i=0; i < pazymiai.length; i++) { 
    const pazymys = pazymiai[i]
    suma += pazymys //persiduoda ir uz riestiniu gniauztu
    console.log(`${i}) pazymys ${pazymys} [${suma}]`);
}
console.log('END')
console.log('Suma', suma)
console.log('Vidurkis', vidurkis)

console.log('---------------------')

for(let i = -80; i < -60; i++) {
    console.log(i)
}

suma = 0;
console.log('---------------------')
const nuo = -80;
const iki = -70;
for(let i = nuo; i < iki; i++) {
    suma += i; 
    console.log(i)
}
console.log('Suma', suma)


//WHILE
console.log('-------------')

let sumaWhile = 0;
let i2 = 0
while (i2 <pazymiai){
    const pazymys = pazymiai[i2];
    sumaWhile += pazymys
}

// FOR-OFF  ne tuscias masyvas
console.log('-------------')

let sumaForOf = 0;
let i3 = 0;
for (const pazymys of pazymiai) {
    console.log(pazymys)
    sumaForOf += pazymys
    console.log(`${i3}) pazymys ${pazymys} [${sumaForOf}]`);
}

// FOREACH ne tuscias masyvas
console.log('-------------')
let sumaForEach = 0;
pazymiai.forEach((a, b, c) => {
    sumaForEach += a;
    console.log(`${a}) pazymys ${b} [${sumaForEach}]`)
}); //(gauna dalykus){ka sujais daryti};    Ca- pazymys, b- i4, c- pazymiu blokaas) forEach daugiausia rija elekros, leciausias. prie mazu kiekiu ir vidutiniu irenginniu nesvarbu.