/**
 * Created by poiso_000 on 27/07/2016.
 */
import {Component, OnInit, Injectable} from '@angular/core';
import {Character} from "../model/character";
import {CharacterComponent} from "./character.component";
import {CharacterGenerator} from "../service/generator.service";
import {capitalCase} from "../utils/string.utils";
import {getRandomElement} from "../utils/number.utils";
require('../../css/style.css');
require('../../../../node_modules/bootstrap/dist/css/bootstrap.min.css');

@Component({
    selector: 'npc-generator',
    template: `
        <div class="generator-block" *ngIf="charGenerator.loaded">
            <strong>Species</strong>
            <select [(ngModel)]="selectedSpecies">
                <option value="random" selected>Random</option>
                <option *ngFor="let s of charGenerator.manifest.species" [value]="s">{{s}}</option>
            </select>
            <strong>Archetype</strong>
            <select [(ngModel)]="selectedArchetype">
                <option  *ngFor="let a of charGenerator.manifest.archetypes" [value]="a">{{a}}</option>
            </select>
            <button (click)="generateNewCharacter()">Generate Character</button>
        </div>
        <character-component [character]="currentCharacter" *ngIf="charGenerator.loaded && currentCharacter.isInitialised()"></character-component>
        <div class="loading-block" *ngIf="!charGenerator.loaded"><h2>Loading...</h2></div>
    `,
    directives: [CharacterComponent],
    providers: [{provide: CharacterGenerator, useClass: CharacterGenerator}]
})
export class AppComponent implements OnInit{
    currentCharacter: Character;
    charGenerator: CharacterGenerator;
    selectedSpecies: String = "";
    selectedArchetype: String = "";
    constructor(charGenerator: CharacterGenerator){
        this.currentCharacter = new Character();
        this.charGenerator = charGenerator;
    }

    ngOnInit(){
        this.charGenerator.onInit();
    }

    generateNewCharacter(){
        let species = this.selectedSpecies;
        if(species == "random"){
            species = getRandomElement(this.charGenerator.manifest.species);
        }
        this.charGenerator.generateCharacter(species,this.selectedArchetype)
            .subscribe(character => {
                    this.currentCharacter = character;
                },
                error => console.log(error));
    }
}