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
    template: '<character-component [character]="currentCharacter"></character-component>',
    directives: [CharacterComponent],
    providers: [{provide: CharacterGenerator,useClass:DefaultCharacterGenerator}]
})
export class AppComponent implements OnInit{
    currentCharacter: Character;
    constructor(private charGenerator: CharacterGenerator){
        this.currentCharacter = new Character();
    }

    ngOnInit(){
        this.charGenerator.generateCharacter("human","jedi")
            .subscribe(character => {
                this.currentCharacter = character;

                    this.currentCharacter.skills.lightsaber = 3;
                    this.currentCharacter.skills.rangedLight = 2;
                    this.currentCharacter.skills.melee = 3;
                    this.currentCharacter.skills.leadership = 3;
                    this.currentCharacter.skills.pilotingPlanetary = 2;
                    this.currentCharacter.skills.pilotingSpace = 3;

                    this.currentCharacter.attributes.brawn = 3;
                    this.currentCharacter.attributes.agility = 4;
                    this.currentCharacter.attributes.cunning = 2;
                    this.currentCharacter.attributes.intelligence = 2;
                    this.currentCharacter.attributes.willpower = 3;
                    this.currentCharacter.attributes.presence = 3;
            },
            error => console.log(error));
    }
}