import {Component, Input} from "@angular/core";
import {Talent} from "../model/talent";
/**
 * Created by poiso_000 on 07/08/2016.
 */

@Component({
    selector: 'talent',
    template: `
    <div class="talent">
        <h4>{{talent.name}}</h4>
        <p>{{talent.reference}}</p>
    </div>
    `
})
export class TalentComponent{
    @Input()
    talent: Talent;
}