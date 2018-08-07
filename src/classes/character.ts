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

  constructor({ name, characterClass }: { name: string; characterClass: {} }) {
    this.name = name;
    this.characterClass = characterClass;
  }

  rest() {
    this.health = this.maxHealth;
    this.mana = this.maxMana;
  }

  setStats(stats) {
    this.maxHealth = stats.maxHealth;
    this.maxMana = stats.maxMana;
    this.strength = stats.strength;
    this.intelligence = stats.intelligence;
    this.constitution = stats.constitution;
    this.dexterity = stats.dexterity;
    this.wisdom = stats.wisdom;
    this.charisma = stats.charisma;
  }

  updateStats(stats) {
    this.maxHealth = stats.maxHealth || this.maxHealth;
    this.maxMana = stats.maxMana || this.maxMana;
    this.strength = stats.strength || this.strength;
    this.intelligence = stats.intelligence || this.intelligence;
    this.constitution = stats.constitution || this.constitution;
    this.dexterity = stats.dexterity || this.dexterity;
    this.wisdom = stats.wisdom || this.wisdom;
    this.charisma = stats.charisma || this.charisma;
  }

  setProficiencies(proficiencies) {
    this.proficiencies = [
      ...proficiencies,
      ...this.characterClass.proficiencies
    ];
  }

  setItems(items) {
    this.items = [...items];
  }

  setSpells(spells) {
    this.spells = [...spells];
  }
}
