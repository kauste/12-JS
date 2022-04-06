// pati
suma = 0;
function numSize(a){
    if(typeof a !== 'number' || a + '' === 'NaN' || a === Infinity || a === -Infinity){
        return 'Pateikta netinkamo tipo reikšmė'
    } else toString = '' + a;
    return toString.length;
}
console.log(numSize(5), '----->', 1);
console.log(numSize(781), '----->', 3);
console.log(numSize(37060123456), '----->', 11);
console.log(numSize(true), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize('asd'), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize(NaN), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize1(Infinity), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize1(-Infinity), '----->', 'Pateikta netinkamo tipo reikšmė');

// destytojas
function numSize1(num){
    console.log(num)
    if (typeof num !== 'number' 
        || !isFinite(num) ) { //NaN irgi not finite
        return 'ERROR: netinkamas tipas';
    } 
    const numString = num + '';
    let size = numString.length;
    // ar skaicius turi kableli
    if (num % 1 !== 0){ // if (numSize.includes('.')){
        size--
    }
    // skaicius neigiamas
    if (num < 0) {
        size--;
    }
    return size;
}


console.log(numSize1(5), '----->', 1);
console.log(numSize1(781), '----->', 3);
console.log(numSize1(37060123456), '----->', 11);
console.log(numSize1(7.81), '----->', 4);
console.log(numSize1(true), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize1('asd'), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize1(NaN), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize1(Infinity), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize1(-Infinity), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize1(true), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize1([1, 2, 3]), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize1([]), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize1(), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize1(numSize1), '----->', 'Pateikta netinkamo tipo reikšmė');
console.log(numSize1(1.5), '----->', '2');
console.log(numSize1(-5), '----->', '1');
console.log(numSize1(-1.5), '----->', '2');
console.log(numSize1(0.00000000001), '----->', '1e-11');
console.log(numSize1(1000000000000000), '----->','1e-16' );

//Math.abs() – absolute reiksme