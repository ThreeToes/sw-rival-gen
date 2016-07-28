/**
 * Created by poiso_000 on 28/07/2016.
 */
import {Component} from '@angular/core';
import {Character} from "../model/character";

@Component({
    selector:'attribute-block',
    template: `
    <div class="attribute-container">
        <label for="brawnInput" 
            class="attribute-label">Brawn</label>
        <input id="brawnInput" 
            class="attribute-input" 
            [(ngModel)]="character.attributes.brawn"/>
        <label for="brawnInput" 
            class="attribute-label">Agility</label>
        <input id="brawnInput" 
            class="attribute-input" 
            [(ngModel)]="character.attributes.agility"/>
        <label for="brawnInput" 
            class="attribute-label">Intelligence</label>
        <input id="brawnInput" 
            class="attribute-input" 
            [(ngModel)]="character.attributes.intelligence"/>
        <label for="brawnInput" 
            class="attribute-label">Cunning</label>
        <input id="brawnInput" 
            class="attribute-input" 
            [(ngModel)]="character.attributes.cunning"/>
        <label for="brawnInput" 
            class="attribute-label">Willpower</label>
        <input id="brawnInput" 
            class="attribute-input" 
            [(ngModel)]="character.attributes.willpower"/>
        <label for="brawnInput" 
            class="attribute-label">Presence</label>
        <input id="brawnInput" 
            class="attribute-input" 
            [(ngModel)]="character.attributes.presence"/>
    </div>
    `
})
export class AttributeComponent{
    character: Character;
}