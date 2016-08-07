/**
 * Created by poiso_000 on 07/08/2016.
 */

export function getRandomArbitrary(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomElement(a){
    return a[getRandomArbitrary(0, a.length - 1)];
}