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
const cake = new Nutrition(400, "Raffaello", "to coffe");
cake.sayYammy();
const wisky = new Nutrition(1000, "Wisky 5 star", "to good mood");
wisky.getCalories();


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


const food = new Food("soya", "chips", "vegetables")
// console.log(food);
// const bestFood = new Food("kokos-milk", "nagets", "fruits")
// // console.log(bestFood);
// // const deliciousFood = new Food("tophu", "steak", "fish")
// // console.log(deliciousFood);
// console.log(bestFood.getFatty());
const fatty = new Food("cheese")
food.tasty();
// const summarise = new Nutrition({ calories: "forget about calories", vegan: [], fatty: [], healthy: [] } );
// console.log(summarise);
// console.log(summarise.calories);



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
}
const drink = new Drink("200", "shweps", "cola", "limonchello")
// console.log(drink);
// const drinkOfMine = new Drink("shweps", "fresh", "lime-juice")
// console.log(drinkOfMine);
// const hotDrink = new Drink("B-52", "moccachino", "lemonTea")
// console.log(hotDrink);
console.log(drink.getSweet());
drink.getCalories();
// class Pleasure {
//     #deadly;
// constructor (short, long, deadly) {
//     this.short = short;
//     this.long = long;
//     this.#deadly = deadly;
// }
// getShort() {
//     return this.short;
// }
// getLong() {
//     return this.long;
// }
// getDeadly () {
//     return this.#deadly;
// }

// }
// const pleasure = new Pleasure("maffin", "vacation", "drugs")
// console.log(drink);
// const pleasureOfMine = new Pleasure("chokolade", "sea-vacation", "music")
// console.log(pleasureOfMine);
// const othersPleasure = new Pleasure("ice-cream", "dance", "smoking")
// console.log(othersPleasure);
// console.log(othersPleasure.getDeadly());


const supplement = new Supplement(240, "chooros", "fish", "sea-salt", "pepper");
console.log(supplement);


