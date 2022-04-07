function letters(text, number) {
    if(typeof text !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo';
    };
    if(text === '' || text.length >= 100) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    };  

    if(typeof number !== 'number' ) {
        return 'Antrasis kintamasis yra netinkamo tipo.'
    }
    if(!isFinite(number)) {
        return 'Skaicius turi buti baigtinis'
    }
    if(number % 1 !==0){
        return 'Skaicius turi buti sveikasis'
    }
    if (number === 0) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.'
    }
    if (text.length < number) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį'
    } 
    
    let textType = '';
    for (i = number - 1; i < text.length; i += number) {
        textType += text[i];        
    }
    return textType;
}

console.log(letters('pasikiskiakopusteliaudamas', 4));
console.log(letters('abcdefg', 2));
console.log(letters('abcdefghijkl', 3));
console.log(letters('abc', 0));
console.log(letters('abc', 4));
console.log(letters(1561, 2));
console.log(letters('abc', 1.5));


//console.log(letters(5, 4));
//console.log(letters('', 4));
//console.log(letters('ujhjbvjbh,', true));
//console.log(letters('labas', 10));
