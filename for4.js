// For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, ..., 10 kg konfetni narxini chiqaruvchi programma tuzilsin.

let birKgNarxi = 20;
let nechta = 10

for (let i = 1; i <= nechta; i++) {
    let narx = birKgNarxi * i;
    console.log(`${i} kg konfet narxi: ${narx} so'm`);
}
