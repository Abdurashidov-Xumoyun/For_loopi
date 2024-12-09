// For5. Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, ..., 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin

let birKgNarxi = 20;
let nechta = 1

for (let i = 0; i <= nechta; i = i + 0.1) {
    let narx = birKgNarxi * i;
    console.log(`${i.toFixed(1)} kg konfet narxi: ${narx.toFixed(2)} so'm`);
}