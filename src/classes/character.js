export default class Character {
  name = '';
  characterClass = {};

  health = 0;
  maxHealth = 0;
  mana = 0;
  maxMana = 0;
  level = 1;

  strength = 0;
  intelligence = 0;
  constitution = 0;
  dexterity = 0;
  wisdom = 0;
  charisma = 0;

  proficiencies = [];
  items = [];
  equipment = {};
  spells = [];

  constructor({
    name,
    characterClass
  }) {
    this.name = name;
    this.characterClass = characterClass;
  }

  rollInitialStats(initialStats) {
    this.health = initialStats.health;
    this.startingHealth = initialStats.health;
    this.mana = initialStats.mana;
    this.startingMana = initialStats.mana;
    this.strength = initialStats.strength;
    this.intelligence = initialStats.intelligence;
    this.constitution = initialStats.constitution;
    this.dexterity = initialStats.dexterity;
    this.wisdom = initialStats.wisdom;
    this.charisma = initialStats.charisma;
  }
}
