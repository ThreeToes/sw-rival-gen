/**
 * Created by poiso_000 on 28/07/2016.
 */
import {Component} from '@angular/core';
import {Character} from "../model/character";
import {InfoBlockComponent} from "./infoblock.component";
import {AttributeComponent} from "./attribute.component";

@Component({
    selector: 'character-component',
    template: `
        <info-block [character]="character"></info-block>
        <attribute-block [character]="character"></attribute-block>
    `,
    directives: [InfoBlockComponent, AttributeComponent]
})
export class CharacterComponent{
    character: Character;
}