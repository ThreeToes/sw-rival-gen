import {Input, Component} from "@angular/core";
import {Character} from "../model/character";
/**
 * Created by poiso_000 on 10/08/2016.
 */

@Component({
    selector: 'armour',
    template: `
        <div class="armour-container" *ngIf="character.armour != null">
            <h3>Armour - {{character.armour.name}}</h3>
            <ul>
                <li><strong>Soak:</strong> {{character.armour.soak}}</li>
                <li><strong>Defense:</strong> {{character.armour.defense}}</li>
                <li><strong>Reference:</strong> {{character.armour.reference}}</li>
            </ul>
        </div>
    `
})
export class ArmourComponent{
    @Input()
    character: Character;
}