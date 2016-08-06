/**
 * Created by poiso_000 on 02/08/2016.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'skill',
    template: `
        <div *ngIf="magnitude > 0">
            <strong>{{skillName}}:</strong> <span>{{magnitude}}</span>
        </div>`
})
export class SkillComponent {
    @Input()
    skillName: String;
    @Input()
    magnitude: number;
}