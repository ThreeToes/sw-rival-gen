import {Weapon} from "../model/weapon";
import {Component, Input} from "@angular/core";
import {Character} from "../model/character";
/**
 * Created by poiso_000 on 10/08/2016.
 */

@Component({
    selector: 'weapon',
    template:`
        <div class="weapon-container">
            <h4>{{weapon.name}}</h4>
            <ul>
                <li *ngIf="weapon.type == 'rangedLight' || weapon.type == 'rangedHeavy' || weapon.type=='lightsaber'"><strong>Damage:</strong> {{weapon.damage}}</li>
                <li *ngIf="weapon.type == 'melee' || weapon.type == 'brawl'"><strong>Damage:</strong> {{weapon.damage + character.attributes.brawn}}</li>
                <li><strong>Critical:</strong> {{weapon.critical}}</li>
                <li><strong>Range:</strong> {{weapon.range}}</li>
                <li><strong>Qualities:</strong> {{weapon.qualities}}</li>
                <li><strong>Reference:</strong> {{weapon.reference}}</li>
            </ul>
        </div>
    `
})
export class WeaponComponent{
    @Input()
    weapon: Weapon;
    @Input()
    character: Character;
}