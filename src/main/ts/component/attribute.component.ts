/**
 * Created by poiso_000 on 30/07/2016.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'attribute',
    template: `
        <div class="attribute-component">
            <label>{{attributeName}}</label>
            <p>{{magnitude}}</p>
        </div>
    `
})
export class AttributeComponent{
    @Input()
    attributeName: String;
    @Input()
    magnitude: number;
}