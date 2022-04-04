function reverseString(text) {
    const a = text.length -1 // galima isistatyt
    let reverse = ''

    for(let i = 0; i <text.length; i++) {
    const position = a - i; //  console.log(i, a - i, text[a - i])
    const letter = texr[position];
    reverse += letter;                               
}
return reverse

console.log(reverseString('a'))
