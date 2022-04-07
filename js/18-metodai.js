/*
NUMBERS
*/
//konvertavimas i sring
console.log('------konvertavimas i sring------');
console.log((5456).toString());
console.log(5456+ '')

//desimtaines dalies 'nukirpimas'
console.log('-----desimtaines dalies nukirpimas-------');
console.log((5.456).toFixed(2));// keli skaiciai po kablelio, tekstas tampa stringu
console.log(typeof(5.456).toFixed(2)); //

//is teksto konvertavimas i skaiciu
console.log('------is teksto konvertavimas i skaiciu------');

console.log(parseFloat('17.53'));// konvertuoja i skaiciu
console.log(typeof parseFloat('17.53'));
console.log(parseInt('17.53'));// konvertuoja i suapvalinta svikaji skaiciu
console.log(typeof parseInt('17.53'));
console.log(+'17.53'); //casting

console.log('------------');
console.log(parseFloat('labas'));
console.log(parseFloat('Labas17.53'));
console.log(parseFloat('17.53Labas'));
console.log(parseFloat('Labas17.53Labas'));
console.log('------------');
console.log(parseInt('labas'));
console.log(parseInt('Labas17.53'));
console.log(parseInt('17.53Labas'));
console.log(parseInt('Labas17.53Labas'));
console.log('------------');
console.log(+'labas');
console.log(+'17.53Labas');
console.log(+'Labas17.53');
console.log(+'Labas17.53Labas');
console.log('------------');

console.log('Math class');
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-7)); //neigiamus pavercia teigiamais
console.log(Math.round(1.4)); // apvalina 1 skaiciu po kablelio
console.log(Math.floor(1.5)); //apvalins iki zemiausio skaiciaus
console.log(Math.ceil(1.5)); // apvalins iki didziausio skaiciaus
console.log('-----Math.random: nuo [0 iki 1)-----');
console.log(Math.random());
console.log('-----min, max-----');
console.log(Math.min(1, 5, 7, -4, 3)); //priima tik skaicius, ne masyva
console.log(Math.max(1, 5, 7, -4, 3));
console.log('----KA DARO TRUNK?----');
console.log(Math.trunc(-7.99))
/*
STRING
*/
console.log('------------');
console.log('------------');
console.log('------------');
console.log('------------');
console.log('Labas rytas, Lietuva'.length);
console.log('AR yr stringe yra kitas substringas??')
console.log('Labas rytas, Lietuva'.includes('y')); //ar yra tekste
console.log('Labas rytas, Lietuva'.includes('rytas'));
console.log('Labas rytas, Lietuva'.includes('rytas '));
console.log('KUR yr stringe yra kitas substringas')
console.log('Labas rytas, Lietuva'.indexOf('y'));
console.log('Labas rytas, Lietuva'.indexOf('L')); //randa tik artiniausia varianta, prasideda nuo 0;
console.log('Labas rytas, Lietuva'.indexOf('L', 1)); // pradeda ieskoti nuo antros raides
console.log('Labas rytas, Lietuva'.indexOf('rytas'));
console.log('Labas rytas, Lietuva'.indexOf('rytas ')); // jei neranda -1
console.log('Sukarpyti stringa i dalis');
console.log('Labas rytas, Lietuva.'.split(' '));//iskirsto tarpais
console.log('Labas rytas, Lietuva.'.split('.'));
console.log('kartojimas')
console.log('Labas rytas, Lietuva. '.repeat(3))
console.log('Labas rytas, Lietuva. '[2]);
console.log('Labas rytas, Lietuva. '.charAt(2));
console.log('Labas rytas, Lietuva.'.slice(1,5));
const labas = 'Labas rytas, Lietuva.'
//console.log(labas.slice(labas.indexOf(r), labas.indexOf('s', + labas.indexOf('r'+ 1) ));
console.log(labas.toLocaleLowerCase());
console.log(labas.toLocaleUpperCase());
// Teksto apvalymas nuo tarpu
console.log('Labas       rytas,       Lietuva.     '.trimStart() + '.');
console.log('      Labas       rytas,       Lietuva.     '.trimStart() + '.');
console.log('      Labas       rytas,       Lietuva.        '.trimEnd() + '.');
console.log('    Labas       rytas,       Lietuva.     '.trim() + '.'); /// is priekio ir is galo tarpus

// replace
console.log('replace')
console.log(labas.replace('rytas', 'vakaras'));
console.log(labas.replace('a', '_')); //dirba tik 1 karta, tik 1 raide pakeicia
console.log(labas.replaceAll('a', '_')); //nuo 15 node versijos
console.log(labas.replaceAll(/a/gi, '_')); // daro ta pati, tik viesiem tinka. niekas neturi teises naudii regexo. neprotinga naudoti del saugumo

/*
BULLEAN
*/

console.log('-----------------');

console.log(true.toString);

/*
ARRAY stringas ir array giminingi
*/

const rytas = ['Labas', 'rytas', 'Lietuva']
console.log('sujungti');
console.log(rytas.join(''));
console.log(rytas.join(', - '));

console.log('paieska');
console.log(rytas.includes('a'));//neee
console.log(rytas.includes('rytas'));
console.log(rytas.includes('Rytas'));
console.log(rytas.indexOf('rytas'));
console.log(rytas.indexOf('Rytas'));

console.log(rytas.push('PUSH'));// ipushina i gala ir pasako, kiek nariu
console.log(rytas)
console.log(rytas.pop)// isima is galo
console.log(rytas)
console.log(rytas.unshift('UNSHIFT')); // pastato i prieki
console.log(rytas)
console.log(rytas.shift) // isima is priekio
console.log(rytas)

