/**
 * Created by poiso_000 on 27/07/2016.
 */
import {Component, OnInit, Injectable} from '@angular/core';
import {Character} from "../model/character";
import {CharacterComponent} from "./character.component";
import {CharacterGenerator, DefaultCharacterGenerator} from "../service/generator.service";
require('../../css/style.css');
require('../../../../node_modules/bootstrap/dist/css/bootstrap.min.css');

@Component({
    selector: 'npc-generator',
    template: `
        <div class="generator-block">
            <select [(ngModel)]="selectedSpecies">
                <option *ngFor="let s of charGenerator.manifest.species" [value]="s">{{s}}</option>
            </select>
            <select [(ngModel)]="selectedArchetype">
                <option *ngFor="let a of charGenerator.manifest.archetypes" [value]="a">{{a}}</option>
            </select>
            <button (click)="generateNewCharacter()">Generate Character</button>
        </div>
        <character-component [character]="currentCharacter"></character-component>
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
        this.charGenerator.generateCharacter(this.selectedSpecies,this.selectedArchetype)
            .subscribe(character => {
                    this.currentCharacter = character;
                },
                error => console.log(error));
    }
}