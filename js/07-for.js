const pazymiai = [1, 10, 5, 9, 10, 9, 10, 10]; //neribotas skaicius


const pazymiuKiekis = pazymiai.length;
let pazymiuSuma = 0;
pazymiuSuma += pazymiuSuma[0];
pazymiuSuma += pazymiuSuma[1];
pazymiuSuma += pazymiuSuma[2];
pazymiuSuma += pazymiuSuma[3];
pazymiuSuma += pazymiuSuma[4];

const vidurkis = pazymiuSuma / pazymiuKiekis;
console.log(vidurkis)