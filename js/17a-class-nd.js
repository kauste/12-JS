class Dog {
    constructor(name, type, furrColor, eyeColor, legNumber, food){
        this.name = name;
        this.type = type;
        this.furrColor = furrColor;
        this.eyeColor = eyeColor;
        this.legNumber = legNumber;
        this.sound = 'Wuf wuf wuf'
        this.sit = false;
    }
soundOn () {
    console.log(this.sound)
}
introduce () {
    if(!this.sit) {
        console.log(`Hi, I am a dog and my name is ${this.name}. My color is ${this.furrColor}. My eyes are ${this.eyeColor}. I have ${this.legNumber} legs. Right now I am standing`)
    } else console.log(`Hi, I am a dog and my name is ${this.name}. My color is ${this.furrColor}. My eyes are ${this.eyeColor}. I have ${this.legNumber} legs. Right now I am siting`)

}

sitDown () {
    this.sit = true;
    console.log(`${this.name} I am sitting.`)
}

standUp () {
    this.sit = false;
    console.log(`${this.name} I am standing.`)
}
}

const mona = new Dog('Mona', 'doberman', 'black and brown', 'black', 4, 'Pedigree')
mona.soundOn()
mona.introduce();
mona.sitDown()
mona.introduce();

console.log(`----------------------`)

class Cat {
    constructor(name, type, furrColor, eyeColor, legNumber, food){
        this.name = name;
        this.type = type;
        this.furrColor = furrColor;
        this.eyeColor = eyeColor;
        this.legNumber = legNumber;
        this.sound = `${this.name}, Meow meow`
        this.lay = false;
    }
soundOn () {
    console.log(this.sound)
}
introduce () {
    if(!this.sit) {
        console.log(`Hi, I am a cat and my name is ${this.name}. My color is ${this.furrColor}. My eyes are ${this.eyeColor}. I have ${this.legNumber} legs. Right now I am standing`)
    } else console.log(`Hi, I am a cat and my name is ${this.name}. My color is ${this.furrColor}. My eyes are ${this.eyeColor}. I have ${this.legNumber} legs. Right now I am laying down.`)
}

destructionMood () {
    console.log (`${this.name} just destroy a Christmas tree.`)
}

layDown () {
    this.lay = true;
    console.log(`${this.name} I am laying.`)
}

standUp () {
    this.lay = false;
    console.log(`${this.name} I am standing.`)
}
}
const Rainius = new Cat('Rainius', 'wild', 'grey', 'green', 4, 'mouse')
Rainius.soundOn()

console.log(`----------------------`)

class Hamster {
    constructor(name, type, furrColor, eyeColor, legNumber, food){
        this.name = name;
        this.type = type;
        this.furrColor = furrColor;
        this.eyeColor = eyeColor;
        this.legNumber = legNumber;
        this.sound = 'krimst krimst'
        this.food = food;
        this.eat = false;
    }
soundOn () {
    console.log(`${this.name}, ${this.sound}`)
}
introduce () {
    if(!this.sit) {
        console.log(`Hi, I am a hamster and my name is ${this.name}. My color is ${this.furrColor}. My eyes are ${this.eyeColor}. I have ${this.legNumber} legs.`)
    } else console.log(`Hi, I am a hamster and my name is ${this.name}. My color is ${this.furrColor}. My eyes are ${this.eyeColor}. I have ${this.legNumber} legs.`)

}

Eat () {
    this.eat = true;
    console.log(`${this.name}, I am eating`)
}

dontEat () {
    this.sit = false;
}
}

const chamiakas = new Hamster ('Chamiakas', 'King hamster', 'white and ginger', 'brown', 4, 'rye')
chamiakas.introduce();

class Parrot {
    constructor(name, type, furrColor, eyeColor, wingsNumber, food){
        this.name = name;
        this.type = type;
        this.furrColor = furrColor;
        this.eyeColor = eyeColor;
        this.wingsNumber = wingsNumber;
        this.sound = `${this.name}, I am ${this.name}.`
        this.speak = false;
    }
soundOn () {
    console.log(this.sound)
}
introduce () {
    if(!this.sit) {
        console.log(`Hi, I am a parrot and my name is ${this.name}. My color is ${this.furrColor}. My eyes are ${this.eyeColor}. I have ${this.wingsNumber} wings.`)
    } else console.log(`Hi, I am a parrot and my name is ${this.name}. My color is ${this.furrColor}. My eyes are ${this.eyeColor}. I have ${this.wingsNumber} wings.`)

}

speak () {
    this.speak = true;
   console.log(`-----------????-------------`);
}

dontspeak () {
    this.speak = false;
}
}

const jack = new Parrot ('Jack', 'King parrot', 'bright and colorful', 'black', 2, 'rye')
jack.introduce();

class Chicken {
    constructor(name, type, furrColor, eyeColor, wingsNumber, food){
        this.name = name;
        this.type = type;
        this.furrColor = furrColor;
        this.eyeColor = eyeColor;
        this.wingsNumber = wingsNumber;
        this.sound = `${this.name}, cyp cyp`
        
    }
soundOn () {
    console.log(this.sound)
}
introduce () {
    if(!this.sit) {
        console.log(`Hi, I am a chicken and my name is ${this.name}. My color is ${this.furrColor}. My eyes are ${this.eyeColor}. I have ${this.wingsNumber} wings.`)
    } else console.log(`Hi, I am a chicken and my name is ${this.name}. My color is ${this.furrColor}. My eyes are ${this.eyeColor}. I have ${this.wingsNumber} wings.`)

}
}

const little = new Chicken ('Little', 'dedekle', 'white', 'blue', 2, 'bread')
little.introduce();

class Pike {
    constructor(name, type, scaleColor, eyeColor, wingsNumber, food){
        this.name = name;
        this.type = type;
        this.scaleColor = scaleColor;
        this.eyeColor = eyeColor;
        this.sound = `op op op`
        
    }
soundOn () {
    console.log(this.sound)
}
introduce () {
        console.log(`Hi, I am a pike and my name is ${this.name}. My color is ${this.scaleColor}. My eyes are ${this.eyeColor}.`)
}
}

const swimmer = new Pike ('Swimmer', 'seas pike', 'silver', 'blue', 2, 'bread')
swimmer.introduce();