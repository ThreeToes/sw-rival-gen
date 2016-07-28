/**
 * Created by poiso_000 on 28/07/2016.
 */
import {Component, Input} from '@angular/core';
import {Character} from "../model/character";
import {InfoBlockComponent} from "./infoblock.component";
import {AttributeComponent} from "./attribute.component";
import {SkillBlockComponent} from "./skillblock.component";

@Component({
    selector: 'character-component',
    template: `
        <info-block [character]="character"></info-block>
        <attribute-block [character]="character"></attribute-block>
        <skill-block [character]="character"></skill-block>
    `,
    directives: [InfoBlockComponent, AttributeComponent, SkillBlockComponent]
})
export class CharacterComponent {
    @Input()
    character: Character;
}