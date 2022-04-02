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
for (let i=0; i < pazymiai.length; i++) { 
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