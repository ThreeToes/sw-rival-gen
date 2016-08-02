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
export interface CharacterGenerator{
    /**
     * Generate a character synchronously
     * @param species Character species
     * @param archetype Character archetype
     */
    generateCharacter(species: String, archetype: String) : Observable<Character>;
}

@Injectable()
export class DefaultCharacterGenerator implements CharacterGenerator{
    constructor(private http : Http){}
    generateCharacter(species:String, archetype:String): Observable<Character> {
        let url = '/json/species/'+species+'.json';
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) : Character{
        let body = res.json().data;
        let firstNames = body.prefixes;
        let firstName = firstNames[Math.floor(Math.random()*firstNames.length)];
        let lastNames = body.suffixes;
        let lastName = lastNames[Math.floor(Math.random()*lastNames.length)];
        let char = new Character();
        char.name = [firstName, lastName].join(body.joiner);
        return char;
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}