import {Component, Input} from "@angular/core";
import {Character} from "../model/character";
import {TalentComponent} from "./talent.component";
/**
 * Created by poiso_000 on 07/08/2016.
 */

@Component({
    selector: 'talent-block',
    template: `
        <div class="talent-block">
            <h3>Talents</h3>
            <talent *ngFor="let talent of character.talents" [talent]="talent"></talent>
        </div>
    `,
    directives: [TalentComponent]
})
export class TalentBlockComponent{
    @Input()
    character : Character;
}