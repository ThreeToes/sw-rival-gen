/**
 * Created by poiso_000 on 29/07/2016.
 */
import {Component, Input} from '@angular/core';
import {Character} from "../model/";
import {SkillComponent} from "./skill.component";

@Component({
    selector: 'skill-block',
    template: `
    <div class="skill-block-container container-fluid">
        <div class="skill-group-container col-xs-12 col-sm-4 col-lg-4">
            <h3>Core Skills</h3>
            <skill [magnitude]="character.skills.astrogation" [skillName]="'Astrogation'"></skill>
            <skill [magnitude]="character.skills.athletics" [skillName]="'Athletics'"></skill>
            <skill [magnitude]="character.skills.charm" [skillName]="'Charm'"></skill>
            <skill [magnitude]="character.skills.coercion" [skillName]="'Coercion'"></skill>
            <skill [magnitude]="character.skills.computers" [skillName]="'Computers'"></skill>
            <skill [magnitude]="character.skills.cool" [skillName]="'Cool'"></skill>
            <skill [magnitude]="character.skills.coordination" [skillName]="'Coordination'"></skill>
            <skill [magnitude]="character.skills.deception" [skillName]="'Deception'"></skill>
            <skill [magnitude]="character.skills.discipline" [skillName]="'Discipline'"></skill>
            <skill [magnitude]="character.skills.leadership" [skillName]="'Leadership'"></skill>
            <skill [magnitude]="character.skills.mechanics" [skillName]="'Mechanics'"></skill>
            <skill [magnitude]="character.skills.medicine" [skillName]="'Medicine'"></skill>
            <skill [magnitude]="character.skills.negotiation" [skillName]="'Negotiation'"></skill>
            <skill [magnitude]="character.skills.perception" [skillName]="'Perception'"></skill>
            <skill [magnitude]="character.skills.pilotingPlanetary" [skillName]="'Piloting (Planetary)'"></skill>
            <skill [magnitude]="character.skills.pilotingSpace" [skillName]="'Piloting (Space)'"></skill>
            <skill [magnitude]="character.skills.resilience" [skillName]="'Resilience'"></skill>
            <skill [magnitude]="character.skills.skulduggery" [skillName]="'Skulduggery'"></skill>
            <skill [magnitude]="character.skills.stealth" [skillName]="'Stealth'"></skill>
            <skill [magnitude]="character.skills.streetwise" [skillName]="'Streetwise'"></skill>
            <skill [magnitude]="character.skills.survival" [skillName]="'Survival'"></skill>
            <skill [magnitude]="character.skills.vigilance" [skillName]="'Vigilance'"></skill>
        </div>
        <div class="skill-group-container col-xs-12 col-sm-4 col-lg-4">
            <h3>Combat Skills</h3>
            <skill [magnitude]="character.skills.brawl" [skillName]="'Brawl'"></skill>
            <skill [magnitude]="character.skills.gunnery" [skillName]="'Gunnery'"></skill>
            <skill [magnitude]="character.skills.lightsaber" [skillName]="'Lightsaber'"></skill>
            <skill [magnitude]="character.skills.melee" [skillName]="'Melee'"></skill>
            <skill [magnitude]="character.skills.rangedLight" [skillName]="'Ranged (Light)'"></skill>
            <skill [magnitude]="character.skills.rangedHeavy" [skillName]="'Ranged (Heavy)'"></skill>
        </div>
        <div class="skill-group-container col-xs-12 col-sm-4 col-lg-4">
        <h3>Knowledge Skills</h3>
            <skill [magnitude]="character.skills.coreWorlds" [skillName]="'Core Worlds'"></skill>
            <skill [magnitude]="character.skills.education" [skillName]="'Education'"></skill>
            <skill [magnitude]="character.skills.lore" [skillName]="'Lore'"></skill>
            <skill [magnitude]="character.skills.outerRim" [skillName]="'Outer Rim'"></skill>
            <skill [magnitude]="character.skills.underworld" [skillName]="'Underworld'"></skill>
            <skill [magnitude]="character.skills.xenology" [skillName]="'Xenology'"></skill>
        </div>
    </div>
    `,
    directives:[SkillComponent]
})
export class SkillBlockComponent {
    @Input()
    character: Character;
}