/**
 * Created by poiso_000 on 02/08/2016.
 */

import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {capitalCase,shuffle,getRandomArbitrary,getRandomElement} from "../utils";
import {ArchetypDefinition, Character, Talent, SkillDefinition, Weapon, SpeciesDefinition} from "../model";
import {Armour} from "../model/armour";

@Injectable()
export class CharacterGenerator {

    manifest = {"species":[],"archetypes":[]};
    loaded : boolean = false;
    private species : {[id: String]: SpeciesDefinition} = {};
    private speciesLoaded : number = 0;
    private archetypes : {[id: String] : ArchetypDefinition} = {};
    private archetypesLoaded : number = 0;
    private personalities = {};

    constructor(private http : Http){
    }

    /**
     * Generate a character synchronously
     * @param species Character species
     * @param archetype Character archetype
     */
    generateCharacter(species:String, archetype:String): Observable<Character> {
        let speciesDef = this.species[species];
        let archetypeDef = this.archetypes[archetype];

        let char = new Character();

        let lastName = getRandomElement(speciesDef.suffixes);
        let firstName = getRandomElement(speciesDef.prefixes);

        char.name = [firstName, lastName].join(speciesDef.joiner);
        char.species = capitalCase(species);
        char.archetype = capitalCase(archetype);

        let skills = this.selectSkills(archetypeDef);
        let i = skills.length;
        while(i--){
            let skill = skills[i];
            let j = getRandomArbitrary(skill.min, skill.max);
            char.skills[skill.name] = j;
        }

        let stats = archetypeDef.stats[getRandomArbitrary(0, archetypeDef.stats.length - 1)];
        char.attributes.brawn = stats.brawn;
        char.attributes.agility = stats.agility;
        char.attributes.intelligence = stats.intelligence;
        char.attributes.cunning = stats.cunning;
        char.attributes.willpower = stats.willpower;
        char.attributes.presence = stats.presence;

        shuffle(this.personalities.traits);

        char.personalityTraits = char.personalityTraits.concat(this.personalities.traits.slice(0,3));

        char.talents = this.selectTalents(archetypeDef);

        char.weapons = this.selectWeapons(archetypeDef);

        char.armour = this.selectArmour(archetypeDef);

        console.log(char);
        return new Observable.fromPromise(Promise.resolve(char));
    }

    private selectTalents(archetype : ArchetypDefinition) : Talent[]{
        let min = archetype.minTalents;
        let max = archetype.maxTalents;
        let si = getRandomArbitrary(min, max);
        shuffle(archetype.optionalTalents);

        return archetype.optionalTalents.slice(0, si);
    }

    private selectSkills(archetype : ArchetypDefinition) : SkillDefinition[]{
        let min = archetype.minSkillSets;
        let max = archetype.maxSkillSets;
        let si = getRandomArbitrary(min, max);

        //Flicks the array around in place, but should be ok
        shuffle(archetype.skillSets);

        return archetype.skillSets.slice(0, si);
    }

    private selectWeapons(archetype: ArchetypDefinition) : Weapon[]{
        let min = archetype.minWeapons;
        let max = archetype.maxWeapons;
        let si = getRandomArbitrary(min, max);

        //Flicks the array around in place, but should be ok
        shuffle(archetype.weapons);

        return archetype.weapons.slice(0, si);
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private extractSpeciesData(res) : void {
        this.species[res.name] = res;
        this.speciesLoaded++;
        this.setLoadState();
    }

    private setLoadState(){
        this.loaded =
            this.speciesLoaded >= this.manifest.species.length
            && this.archetypesLoaded >= this.manifest.archetypes.length;
    }

    private extractArchetypeData(body) : void {
        this.archetypes[body.name] = body;
        this.archetypesLoaded++;
        this.setLoadState();
    }

    private getJson(res: Response){
        return res.json();
    }

    onInit(): any {
        let url = 'manifest.json';
        this.http.get(url)
            .map(this.getJson)
            .catch(this.handleError)
            .subscribe(body => {
                for(let s of body.species){
                    let url = 'species/'+s+'.json';
                    this.http.get(url)
                        .map(this.getJson)
                        .catch(this.handleError)
                        .subscribe(s => this.extractSpeciesData(s));
                }
                for(let a of body.archetypes){
                    let url = 'archetypes/'+a+'.json';
                    this.http.get(url)
                        .map(this.getJson)
                        .catch(this.handleError)
                        .subscribe(a => this.extractArchetypeData(a));
                }
                this.manifest.species = body.species;
                this.manifest.archetypes = body.archetypes;
            });
        let personalityUrl = 'personalities.json';
        this.http.get(personalityUrl)
            .map(this.getJson)
            .catch(this.handleError)
            .subscribe(body => this.personalities = body);
    }

    private selectArmour(archetypeDef: ArchetypDefinition) {
        if(archetypeDef.armour.length == 0){
            return null;
        }
        return getRandomElement(archetypeDef.armour);
    }
}