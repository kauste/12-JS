// VALIDATION


function bigNum (arr) {
    if(typeof arr + '' !== 'object') {
        return ('Pateikta netinkamo tipo reikšmė.');
    } 
    if (arr.length === 0) {
        return ('Pateiktas sarasas negali buti tuscias');

//LOGIC
    } let biggestNumber = -Infinity;

    for (i = 0; i < arr.length; i++) {
        const number = arr[i];
        //INNER VALIDATION
        if (typeof number !== 'number'|| !isFinite(number)) {
            continue; // grizk atgal prie aliteracijos, svarbu, kad butu ciklo viduje
        }
        //INNER LOGIC
        if (number > biggestNumber) {
            biggestNumber = number;
        } 
    }

//RESULT VALIDATION
    if (biggestNumber === -Infinity) {
        return ('Pateiktam sarase nera nei vieno normalausskaiciaus');
    } 

//RESULT RETURN
    return biggestNumber;
}



console.log(bigNum([1], '-->', 1));
console.log(bigNum([1, 2, 3], '-->', 3));
console.log(bigNum([-5, 78, 14, 0, 18], '-->', 78));
console.log(bigNum([69, 69, 69, 69, 66], '-->', 69));
console.log(bigNum(['x', 69, 69, 69, 66], '-->', 69));
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8], '-->', -1));
console.log(bigNum('pomidoras', '-->', 'Pateikta netinkamo tipo reikšmė.'));
console.log(bigNum([], '-->', 'Pateiktas sarasas negali buti tuscias'));
console.log(bigNum(['x']));
console.log(bigNum(['x', true, [], -Infinity]));
console.log(bigNum([true, -1], '-->', 1));
