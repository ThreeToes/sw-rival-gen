import {Attributes} from "./attributes";
import {Skills} from "./skills";

/**
 * Created by poiso_000 on 28/07/2016.
 */
export class Character{
    name: string;
    species: string;
    archetype: string;
    attributes: Attributes;
    skills: Skills;

    public constructor(){
        this.attributes = new Attributes();
        this.skills = new Skills();
    }
}