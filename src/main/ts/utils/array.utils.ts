/**
 * Created by poiso_000 on 07/08/2016.
 */
export function shuffle(a : any[]) {
    var j: Number, x: Number, i : Number;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}