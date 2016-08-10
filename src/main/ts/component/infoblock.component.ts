/**
 * Created by poiso_000 on 28/07/2016.
 */
import {Component, Input} from '@angular/core';
import {Character} from "../model/character";

@Component({
    selector: 'info-block',
    template: `
        <div class="info-block-container">
            <div class="info-block-entry col-xs-12 col-sm-4 col-lg-4"><strong>Name:</strong>{{character.name}}</div>
            <div class="info-block-entry col-xs-12 col-sm-4 col-lg-4"><strong>Species:</strong>{{character.species}}</div>
            <div class="info-block-entry col-xs-12 col-sm-4 col-lg-4"><strong>Archetype:</strong>{{character.archetype}}</div>
        </div>
    `
})
export class InfoBlockComponent{
    @Input()
    character: Character;
}