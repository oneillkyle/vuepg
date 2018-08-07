import axios from 'axios';
import {
  from
} from 'rxjs';

export default {
  baseEndpoint: 'http://www.dnd5eapi.co/api/',
  endpoints: {
    abilityScores: 'ability-scores',
    classes: 'classes',
    conditions: 'conditions',
    damageTypes: 'damage-types',
    equipmentCategories: 'equipment-categories',
    equipment: 'equipment',
    features: 'features',
    languages: 'languages',
    magicSchools: 'magic-schools',
    monsters: 'monsters',
    proficiencies: 'proficiencies',
    races: 'races',
    skills: 'skills',
    spellcasting: 'spellcasting',
    spells: 'spells',
    startingequipment: 'startingequipment',
    subclasses: 'subclasses',
    subraces: 'subraces',
    traits: 'traits',
    utility: 'utility',
    weaponProperties: 'weapon-properties'
  },

  getResource(resourceName, id) {
    return from(
      axios.get(`${this.baseEndpoint}${this.endpoints[resourceName]}/${id || ''}`)
    );
  },
  getResourceByUrl(url) {
    return from(
      axios.get(`${url}`)
    );
  },
  rollInitialValues() {
    return [15, 14, 13, 12, 10, 8];
  }
};
