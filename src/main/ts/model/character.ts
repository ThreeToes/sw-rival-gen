import {Attributes} from "./attributes";
import {Skills} from "./skills";
import {Talent} from "./talent";

/**
 * Created by poiso_000 on 28/07/2016.
 */
export class Character{
    name: string;
    species: string;
    archetype: string;
    attributes: Attributes;
    skills: Skills;
    talents: Talent[];
    personalityTraits: String[];

    public constructor(){
        this.attributes = new Attributes();
        this.skills = new Skills();
        this.talents = [];
        this.personalityTraits = [];
    }

    isInitialised(): boolean {
        return this.attributes.brawn != 0;
    }
}