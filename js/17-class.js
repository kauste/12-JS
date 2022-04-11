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
Savybes- kintamieji (objektyvi informacija aprie objekta); pvz kokia radijos busena: ijungta ar isjungta, koks garas, koks daznis ijungtas (kokia stotis), kokiam bangu diapazone yra daznis;       pvz, kokia masinos spalva, kiek ratu, kiek pedalu, kokia pavara....
Metodai -funkcionalumas. FUNKCIJOS JAU TURI KONTEKSTA- SKAICIJUOJA JAU BUTENT OBJEKTUI, KITUR PANAUDOTI NEGALI.; ijunk/isjunk radija, padidink garsa/sumazink garsa, dazni didinti/mazinti (perjungt stoti);                                                                    suskaiciuoti, jei automobilio bake tiek kuro, kiek jis nuvaziuos, po kiek laiko vel uzpilti baka...

klases neturi skiaustu
klases- savotiska receptura, bet ne veikiantis dalykas
Objektas- pagal receptura pagamintas kokretus/ apciuopiamas dalykas
*/

class Bankomatas { // KLASES IS DIDZIOSIOS, SUSITARIMO REIKALAS
    constructor(street, color) {
        this.gatve = street; // GALI BUTI IR THIS.STREET = STREET;
        this.spalva = color;
        this.turnedOn = false;
         this.money = 0;
    }
    switchOn () {
        this.turnedOn = true;
        console.log(`${this.gatve} bankomatas ijungtas`);
    }
    switchOff () {
        this.turnedOn = false;
        console.log(`${this.gatve} bankomatas isjungtas`);
    }   
    cashIn (money) { // molney parametras tik sito metodo viduje, riestiniai gniauztai jo apimtis
        //jei neijungtas-   ERROR
        //jei ne  normalus skaicius- ERROR
        //ISKAICIUOJAM
        if(!this.turnedOn){
            console.log(`Panasu, kad ${this.gatve} bankomate nera elektros`);
            return;
        }
        if(typeof money !=='number' 
        || !isFinite(money)) {
            console.log(this.gatve, 'Nepanasu i tikra piniga');
            return;
        }
        if (money <= 0) {
            console.log(this.gatve, 'Minusiniu pinigu nebuna');
            return;
        }

        this.money += money; // this.money -globalus parametras; money -lokalus
        console.log(`${this.gatve}: inesta ${money} pinigu`);
    }
    cashOut (money){
        if(!this.turnedOn){
            console.log(this.gatve, 'Panasu, kad nera elektros');
            return;
        }
        if(typeof money !=='number' 
        || !isFinite(money)) {
            console.log(this.gatve, 'Nepanasu i tikra piniga');
            return;
        }
        if (money <= 0) {
            console.log(this.gatve, 'Minusiniu pinigu nebuna');
            return;
        }
        if (this.money < money) {
            console.log(this.gatve, 'Bankomate siuo metu nera tokios sumos');
            return;
        }
        this.money -= money;
        console.log(`${this.gatve}: isgryninta ${money} pinigu`);
    }
    status(){
        console.log( `${this.gatve} siuo metu pinigu likutis yra ${this.money}`)
    }
}
console.log('---------------------------')
const bankomatas1 = new Bankomatas('Didzioji g. 2', 'red'); // JAU REALUS BANKOMARAS
console.log(bankomatas1);

console.log('---------------------------')
const bankomatas2 = new Bankomatas('Mazoji g. 3', 'blue');
console.log(bankomatas2.gatve);


//ijunkime
console.log('---------------------------')
bankomatas1.turnedOn = true; // nelabai geras budas

console.log('---------swich On------------------')
bankomatas2.switchOn()

//isjunkime
console.log('-----------swich of----------------')
bankomatas1.switchOff();
bankomatas2.switchOff();


console.log('----ineskim pinigus---------');

bankomatas1.cashIn();

console.log('---ijunkime ineskim pinigus-----');
bankomatas1.switchOn();
bankomatas2.switchOn();
bankomatas1.cashIn(true);
bankomatas1.cashIn(-100);
bankomatas1.cashIn(100);
bankomatas1.cashIn(5);
bankomatas2.cashIn(5);
bankomatas1.cashIn(12);
console.log('--- iseskim pinigus-----');
bankomatas1.cashOut(15);
bankomatas1.cashOut(150);

bankomatas1.status()
bankomatas2.status()
