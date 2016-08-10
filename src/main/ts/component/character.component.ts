/**
 * Created by poiso_000 on 28/07/2016.
 */
import {Component, Input} from '@angular/core';
import {Character} from "../model/character";
import {InfoBlockComponent} from "./infoblock.component";
import {AttributeBlockComponent} from "./attribute.block.component";
import {SkillBlockComponent} from "./skillblock.component";
import {TalentBlockComponent} from "./talentblock.component";
import {PersonalityBlockComponent} from "./personalityblock.component";
import {WeaponsBlockComponent} from "./weaponsblock.component";
import {ArmourComponent} from "./armour.component";
import {EquipmentBlockComponent} from "./equipmentblock.component";

@Component({
    selector: 'character-component',
    template: `
        <div class="character-container">
            <info-block [character]="character"></info-block>
            <attribute-block [character]="character"></attribute-block>
            <skill-block [character]="character"></skill-block>
            <div class="personality-container">
                <personality-block [character]="character"></personality-block>
                <talent-block [character]="character"></talent-block>
            </div>
            <div class="gear-container">
                <weapons-block [character]="character"></weapons-block>
                <equipment-block [character]="character"></equipment-block>
                <armour [character]="character"></armour>
            </div>
        </div>
    `,
    directives: [EquipmentBlockComponent,ArmourComponent, InfoBlockComponent, AttributeBlockComponent, SkillBlockComponent, TalentBlockComponent, PersonalityBlockComponent, WeaponsBlockComponent]
})
export class CharacterComponent {
    @Input()
    character: Character;
}