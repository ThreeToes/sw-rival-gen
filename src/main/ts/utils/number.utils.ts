/**
 * Created by poiso_000 on 07/08/2016.
 */

export function getRandomArbitrary(min : number, max : number) : number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomElement<T>(a: T[]){
    return a[getRandomArbitrary(0, a.length - 1)];
}