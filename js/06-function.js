/*
visi mokiniai turi tik keturis pazymius ir reikia suskaiciuoti vidurki
*/

const petras = [9, 4, 8, 2];
const tomas = [9, 4, 10, 2];
const simona = [10, 9, 8, 9];
const ona = [8, 7, 8, 2];
/*
ilgasis sprendimo variantas,
let petroSuma = 0;
petroSuma += petras[0];
petroSuma += petras[1];
petroSuma += petras[2];
petroSuma += petras[3];
const petroKiekis = petras.length
const petroVidurkis = petroSuma / petroKiekis
console.log('Petras:',petroVidurkis)
*/
/* Kai matai, kad pasikartoja sprendimo variantai, tuomet reikia galvoti apie funkcija. Funckija- tai logikos sablonas logikos. Jis sako "jei kasnors tau duos vienokius ar kitokiu spradinius parametrus, tu daryk taip ir taip

bendrinis sablonas: esmnis raktinis zodis, pvz funkcija, + parametru blokas, pvz, ir logikos blokas, pvz, {}  -> vidurkis(Maryte)

yra ivairiu funciju, viena gali vidurki skaiciuoti, kita pvz palygint koks skirtumas tarp dveju tekstu ir tt, kiekvienai reikia individualaus pav.*/

function vidurkis(pazymiuSarasas) {
                                        //console.log(pazymiuSarasas);  funkcija pati pamato pagal pirma priskirta konstanta ar leta ar gal veiksma, ty, siuo atveju- tomo
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];
    return pazymiuSuma / pazymiuSarasas.length;}       
                                                        // gali buti tik vienas returnas, ties juo baigiasi funkcijos darbas. Visos funkcijos grazina rezultata, jei nera RETURN parasyta, tai grazins return:undefined                        

const petroVidurkis = vidurkis(petras);                 // funkcijos iskvietimas: kai nori iskviesti funkcija, pamineti jos pavadinima ir uzdeti paprastuosius skliaust, const apibrezt svarbu, kad demuo ateity bus reikalingas
console.log('petras:', petroVidurkis);
                                                         //gali buti console.log('Petras:', vidurkis()), variantas visgi nepatogus, kai kelis kart reikia to paties rezultato
const tomoVidurkis = vidurkis(tomas);
console.log('tomas:', tomoVidurkis);

const simonosVidurkis = vidurkis(simona);
console.log('simona:', simonosVidurkis);

const onosVidurkis = vidurkis(ona);
console.log('ona:', onosVidurkis);

/*
Funkcija gauna varda ir turi grazinti sakini, kuris daugmas skamba taip:
"Vardo pirma raide yra [V] ir vardas sudarytas is [5] raidziu."
*/

const name = 22; // -> funkcija nereaguoja i pries tai buvusius 'name', ji dirba savo ribose- tarp artimiausiu riestiniu skliaustu
function vardoAnalize(name) {   
    return `Vardo ${name} pirma raide yra ${name[0]} ir vardas sudarytas is ${name.length} raidziu.`
}

const petroVardas = vardoAnalize('Petras');
console.log(petroVardas)

const romoVardas = vardoAnalize('Romas');
console.log(romoVardas)

const lomoVardas = vardoAnalize('Lomas');
console.log(lomoVardas)

/*
Funkcija gauna du sklaicius ir turi gazinti lygti su sprendimu pvz.: 2 + 2 = 4
*/


function sprendimas(a, b) {
    return `${a} + ${b} = ${a + b}`
}

const lygtis = sprendimas(1, 2);
console.log(lygtis)

const lygtis2 = sprendimas(7.3, 2);
console.log(lygtis2)

const keistaLygtis = sprendimas(0.1, 0.2); // cia del to, nes dvejetaine sistema
console.log(keistaLygtis)

// ^ zenklas