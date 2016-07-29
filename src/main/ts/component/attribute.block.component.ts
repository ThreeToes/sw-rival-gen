/**
 * Created by poiso_000 on 28/07/2016.
 */
import {Component, Input} from '@angular/core';
import {Character} from "../model/character";
import {AttributeComponent} from "./attribute.component";

@Component({
    selector:'attribute-block',
    template: `
    <div class="attributes-container">
        <attribute [attributeName]="'Brawn'" [magnitude]="character.attributes.brawn"></attribute>
        <attribute [attributeName]="'Agility'" [magnitude]="character.attributes.agility"></attribute>
        <attribute [attributeName]="'Intelligence'" [magnitude]="character.attributes.intelligence"></attribute>
        <attribute [attributeName]="'Cunning'" [magnitude]="character.attributes.cunning"></attribute>
        <attribute [attributeName]="'Willpower'" [magnitude]="character.attributes.willpower"></attribute>
        <attribute [attributeName]="'Presence'" [magnitude]="character.attributes.presence"></attribute>
    </div>
    `,
    directives:[AttributeComponent]
})
export class AttributeBlockComponent {
    @Input()
    character: Character;
}