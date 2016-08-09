import {Component, Input} from "@angular/core";
import {Character} from "../model";
import {WeaponComponent} from "./weapon.component";
/**
 * Created by poiso_000 on 10/08/2016.
 */

@Component({
    selector: 'weapons-block',
    template: `
        <div class="weapons-block">
            <h3>Weapons</h3>
            <weapon *ngFor="let weapon of character.weapons" [character]="character" [weapon]="weapon"></weapon>
        </div>
    `,
    directives:[WeaponComponent]
})
export class WeaponsBlockComponent{
    @Input()
    character: Character;
}