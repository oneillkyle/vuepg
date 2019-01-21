export class CharacterClass {
  startingHealth: [number, number] = [0, 1];
  startingMana: [number, number] = [0, 1];

  startingStrength: [number, number] = [0, 1];
  startingIntelligence: [number, number] = [0, 1];
  startingConstitution: [number, number] = [0, 1];
  startingDexterity: [number, number] = [0, 1];
  startingWisdom: [number, number] = [0, 1];
  startingCharisma: [number, number] = [0, 1];

  rolledValues = {};

  getRolledValues() {
    this.rolledValues = {
      health: this.getRolledValue(this.startingHealth),
      mana: this.getRolledValue(this.startingMana),
      strength: this.getRolledValue(this.startingStrength),
      intelligence: this.getRolledValue(this.startingIntelligence),
      constitution: this.getRolledValue(this.startingConstitution),
      dexterity: this.getRolledValue(this.startingDexterity),
      wisdom: this.getRolledValue(this.startingWisdom),
      charisma: this.getRolledValue(this.startingCharisma)
    };
  }

  getRolledValue([min, max]: [number, number]) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// tslint:disable-next-line:max-classes-per-file
export class Jester extends CharacterClass {
  startingHealth: [number, number] = [7, 9];
  startingMana: [number, number] = [3, 6];

  startingStrength: [number, number] = [1, 2];
  startingIntelligence: [number, number] = [3, 4];
  startingConstitution: [number, number] = [3, 4];
  startingDexterity: [number, number] = [8, 12];
  startingWisdom: [number, number] = [3, 4];
  startingCharisma: [number, number] = [7, 10];

  constructor() {
    super();
    this.getRolledValues();
  }
}

// tslint:disable-next-line:max-classes-per-file
export class Mage extends CharacterClass {
  startingHealth: [number, number] = [0, 1];
  startingMana: [number, number] = [0, 1];

  startingStrength: [number, number] = [0, 1];
  startingIntelligence: [number, number] = [0, 1];
  startingConstitution: [number, number] = [0, 1];
  startingDexterity: [number, number] = [0, 1];
  startingWisdom: [number, number] = [0, 1];
  startingCharisma: [number, number] = [0, 1];

  constructor() {
    super();
    this.getRolledValues();
  }
}
