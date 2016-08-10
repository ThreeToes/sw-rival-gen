import {Component, Input} from "@angular/core";
import {Character} from "../model/character";
import {EquipmentComponent} from "./equipment.component";
/**
 * Created by poiso_000 on 10/08/2016.
 */

@Component({
    selector: 'equipment-block',
    template: `
        <div class="equipment-block">
            <h3>Equipment</h3>
            <equipment *ngFor="let equipment of character.equipment" [equipment]="equipment"></equipment>
        </div>
    `,
    directives: [EquipmentComponent]
})
export class EquipmentBlockComponent{
    @Input()
    character: Character;
}