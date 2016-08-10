/**
 * Created by poiso_000 on 28/07/2016.
 */
import {Component, Input} from '@angular/core';
import {Character} from "../model/character";
import {AttributeComponent} from "./attribute.component";

@Component({
    selector:'attribute-block',
    template: `
    <div class="attributes-container container-fluid">
        <attribute [attributeName]="'Brawn'" [magnitude]="character.attributes.brawn"></attribute>
        <attribute [attributeName]="'Agility'" [magnitude]="character.attributes.agility"></attribute>
        <attribute [attributeName]="'Intelligence'" [magnitude]="character.attributes.intelligence"></attribute>
        <attribute [attributeName]="'Cunning'" [magnitude]="character.attributes.cunning"></attribute>
        <attribute [attributeName]="'Willpower'" [magnitude]="character.attributes.willpower"></attribute>
        <attribute [attributeName]="'Presence'" [magnitude]="character.attributes.presence"></attribute>
    </div>
    <div class="info-block-container container-fluid">    
        <div class="info-block-entry col-xs-12 col-sm-offset-1 col-sm-4 col-lg-offset-1 col-lg-4 text-center"><strong>Wound Threshold:</strong>{{character.woundThreshold}}</div>
        <div class="info-block-entry col-xs-12 col-sm-offset-2 col-sm-4 col-lg-offset-2 col-lg-4 text-center" *ngIf="character.armour == null"><strong>Soak:</strong>{{character.attributes.brawn}}</div>
        <div class="info-block-entry col-xs-12 col-sm-offset-2 col-sm-4 col-lg-offset-2 col-lg-4 text-center" *ngIf="character.armour != null"><strong>Soak:</strong>{{character.attributes.brawn + character.armour.soak}}</div>
    </div>
    `,
    directives:[AttributeComponent]
})
export class AttributeBlockComponent {
    @Input()
    character: Character;
}