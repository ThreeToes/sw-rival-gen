/**
 * Created by poiso_000 on 30/07/2016.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'attribute',
    template: `
        <div class="attribute-component col-xs-4 col-sm-2 col-md-2 col-lg-2 container-fluid">
            <p class="attribute-magnitude col-xs-12">{{magnitude}}</p>
            <p class="attribute-name col-xs-12">{{attributeName}}</p>
        </div>
    `
})
export class AttributeComponent{
    @Input()
    attributeName: String;
    @Input()
    magnitude: number;
}