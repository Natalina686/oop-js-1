// Реалізуйте наступну систему, схожу до розглянутої на вебінарі:

// 1) чотири класи для створення об'єктів-сутностей (це можуть бути тварини, покемони, раси і т.д. - проявіть фантазію)
class Nutrition {
    #calories;
    constructor(calories) {
        this.#calories = calories;
    }
    get calories() {
        return this.#calories;
    }
    set calories(newCalories) {
        this.#calories = newCalories;
    }
}

// const summarise = new Nutrition("forget about calories");
// console.log(summarise);
// console.log(summarise.calories);



class Food extends Nutrition {
    #fatty;
constructor (calories, vegan, fatty, healthy) {
    super(calories);
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
}


const food = new Food("soya", "chips", "vegetables")
console.log(food);
const bestFood = new Food("kokos-milk", "nagets", "fruits")
console.log(bestFood);
const deliciousFood = new Food("tophu", "steak", "fish")
console.log(deliciousFood);
console.log(bestFood.getFatty());
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
const drink = new Drink("shweps", "cola", "limonchello")
console.log(drink);
const drinkOfMine = new Drink("shweps", "fresh", "lime-juice")
console.log(drinkOfMine);
const hotDrink = new Drink("B-52", "moccachino", "lemonTea")
console.log(hotDrink);
console.log(drink.getSweet());

class Pleasure {
    #deadly;
constructor (short, long, deadly) {
    this.short = short;
    this.long = long;
    this.#deadly = deadly;
}
getShort() {
    return this.short;
}
getLong() {
    return this.long;
}
getDeadly () {
    return this.#deadly;
}

}
const pleasure = new Pleasure("maffin", "vacation", "drugs")
console.log(drink);
const pleasureOfMine = new Pleasure("chokolade", "sea-vacation", "music")
console.log(pleasureOfMine);
const othersPleasure = new Pleasure("ice-cream", "dance", "smoking")
console.log(othersPleasure);
console.log(othersPleasure.getDeadly());



class Work {
    #boring;
constructor (enjoyable, hard, boring) {
    this.enjoyable = enjoyable;
    this.hard = hard;
    this.#boring = boring;
}
getEnjoyable() {
    return this.enjoyable;
}
getHard() {
    return this.hard;
}
getBoring () {
    return this.#boring;
}
get boring() {
    return this.#boring;
}
set boring(newBoring) {
this.#boring = newBoring;
}
}


const work = new Work("light", "choping", "cleaning");
console.log(work);
const workOfMine = new Work("coding", "cooking", "washing");
console.log(workOfMine);
const anotherWork = new Work("crafting", "ironing", "singing");
console.log(anotherWork);
console.log(work.getBoring());
work.boring = "collecting";
console.log(work.boring);
// 2) у кожного класу має бути мінімум 3 властивості та мінімум 3 методи(але можна й більше)

// 3) у кожного класу має бути своя унікальна властивість

// 4) у кожного класу має бути приватна властивість

// 4) у двох класів має бути спільний предок та спільний метод характерний тільки для них

// 5) у всіх чотирьох класів має бути один (крім проміжних) клас-предок