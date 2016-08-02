/**
 * Created by poiso_000 on 02/08/2016.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'skill',
    template: `
        <div>
            <label><strong>{{skillName}}:</strong></label>
            <input type="number" min="0" max="6" [(ngModel)]="magnitude"/>
        </div>`
})
export class SkillComponent {
    @Input()
    skillName: String;
    @Input()
    magnitude: number;
}