console.log('extra');
console.log(rytas.reverse());

//map, filter, sort, reduce, every, flat, forEach. sitie tink ir stringui, bet paprasciau paaiskit per number
const marks = [10, 1, 8, 4, 6]
console.log('map - individualiu reiksmiu konvertavimas');
console.log(marks.map(item =>2 * item));//is esmes cikliskai eina per masyva ir jis gali koreguoti visas reiksmes
console.log(marks.map(item => item % 3));
console.log(marks.map(item => item - 0.05));

console.log('filter');
console.log(marks.filter(item => item > 5)); // palieka tinkamus tik
console.log(marks.filter(item => item % 2 === 0));
console.log(marks.filter(item => item % 2 === 0 && item <= 8));

console.log('reduce - sutraukia visas reiksmes i viena reiksme'); //primena include
console.log(marks.reduce((total, item) => total + item, 0)); //pradine reiksme 0
console.log(marks.reduce((total, item) => total + item, 100000)); 
console.log(marks.reduce((total, item) => total * item, 1));//pradine reiksme 1
console.log(marks.reduce((total, item) => total - item, 0)); // jei neprirasai 0, atsakymas keiciasi
console.log(marks.reduce((total, item) => total - item)); //pradeda atiminet is pirmo sk

console.log('sort');
const nums = [1, 2, 3, 10, 20, 30, 11, 22, 33];
console.log(marks.sort()); //rikiuja nuo maziau iki daugiau, taciau tarsi lygina tekstus
console.log(nums.sort()); 
console.log(nums.sort((a, b) => a - b)); //-1 i prieki 0 sale, 1 i gala
console.log(nums.sort((a, b) => b - a));

const texts = ['aas', 'aa', 'a', 'ssaa']
console.log(texts.sort().reverse());
console.log(texts.sort((a, b) => b.length - a.length));
console.log(texts.sort((a, b) => a.length - b.length));

console.log('flat');
const matrix = [
    [2, 1, [5, 5]],
    [11, [99, 77], 51],
    [6, 8],
]

console.log(matrix.flat()); // isima vidinius skliaustus
console.log(matrix.flat(2));

console.log('... - spread operator');
console.log(Math.min(1, 7, -3, 11));
console.log(Math.max(1, 7, -3, 11));
const minMax = [1, 7, -3, 11];
console.log(Math.min(...minMax)); // isima is masyvo, nuima isorinius sklikaustus
console.log(Math.max(...minMax));

const m1 = [1, 2];
const m2 = [3, 4];
const m3 = [5, 6];

const m123 = [...m1, ...m2, ...m3];
const m321 = [...m3, ...m2, ...m1];
const m321321 = [...m3, ...m2, ...m1, 321];
console.log(m123);
console.log(m321);
console.log(m321321);


/*
OBJECT
*/
console.log('---------OBJECT--------');

const person = {
    name: 'Petras',
    age: 99,
    isMaried: true,
}

console.log(person.name);
console.log(person.isMaried);
console.log(person.age);
console.log(person['name']);
console.log(person['isMaried']);
console.log(person['age']);

console.log('automatinis VISU objekto RAKRAZODZIU istraukimas'); 
const personKeys = Object.keys(person);
console.log(personKeys);
console.log('automatinis VISU objekto reiksmiu istraukimas'); //visas reiksme
for (const key of personKeys){
    console.log(key, ':', person[key]);
}

console.log('FOR-IN');//EINA PER OBJEKTUS, NE MASYVUS
for(const key in person) {
    console.log(key, ':', person[key]);
}


console.log('------- - spread operator (naudojimas objekte)------------');
console.log({...person});
console.log({...person, car: 'tesla'});
console.log({color: 'red', ...person});
console.log({...person, isMaried: false});
console.log({isMaried: false, ...person});

const objA = {
    a: 'a',
    c: 'c'
    
}
const objB = {
    a: 'b',
    d: 'd'
}

const objAB = {...objA, ...objB} /// uzraso ant virsaus vienodus: paskesnio ant ankstesnio
console.log(objAB);

const objBA = {...objB, ...objA}
console.log(objBA);

function sum (a, ...x) { ///galima panaudto ir funkciju parametru bloke

}

/*
DESTRUCTURING - destrukturizavimas
*/

console.log('----------------');

const skaiciai = [10, 2, 8, 6, 4];
const pirmasSkaicius = skaiciai[0];
const antrasSkaicius = skaiciai[1];
const treciasSkaicius = skaiciai[2];

console.log(pirmasSkaicius, antrasSkaicius, treciasSkaicius);

const [pirmas, antras, trecias, ...kita] = skaiciai;
console.log(pirmas, antras, trecias, kita);

const [...xxx] = skaiciai;
console.log(xxx);

const skaiciai2 = [51351563];
const [xx1, ...xxx] = skaiciai;
console.log(xx1);

const [xx1, ...xxx] = skaiciai2;
console.log(xx1);

const car = {
    name: 'Tesla',
    model: 'X',
    color: 'red'
}

const random = Math.floor(math.random() * 10); //nuo 0 iki9
console.log(random);

const nuo = 10;
const iki = 19;

const randomNuoIki = nuo + Math.floor(math.random() * (iki - nuo +1)); 
console.log(randomNuoIki);

for (let i = 0; i < 20; i++){
    const randomNuoIki = nuo + Math.floor(math.random() * (iki - nuo +1)); 
    console.log(randomNuoIki);
}

function randomNumber (nuo, iki) {
    const nuo + Math.floor(math.random() * (iki - nuo +1)); 
}

for (let i = 0; i < 20; i++){
    console.log(randomNumber(9, 9));
}
