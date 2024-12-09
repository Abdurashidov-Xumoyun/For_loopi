// For. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, .., 2 kg konfetni narxini chiqaruvchi programma tuzilsin

let birKgNarxi = 20;
let nechta = 2

for (let i = 1; i <= nechta; i = i + 0.2) {
    let narx = birKgNarxi * i;
    console.log(`${i.toFixed(1)} kg konfet narxi: ${narx.toFixed(2)} so'm`);
}