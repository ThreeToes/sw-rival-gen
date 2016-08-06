/**
 * Created by poiso_000 on 02/08/2016.
 */

import {Character} from '../model/character';
import {Http, Response} from '@angular/http';
import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

/**
 * Interface for character generators
 */
export class CharacterGenerator{
    /**
     * Generate a character synchronously
     * @param species Character species
     * @param archetype Character archetype
     */
    generateCharacter(species: String, archetype: String) : Observable<Character>{
        throw new Error();
    }

    onInit(): any;
}

@Injectable()
export class DefaultCharacterGenerator implements CharacterGenerator {

    private species = {};
    private archetypes = {};

    constructor(private http : Http){
    }
    generateCharacter(species:String, archetype:String): Observable<Character> {
        let speciesDef = this.species[species];
        let archetypeDef = this.archetypes[archetype];

        let char = new Character();

        let lastName = speciesDef.suffixes[Math.floor(Math.random()*speciesDef.suffixes.length - 1)];
        let firstName = speciesDef.prefixes[Math.floor(Math.random()*speciesDef.prefixes.length - 1)];
        let title = "";
        if(archetypeDef.titles.length > 0){
            title = archetypeDef.titles[this.getRandomArbitrary(0, archetypeDef.titles.length - 1)] + " ";
        }

        char.name = title + [firstName, lastName].join(speciesDef.joiner);
        char.species = this.capitalCase(species);
        char.archetype = this.capitalCase(archetype);

        let skills = this.selectSkills(archetypeDef);
        let i = skills.length;
        while(i--){
            let skill = skills[i];
            let j = this.getRandomArbitrary(skill.min, skill.max);
            char.skills[skill.name] = j;
        }

        let stats = archetypeDef.stats[this.getRandomArbitrary(0, archetypeDef.stats.length - 1)];
        char.attributes.brawn = stats.brawn;
        char.attributes.agility = stats.agility;
        char.attributes.intelligence = stats.intelligence;
        char.attributes.cunning = stats.cunning;
        char.attributes.willpower = stats.willpower;
        char.attributes.presence = stats.presence;

        char.talents = this.selectTalents(archetypeDef);
        console.log(char);
        return new Observable.fromPromise(Promise.resolve(char));
    }

    private selectTalents(archetype){
        let min = archetype.minTalents;
        let max = archetype.maxTalents;
        let si = this.getRandomArbitrary(min, max);
        this.shuffle(archetype.optionalTalents);

        return archetype.optionalTalents.slice(0, si);
    }

    private selectSkills(archetype) {
        let min = archetype.minSkillSets;
        let max = archetype.maxSkillSets;
        let si = this.getRandomArbitrary(min, max);

        //Flicks the array around in place, but should be ok
        this.shuffle(archetype.skillSets);

        return archetype.skillSets.slice(0, si);
    }

    private shuffle(a) {
       var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    private getRandomArbitrary(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private extractData(res: Response, species: String, archetype: String) : Character{
        let body = res.json();
        let firstNames = body.prefixes;
        let firstName = firstNames[Math.floor(Math.random()*firstNames.length)];
        let lastNames = body.suffixes;
        let lastName = lastNames[Math.floor(Math.random()*lastNames.length)];
        let char = new Character();
        char.name = [firstName, lastName].join(body.joiner);
        char.species = this.capitalCase(species);
        char.archetype = this.capitalCase(archetype);
        return char;
    }

    private extractSpeciesData(res) : void {
        this.species[res.name] = res;
    }

    private extractArchetypeData(body) : void {
        this.archetypes[body.name] = body;
    }

    private getJson(res: Response){
        return res.json();
    }

    private capitalCase(s : String): String{
        return s.charAt(0).toUpperCase() + s.slice(1);
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
            });
    }
}