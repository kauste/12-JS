//Pirmas variantas

function reverseString(text) {
    let reverse = '';
    
    for(let i = 0; i <text.length; i++) {
        const position = text.length -1 - i; //   nes text length -1 atspindi kokioje konkreciai pozicijoje paskutine raide,
        const letter = text[position];
        reverse += letter;  
    }
    return reverse        
}
console.log(reverseString('abc'), '--->', 'cba')

//Suprastinta

function reverseString(text) {
    let reverse = '';

    for(let i = 0; i <text.length; i++) {
        const position = text.length -1 - i; 
        reverse += text[position];  
    }
    return reverse;        
}
console.log(reverseString('abc'), '--->', 'cba')

console.log('-----')
//Antras variantas

function reverseString2(text) {
    let reverse = '';
    for (let i = 0; i < text.length; i++){
        const letter = text[i]
        reverse = letter + reverse

    }
    return(reverse)
}
console.log(reverseString2('abc'), '--->', 'cba')

//Suprastintas antras

function reverseString2(text) {
    let reverse = '';

    for (let i = 0; i < text.length; i++){
        reverse = text[i] + reverse
    }
    return(reverse)
}
console.log(reverseString2('abc'), '--->', 'cba')


console.log('-----')
// Trecias variantas

function reverseString3(text) {
    let reverse = '';
    for (i = text.length - 1; i >= 0; i--) {
        reverse += text[i];
    }
    return reverse
}

console.log(reverseString2('abc'), '--->', 'cba')
