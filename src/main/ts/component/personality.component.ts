import {Component} from "@angular/core";
import {Input} from "@angular/core";
/**
 * Created by poiso_000 on 07/08/2016.
 */

@Component({
    selector: 'personality-trait',
    template: `
        <div class="personality-trait">{{personalityTrait}}</div>
    `
})
export class PersonalityComponent{
    @Input()
    personalityTrait: String;
}