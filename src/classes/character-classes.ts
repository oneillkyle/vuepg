class CharacterClass {
  startingHealth = [0, 1];
  startingMana = [0, 1];

  startingStrength = [0, 1];
  startingIntelligence = [0, 1];
  startingConstitution = [0, 1];
  startingDexterity = [0, 1];
  startingWisdom = [0, 1];
  startingCharisma = [0, 1];

  getRolledValues() {
    this.rolledValues = {
      health: CharacterClass.getRolledValue(this.startingHealth),
      mana: CharacterClass.getRolledValue(this.startingMana),
      strength: CharacterClass.getRolledValue(this.startingStrength),
      intelligence: CharacterClass.getRolledValue(this.startingIntelligence),
      constitution: CharacterClass.getRolledValue(this.startingConstitution),
      dexterity: CharacterClass.getRolledValue(this.startingDexterity),
      wisdom: CharacterClass.getRolledValue(this.startingWisdom),
      charisma: CharacterClass.getRolledValue(this.startingCharisma)
    };
  }

  static getRolledValue([min, max]) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  }
}

export class Jester extends CharacterClass {
  startingHealth = [7, 9];
  startingMana = [3, 6];

  startingStrength = [1, 2];
  startingIntelligence = [3, 4];
  startingConstitution = [3, 4];
  startingDexterity = [8, 12];
  startingWisdom = [3, 4];
  startingCharisma = [7, 10];

  constructor() {
    super();
    this.getRolledValues();
  }
}

export class Mage extends CharacterClass {
  startingHealth = [0, 1];
  startingMana = [0, 1];

  startingStrength = [0, 1];
  startingIntelligence = [0, 1];
  startingConstitution = [0, 1];
  startingDexterity = [0, 1];
  startingWisdom = [0, 1];
  startingCharisma = [0, 1];

  constructor() {
    super();
    this.getRolledValues();
  }
}
