/**
 * Created by poiso_000 on 28/07/2016.
 */
import {Component} from '@angular/core';
import {Character} from "../model/character";

@Component({
    selector: 'info-block',
    template: `
        <div class="info-block-container">
            <input class="info-block-input" placeholder="Name..."  [(ngModel)]="character.name"/>
            <input class="info-block-input" placeholder="Species..." [(ngModel)]="character.species" />
            <input class="info-block-input" placeholder="Archetype..." [(ngModel)]="character.archetype"/>
        </div>
    `
})
export class InfoBlockComponent{
    character: Character;
}