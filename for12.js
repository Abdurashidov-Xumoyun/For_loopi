// For12. n butun soni berilgan (n > 0). Quidagi ko'paytmani hisoblovchi programma tuzilsin. s=1.1*1.2*1.3*...


let n = 1.5;
let S = 1;

for (let i = 1; i <= n; i++ ) {
    S += i /10;
}

console.log("Natija: S =", S);
