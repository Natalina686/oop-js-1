// Клас-предок
class Pokemon {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
    
    attack() {
      console.log(`${this.name} used an attack!`);
    }
  }
  
  // Перший клас-спадкоємець
  class Pikachu extends Pokemon {
    constructor(name) {
      super(name, 'Electric');
      this.level = 1;
      this.moves = ['Thunderbolt', 'Quick Attack', 'Iron Tail'];
    }
    
    evolve() {
      console.log(`${this.name} evolved into Raichu!`);
      this.name = 'Raichu';
      this.type = 'Electric';
      this.level = 2;
      this.moves = ['Thunderbolt', 'Quick Attack', 'Iron Tail', 'Thunder Punch'];
    }
    
    useMove(move) {
      console.log(`${this.name} used ${move}!`);
    }
    
    get levelUpMessage() {
      return `${this.name} leveled up to level ${this.level + 1}!`;
    }
  }


  // Другий клас-спадкоємець
  class Charmander extends Pokemon {
    constructor(name) {
      super(name, 'Fire');
      this.level = 1;
      this.moves = ['Ember', 'Scratch', 'Growl'];
    }
    
    evolve() {
      console.log(`${this.name} evolved into Charmeleon!`);
      this.name = 'Charmeleon';
      this.type = 'Fire';
      this.level = 2;
      this.moves = ['Ember', 'Scratch', 'Growl', 'Flamethrower'];
    }
    
    useMove(move) {
      console.log(`${this.name} used ${move}!`);
    }
    
    get levelUpMessage() {
      return `${this.name} leveled up to level ${this.level + 1}!`;
    }
  }
  
  // Третій клас-спадкоємець
  class Squirtle extends Pokemon {
    constructor(name) {
      super(name, 'Water');
      this.level = 1;
      this.moves = ['Water Gun', 'Tackle', 'Tail Whip'];
    }
    
    evolve() {
      console.log(`${this.name} evolved into Wartortle!`);
      this.name = 'Wartortle';
      this.type = 'Water';
      this.level = 2;
      this.moves = ['Water Gun', 'Tackle', 'Tail Whip', 'Hydro Pump'];
    }
    
    useMove(move) {
      console.log(`${this.name} used ${move}!`);
    }
    
    get levelUpMessage() {
      return `${this.name} leveled up to level ${this.level + 1}!`;
    }
  }
  
  // Четвертий клас-спадкоємець
  class Bulbasaur extends Pokemon {
    constructor(name) {
      super(name, 'Grass/Poison');
      this.level = 1;
      this.moves = ['Vine Whip', 'Tackle', 'Growl'];
    }
    
    evolve() {
      console.log(`${this.name} evolved into Ivysaur!`);
      this.name = 'Ivysaur';
      this.type = 'Grass/Poison';
      this.level = 2;
      this.moves = ['Vine Whip', 'Tackle', 'Growl', 'Solar Beam'];
    }
    
    useMove(move) {
      console.log(`${this.name} used ${move}!`);
    }
    
    get levelUpMessage() {
      return `${this.name} leveled up to level ${this.level + 1}!`;
    }
  }
  
  // Спільний предок для Charmander та Bulbasaur
  class StarterPokemon extends Pokemon {
    constructor(name, type) {
      super(name, type);
      this.level = 1;
      this.moves = ['Tackle', 'Growl'];
    }
    
    chooseStarter() {
      console.log(`Congratulations! You chose ${this.name} as your starter Pokemon!`);
    }
    
    useMove(move) {
      console.log(`${this.name} used ${move}!`);
    }
  }
  
  // Приклад
  const pikachu = new Pikachu('Pikachu');
  pikachu.useMove('Thunderbolt');
  console.log(pikachu.levelUpMessage);
  pikachu.evolve();
  pikachu.useMove('Thunder Punch');
  
  const charmander = new Charmander('Charmander');
  console.log(charmander.levelUpMessage);
  charmander.evolve();
  charmander.useMove('Flamethrower');
  
  const squirtle = new Squirtle('Squirtle');
  squirtle.useMove('Water Gun');
  console.log(squirtle.levelUpMessage);
  squirtle.evolve();
  squirtle.useMove('Hydro Pump');
  
  const bulbasaur = new Bulbasaur('Bulbasaur');
  bulbasaur.useMove('Vine Whip');
  console.log(bulbasaur.levelUpMessage);
  bulbasaur.evolve();
  bulbasaur.useMove('Solar Beam');