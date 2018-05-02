import { Jester, Mage } from './character-classes';

export default class Character {
  name = '';
  characterClass = '';

  health = 0;
  maxHealth = 0;
  mana = 0;
  maxMana = 0;
  strength = 0;
  intelligence = 0;
  constitution = 0;
  dexterity = 0;
  wisdom = 0;
  charisma = 0;

  characterClassTemplate = null;

  constructor({
    name,
    characterClass
  }) {
    this.name = name;
    this.characterClass = characterClass;
    this.items = {};
    this.weapons = {};

    this.rollInitialStats();
  }

  rollInitialStats() {
    const CharacterClassTemplate = this.getCharacterClassTemplate(this.characterClass);
    this.characterClassTemplate = new CharacterClassTemplate();
    this.health = this.characterClassTemplate.rolledValues.health;
    this.startingHealth = this.characterClassTemplate.rolledValues.health;
    this.mana = this.characterClassTemplate.rolledValues.mana;
    this.startingMana = this.characterClassTemplate.rolledValues.mana;
    this.strength = this.characterClassTemplate.rolledValues.strength;
    this.intelligence = this.characterClassTemplate.rolledValues.intelligence;
    this.constitution = this.characterClassTemplate.rolledValues.constitution;
    this.dexterity = this.characterClassTemplate.rolledValues.dexterity;
    this.wisdom = this.characterClassTemplate.rolledValues.wisdom;
    this.charisma = this.characterClassTemplate.rolledValues.charisma;
  }

  getCharacterClassTemplate() {
    return {
      jester: Jester,
      mage: Mage
    }[this.characterClass];
  }
}
