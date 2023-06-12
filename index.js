"use strict";

// class Nutrition {
   
//     constructor(calories, dessert, snack) {
//         this.calories = calories;
//         this.dessert = dessert;
//         this.snack = snack;
//     }
// getCalories() {
//     console.log("Huge number of calories", this.calories);
// }

//     sayYammy() {
//         console.log("Mmm", this.dessert);
//     }
// }

// class Supplement extends Nutrition {
//     #spicy;
// constructor (calories, dessert, snack, salty, spicy) {
//     super(calories, dessert, snack);
//     this.salty = salty;
//     this.#spicy = spicy;
// }
// getSalty() {
//     return this.salty;
// }

// getSpicy () {
//     return this.#spicy;
// }
// }

// class Food extends Nutrition {
//     #fatty;
// constructor (calories, dessert, snack, vegan, fatty, healthy) {
//     super(calories, dessert, snack);
//     this.vegan = vegan;
//     this.#fatty = fatty;
//     this.healthy = healthy;
// }
// getHealthy() {
//     return this.healthy;
// }
// getFatty() {
//     return this.#fatty;
// }
// getVegan () {
//     return this.vegan;
// }
// tasty() {
//     super.sayYammy();
//     console.log("delicious");
// }

// }

// class Drink extends Nutrition {
//     #sweet;
//     constructor (calories, bitter, sweet, sour) {
//         super(calories);
//         this.bitter = bitter;
//         this.#sweet = sweet;
//         this.sour = sour;
//     }
//     getBitter() {
//         return this.bitter;
//     }
//     getSweet() {
//         return this.#sweet;
//     }
//     getSour () {
//         return this.sour;
//     }
//     tasty() {
//         super.sayYammy();
//         console.log("delicious");
//     }
// }


// // Ти можешь додати ще класи Dessert та Snack які будуть успадковуватися від класу Food
// class Dessert extends Food {
//     constructor(name) {
//         super(name);
//         this.healthy = false;
//         this.vegan = ["yes", "again yes"];
//     }
//     what() {
//         super.getVegan()
//         console.log("vegan");
//         }
//     chooseMeal() {
//         console.log(`Congratulations! You chose ${this.name}`)
//     }
// }

// class Snack extends Food {
//     constructor(name) {
//         super(name);
        
//     }
//     what() {
//     super.getVegan()
//     console.log("vegan");
//     }

//     chooseMeal() {
//         console.log(`Congratulations! You chose ${this.name}`)
//     }
// }

// const cake = new Nutrition(400, "Raffaello", "to coffe");
// cake.sayYammy();
// const wisky = new Nutrition(1000, "Wisky 5 star", "to good mood");
// wisky.getCalories();
// const food = new Food("soya", "chips", "vegetables")
// const fatty = new Food("cheese")
// food.tasty();
// const drink = new Drink("200", "shweps", "cola", "limonchello")
// drink.tasty();
// console.log(drink.getSweet());
// drink.getCalories();
// const supplement = new Supplement(240, "chooros", "fish", "sea-salt", "pepper");
// console.log(supplement);
// const dessert = new Dessert("dessert");
// console.log(dessert.name);
// dessert.chooseMeal();
// const snack = new Snack("chips");
//   snack.what();


//   на прототипах

function City(name, population, country) {
    this.name = name;
    this.population = population;
    this.country = country;
  }
  
  City.prototype.getInfo = function() {
    console.log("The city of " + this.name + " has a population of " + this.population + " and is located in " + this.country);
  }
  
  function CapitalCity(name, population, country, government) {
    City.call(this, name, population, country);
    this.government = government;
  }
  
  CapitalCity.prototype = Object.create(City.prototype);
  CapitalCity.prototype.constructor = CapitalCity;
  
  CapitalCity.prototype.getGovernment = function() {
    console.log("The government of " + this.name + " is a " + this.government + " system");
  }
  
  function BeachCity(name, population, country, beach) {
    City.call(this, name, population, country);
    this.beach = beach;
  }
  
  BeachCity.prototype = Object.create(City.prototype);
  BeachCity.prototype.constructor = BeachCity;
  
  BeachCity.prototype.getBeachInfo = function() {
    console.log("The city of " + this.name + " has a beautiful beach called " + this.beach);
  }
  
  function MountainCity(name, population, country, mountain) {
    City.call(this, name, population, country);
    this.mountain = mountain;
  }
  
  MountainCity.prototype = Object.create(City.prototype);
  MountainCity.prototype.constructor = MountainCity;
  
  MountainCity.prototype.getMountainInfo = function() {
    console.log("The city of " + this.name + " has a stunning mountain called " + this.mountain);
  }
  
  function TouristCity(name, population, country, attraction) {
    City.call(this, name, population, country);
    this.attraction = attraction;
  }
  
  TouristCity.prototype = Object.create(City.prototype);
  TouristCity.prototype.constructor = TouristCity;
  
  TouristCity.prototype.getAttractionInfo = function() {
    console.log("The city of " + this.name + " is famous for its " + this.attraction);
  }
  
  // Shared ancestor and method
  function ItalianCity(name, population, country, pizza) {
    City.call(this, name, population, country);
    this.pizza = pizza;
  }
  
  ItalianCity.prototype = Object.create(City.prototype);
  ItalianCity.prototype.constructor = ItalianCity;
  
  ItalianCity.prototype.getPizzaInfo = function() {
    console.log("The city of " + this.name + " is known for its delicious " + this.pizza + " pizza");
  }
  
  // Shared ancestor and method
  function SpanishCity(name, population, country, paella) {
    City.call(this, name, population, country);
    this.paella = paella;
  }
  
  SpanishCity.prototype = Object.create(City.prototype);
  SpanishCity.prototype.constructor = SpanishCity;
  
  SpanishCity.prototype.getPaellaInfo = function() {
    console.log("The city of " + this.name + " is famous for its traditional " + this.paella + " dish");
  }