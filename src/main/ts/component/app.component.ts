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
    template: '<button (click)="generateNewCharacter()">Generate Character</button><character-component [character]="currentCharacter"></character-component>',
    directives: [CharacterComponent],
    providers: [{provide: CharacterGenerator,useClass:DefaultCharacterGenerator}]
})
export class AppComponent implements OnInit{
    currentCharacter: Character;
    constructor(private charGenerator: CharacterGenerator){
        this.currentCharacter = new Character();
    }

    ngOnInit(){
        this.charGenerator.onInit();
    }

    generateNewCharacter(){
        this.charGenerator.generateCharacter("human","jedi")
            .subscribe(character => {
                    this.currentCharacter = character;
                },
                error => console.log(error));
    }
}