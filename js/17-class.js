function average (list){
    suma = 0;
    for (const item of list) {
    suma += item;
    }
    return suma/ list.length;
}

const rez = average([10, 2, 8, 4])
console.log(rez)

/*
CLASS: savybiu ir metodu junginys/grupe.
Savybes- kintamieji (info); pvz koks radijos daznis ijungtas
Metodai -funkcionalumas; dazni didinti/mazinti

klases neturi skiaustu
klases- savotiska receptura
Objektas- pagal receptura pagamintas kokretus/ apciuopiamas dalykas
*/

class Bankomatas {
    constructor(street, color) {
        this.gatve = street;
        this.spalva = color;
        this.turnedOn = false;
         this.money = 0;
    }
    switchOn () {
        this.turnedOn = true;
    }
    switchOff () {
        this.turnedOff = false;
    }   
    cashIn (){
        if(this.turnedOn){
            console.log('Bandoma inesti pinikgus')
        } else {
            console.log('Panasu, jog nera elektros')
        }
    }
    cashOut (){
        console.log('Bandoma isgryninti pinigus')
    }
}

const bankomatas1 = new Bankomatas('Didzioji g. 2', 'red');
console.log(bankomatas1);
const bankomatas2 = new Bankomatas('Mazoji g. 3', 'blue');
console.log(bankomatas2.gatve);


//ijunkime

bankomatas1.turnedOn = true; // nelabai geras budas
console.log(bankomatas1);

bankomatas2.switchOn()
bankomatas2.switchOff()
console.log(bankomatas2);

bankomatas1.cashIn()