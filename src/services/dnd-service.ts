import axios from 'axios';
import {
  from
} from 'rxjs';

export class DndService {
  baseEndpoint = 'http://www.dnd5eapi.co/api/';
  endpoints: {[x: string]: string} = {
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
  };

  getResource(resourceName: string, id?: string): any {
    return from(
      axios.get(`${this.baseEndpoint}${this.endpoints[resourceName]}/${id || ''}`)
    );
  }

  getResourceByUrl(url: string) {
    return from(
      axios.get(`${url}`)
    );
  }

  rollInitialValues() {
    return [15, 14, 13, 12, 10, 8];
  }
}
