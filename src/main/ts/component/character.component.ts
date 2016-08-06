/**
 * Created by poiso_000 on 28/07/2016.
 */
import {Component, Input} from '@angular/core';
import {Character} from "../model/character";
import {InfoBlockComponent} from "./infoblock.component";
import {AttributeBlockComponent} from "./attribute.block.component";
import {SkillBlockComponent} from "./skillblock.component";
import {TalentBlockComponent} from "./talentblock.component";

@Component({
    selector: 'character-component',
    template: `
        <div class="character-container">
            <info-block [character]="character"></info-block>
            <attribute-block [character]="character"></attribute-block>
            <skill-block [character]="character"></skill-block>
            <talent-block [character]="character"></talent-block>
        </div>
    `,
    directives: [InfoBlockComponent, AttributeBlockComponent, SkillBlockComponent, TalentBlockComponent]
})
export class CharacterComponent {
    @Input()
    character: Character;
}