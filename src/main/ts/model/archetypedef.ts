import {SkillDefinition} from "./skilldefinition";
import {Attributes} from "./attributes";
import {Talent} from "./talent";
import {Equipment} from "./equipment";
import {Weapon} from "./weapon";
import {Armour} from "./armour";
/**
 * Created by poiso_000 on 09/08/2016.
 */
export class ArchetypeDefinition{
    name: String;
    stats: Attributes[];
    skillSets: SkillDefinition[];
    maxForceRating: number;
    forceChance: number;
    minSkillSets: number;
    maxSkillSets: number;
    minTalents: number;
    maxTalents: number;
    optionalTalents: Talent[];
    mandatoryTalents: Talent[];
    minEquipment: number;
    maxEquipment: number;
    equipment: Equipment[];
    minWeapons: number;
    maxWeapons: number;
    weapons: Weapon[];
    armour: Armour[];
    weaponLoadouts: String[];
}