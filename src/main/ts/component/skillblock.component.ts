/**
 * Created by poiso_000 on 29/07/2016.
 */
import {Component, Input} from '@angular/core';
import {Character} from "../model/";

@Component({
    selector: 'skill-block',
    template: `
    <div class="skill-block-container">
    <h3>Core Skills</h3>
    <ul class="skill-group-container">
        <li>Astrogation: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.astrogation"/></li>
        <li>Athletics: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.athletics"/></li>
        <li>Charm: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.charm"/></li>
        <li>Coercion: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.coercion"/></li>
        <li>Computers: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.computers"/></li>
        <li>Cool: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.cool"/></li>
        <li>Coordination: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.coordination"/></li>
        <li>Deception: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.deception"/></li>
        <li>Discipline: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.discipline"/></li>
        <li>Leadership: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.leadership"/></li>
        <li>Mechanics: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.mechanics"/></li>
        <li>Medicine: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.medicine"/></li>
        <li>Negotiation: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.negotiation"/></li>
        <li>Perception: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.perception"/></li>
        <li>Piloting (Planetary): <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.pilotingPlanetary"/></li>
        <li>Piloting (Space): <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.pilotingSpace"/></li>
        <li>Resilience: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.resilience"/></li>
        <li>Skulduggery: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.skulduggery"/></li>
        <li>Stealth: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.stealth"/></li>
        <li>Streetwise: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.streetwise"/></li>
        <li>Survival: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.survival"/></li>
        <li>Vigilance: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.vigilance"/></li>
    </ul>
    <h3>Combat Skills</h3>
    <ul class="skill-group-container">
        <li>Brawl: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.brawl"/></li>
        <li>Gunnery: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.gunnery"/></li>
        <li>Lightsaber: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.lightsaber"/></li>
        <li>Melee: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.melee"/></li>
        <li>Ranged (Light): <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.rangedLight"/></li>
        <li>Ranged (Heavy): <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.rangedHeavy"/></li>
    </ul>
    <h3>Knowledge Skills</h3>
    <ul class="skill-group-container">
        <li>Core Worlds: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.coreWorlds"/></li>
        <li>Education: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.education"/></li>
        <li>Lore: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.lore"/></li>
        <li>Outer Rim: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.outerRim"/></li>
        <li>Underworld: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.underworld"/></li>
        <li>Xenology: <input type="number" min="0" max="6" 
            [(ngModel)]="character.skills.xenology"/></li>
    </ul>
    </div>
    `
})
export class SkillBlockComponent {
    @Input()
    character: Character;
}