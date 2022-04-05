// ND FUNKCIJOS
const sk1 = 10;
const sk2 = 712;
const sk3 = 77;
// NR 1
console.log('------NR.1.-------');

function tusciaFunkcija () {
    return false;
}
console.log(tusciaFunkcija())

// NR 2
console.log('------NR.2.-------');

function daugyba (a, b) {
    //Jei a nera skaicius ERROR;
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (typeof b !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (isNaN(a)) {
        return 'ERROR: pirmas parametras turi buti tikras skaicius';
    }
    if ('' + a === 'Infinity') {
        return 'ERROR: pirmas parametras turi buti tikras skaicius';
    }
    if ('' + b === 'NaN') {
        return 'ERROR: pirmas parametras turi buti tikras skaicius';
    }
    if ('' + b === 'Infinity') {
        return 'ERROR: pirmas parametras turi buti tikras skaicius';
    }
    const sandauga = a * b;
    return sandauga;
}


console.log('ERROR', '-->', daugyba(sk3, 'labas'));
console.log('ERROR', '-->', daugyba('labas', sk3));
console.log('ERROR', '-->', daugyba('', sk3)); // jei duoda '' tuscia stringa javascript duoda nuli
console.log('ERROR', '-->', daugyba('', true));
console.log('ERROR', '-->', '', '-->', daugyba(sk3, false));
console.log('ERROR', '-->', daugyba('', sk1));
console.log('ERROR', '-->', daugyba('', []));
console.log('ERROR', '-->', daugyba(sk2, []));
console.log('ERROR', '-->', daugyba(sk2, [1, 2, 3]));
console.log('ERROR', '-->',daugyba(7, NaN));
console.log('ERROR', '-->',daugyba(NaN, 7));
console.log('ERROR', '-->',daugyba(7, Infinity));
console.log('ERROR', '-->',daugyba(Infinity, 7));
console.log(daugyba(sk1, sk2));
console.log(daugyba(sk2, sk3));
console.log(daugyba(sk3, sk1));



console.log('-------------');
console.log(5); //number
console.log(true);//boolean
console.log('' + 5);//string
console.log('' + true);//string
console.log(typeof ('' + 5));// typeof visada gaunasi string
console.log(typeof ('' + true));// typeof visada gaunasi string
/*  ARROW netinka, nes NaN
console.log('-------------');
const daugyba2 = (a, b) => a * b;
console.log(daugyba2(sk1, sk2));
console.log(daugyba2(sk2, sk3));
console.log(daugyba2(sk3, sk1));
console.log(daugyba2(sk3, 'labas')); */
