"use strict";

class Nutrition {
   
    constructor(calories, dessert, snack) {
        this.calories = calories;
        this.dessert = dessert;
        this.snack = snack;
    }
getCalories() {
    console.log("Huge number of calories", this.calories);
}

    sayYammy() {
        console.log("Mmm", this.dessert);
    }
}

class Supplement extends Nutrition {
    #spicy;
constructor (calories, dessert, snack, salty, spicy) {
    super(calories, dessert, snack);
    this.salty = salty;
    this.#spicy = spicy;
}
getSalty() {
    return this.salty;
}

getSpicy () {
    return this.#spicy;
}
}

class Food extends Nutrition {
    #fatty;
constructor (calories, dessert, snack, vegan, fatty, healthy) {
    super(calories, dessert, snack);
    this.vegan = vegan;
    this.#fatty = fatty;
    this.healthy = healthy;
}
getHealthy() {
    return this.healthy;
}
getFatty() {
    return this.#fatty;
}
getVegan () {
    return this.vegan;
}
tasty() {
    super.sayYammy();
    console.log("delicious");
}

}

class Drink extends Nutrition {
    #sweet;
    constructor (calories, bitter, sweet, sour) {
        super(calories);
        this.bitter = bitter;
        this.#sweet = sweet;
        this.sour = sour;
    }
    getBitter() {
        return this.bitter;
    }
    getSweet() {
        return this.#sweet;
    }
    getSour () {
        return this.sour;
    }
    tasty() {
        super.sayYammy();
        console.log("delicious");
    }
}


// Ти можешь додати ще класи Dessert та Snack які будуть успадковуватися від класу Food
class Dessert extends Food {
    constructor(name) {
        super(name);
        this.healthy = false;
        this.vegan = ["yes", "again yes"];
    }
    chooseMeal() {
        console.log(`Congratulations! You chose ${this.name}`)
    }
}

class Snack extends Food {
    constructor(name) {
        super(name);
        
    }
    what() {
    super.getVegan()
    console.log("vegan");
    }

    chooseMeal() {
        console.log(`Congratulations! You chose ${this.name}`)
    }
}

const cake = new Nutrition(400, "Raffaello", "to coffe");
cake.sayYammy();
const wisky = new Nutrition(1000, "Wisky 5 star", "to good mood");
wisky.getCalories();
const food = new Food("soya", "chips", "vegetables")
const fatty = new Food("cheese")
food.tasty();
const drink = new Drink("200", "shweps", "cola", "limonchello")
drink.tasty();
console.log(drink.getSweet());
drink.getCalories();
const supplement = new Supplement(240, "chooros", "fish", "sea-salt", "pepper");
console.log(supplement);
const dessert = new Dessert("dessert");
console.log(dessert.name);
dessert.chooseMeal();
const snack = new Snack("chips");
  snack.what();