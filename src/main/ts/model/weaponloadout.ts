import {Weapon} from "./weapon";
/**
 * Created by poiso_000 on 14/08/2016.
 */

export class WeaponLoadout{
    name: String;
    primarySkill: String;
    baseLoadout: Weapon[];
    substitutions: {[name: String]: Weapon[]};
    additionalOptions: Weapon[];
}