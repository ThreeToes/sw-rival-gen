/**
 * Created by poiso_000 on 27/07/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Character} from "../model/character";
import {CharacterComponent} from "./character.component";
require('../../css/style.css');
require('../../../../node_modules/bootstrap/dist/css/bootstrap.min.css');

@Component({
    selector: 'npc-generator',
    template: '<character-component [character]="currentCharacter"></character-component>',
    directives: [CharacterComponent]
})
export class AppComponent implements OnInit{
    currentCharacter: Character;

    ngOnInit(){
        this.currentCharacter = new Character();
        this.currentCharacter.name = 'Luke Skywalker';
        this.currentCharacter.species = 'Human';
        this.currentCharacter.archetype = 'Jedi';
    }
}