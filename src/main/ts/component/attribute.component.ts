/**
 * Created by poiso_000 on 28/07/2016.
 */
import {Component, Input} from '@angular/core';
import {Character} from "../model/character";

@Component({
    selector:'attribute-block',
    template: `
    <div class="attribute-container">
        <label for="brawnInput" 
            class="attribute-label">Brawn</label>
        <input type="number" min="1" max="6" id="brawnInput" 
            class="attribute-input" 
            [(ngModel)]="character.attributes.brawn"/>
        <label for="agilityInput" 
            class="attribute-label">Agility</label>
        <input type="number" min="1" max="6"  id="agilityInput" 
            class="attribute-input" 
            [(ngModel)]="character.attributes.agility"/>
        <label for="intelligenceInput" 
            class="attribute-label">Intelligence</label>
        <input type="number" min="1" max="6"  id="intelligenceInput" 
            class="attribute-input" 
            [(ngModel)]="character.attributes.intelligence"/>
        <label for="cunningInput" 
            class="attribute-label">Cunning</label>
        <input type="number" min="1" max="6"  id="cunningInput" 
            class="attribute-input" 
            [(ngModel)]="character.attributes.cunning"/>
        <label for="willpowerInput" 
            class="attribute-label">Willpower</label>
        <input type="number" min="1" max="6"  id="willpowerInput" 
            class="attribute-input" 
            [(ngModel)]="character.attributes.willpower"/>
        <label for="presenceInput" 
            class="attribute-label">Presence</label>
        <input type="number" min="1" max="6"  id="presenceInput" 
            class="attribute-input" 
            [(ngModel)]="character.attributes.presence"/>
    </div>
    `
})
export class AttributeComponent {
    @Input()
    character: Character;
}