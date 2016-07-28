/**
 * Created by poiso_000 on 27/07/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Character} from "../model/character";
import {CharacterComponent} from "./character.component";

@Component({
    selector: 'npc-generator',
    template: '<character-component [character]="currentCharacter"></character-component>',
    directives: [CharacterComponent]
})
export class AppComponent implements OnInit{
    currentCharacter: Character;

    ngOnInit(){this.currentCharacter = new Character()}
}