////////////////////////////////
// Creating Classes & factories
////////////////////////////////

// Hamster

class Hamster {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun(){
      console.log('squeak squeak')
    }
    eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
      return this.price
    }
  }

// Person

class Person {
    constructor(name){
      this.name = name
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet(){
      console.log(`I am ${this.name} hello`)
    }
    eat(){
      this.weight++
      this.mood++
    }
    exercise(){
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }
    buyHamster(hamster){
      this.hamsters.push(hamster)
      this.mood+=10
      this.bankAccount-=hamster.getPrice()
    }
  }

// - - Create a story with your Person class - -

//   Instantiate a new Person named Timmy
const timmy = new Person('Timmy')

//   Age Timmy five years
timmy.age = 5

//   At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
for(let i = 1; i <= 3; i++){
    timmy.eat()
}

//   Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
for(let i = 1; i <= 5; i++){
    timmy.exercise()
}

//   Age Timmy 9 years
for(let i = 1; i <= 9; i++){
    timmy.ageUp()
}

//   Create a hamster named "Gus"
const hamster = new Hamster('Gus')

//   Set Gus's owner to the string "Timmy"
hamster.owner = 'Timmy'

//   Have Timmy "buy" Gus
timmy.buyHamster(hamster)

//   Age Timmy 15 years
for(let i = 1; i <= 15; i++){
    timmy.ageUp()
}

//   Have Timmy eat twice
for(let i = 1; i <= 2; i++){
    timmy.eat()
}

//   Have Timmy exercise twice
for(let i = 1; i <= 2; i++){
    timmy.exercise()
}
// console.log(timmy)

// Chef Make Dinners

class Dinner {
    constructor(appetizer, entree, dessert){
        this.chef = ''
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}
Dinner.chef = 'Gordon Ramsay'
class Chef {
    constructor(name){
        this.name = name
        this.dinners = []
    }
    cookDinner(dinner){
        this.dinners.push(dinner)
    }
}
const ramsay = new Chef('Gordon Ramsay')
const italian = new Dinner('Breadsticks', 'Chicken Alfredo', 'Tiramisù')
const asian = new Dinner('Sashimi', 'Pork Curry Katsu', 'Mochi')
const spanish = new Dinner('Arroz Blanco', 'Camarones con Ajillo', 'Arroz con leche')

ramsay.cookDinner(italian)
ramsay.cookDinner(asian)
ramsay.cookDinner(spanish)

console.log(ramsay.dinners)