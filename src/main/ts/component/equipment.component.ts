import {Equipment} from "../model/equipment";
import {Input, Component} from "@angular/core";
/**
 * Created by poiso_000 on 10/08/2016.
 */

@Component({
    selector: 'equipment',
    template: `
        <div class="equipment">
            <h4>{{equipment.name}}</h4>
            <p>{{equipment.reference}}</p>
        </div>
    `
})
export class EquipmentComponent{
    @Input()
    equipment : Equipment;
}