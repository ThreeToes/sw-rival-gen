import {Component, Input} from "@angular/core";
import {PersonalityComponent} from "./personality.component";
import {Character} from "../model/character";
/**
 * Created by poiso_000 on 07/08/2016.
 */

@Component({
    selector: 'personality-block',
    template: `
        <div class="personality-block" *ngIf="character.personalityTraits.length > 0">
            <h3>Personality Traits</h3>
            <personality-trait *ngFor="let trait of character.personalityTraits" [personalityTrait]="trait"></personality-trait>
        </div>
    `,
    directives: [PersonalityComponent]
})
export class PersonalityBlockComponent {
    @Input()
    character: Character;
}