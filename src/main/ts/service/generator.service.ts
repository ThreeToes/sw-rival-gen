/**
 * Created by poiso_000 on 02/08/2016.
 */

import {Character} from '../model/character';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
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
}

@Injectable()
export class DefaultCharacterGenerator implements CharacterGenerator{
    constructor(private http : Http){}
    generateCharacter(species:String, archetype:String): Observable<Character> {
        let url = 'species/'+species+'.json';
        return this.http.get(url)
            .map(resp => this.extractData(resp, species, archetype))
            .catch(this.handleError);
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
        char.species = species.charAt(0).toUpperCase() + species.slice(1);
        char.archetype = archetype.charAt(0).toUpperCase() + archetype.slice(1);
        return char;
    }
}