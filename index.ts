import { match } from 'ts-pattern';

type Result<T, U> = { tag: 'Ok', value: T } | { tag: 'Err', error: U };

function Pembagian(x: number, y: number): Result<number, string> {
    if (y === 0) {
        return { tag: 'Err', error: 'Tidak bisa membagi dengan 0' };
    }
    
    return { tag: 'Ok', value: x / y };
}

const hasil = match(Pembagian(10, 0))
    .with({ tag: 'Ok' }, ({ value }) => `Hasil: ${value}`)
    .with({ tag: 'Err' }, ({ error }) => `Error: ${error}`)
    .exhaustive();

console.log(hasil); // Output: Error: Tidak bisa membagi dengan 0