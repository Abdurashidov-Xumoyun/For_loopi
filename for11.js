// For11. n butun soni berilgan (n > 0). Quidagi vig'indini hisoblovchi programma tuzilsin. S =n2 +(n+1)**2+(n+2)**2+… (2*n)**2

let n = 3;
let sum = 0;

if (n > 0) {
  for (let i = 0; i <= n; i++) {
    sum = sum + ((n + i) ** 2);
  }

  console.log(sum);
} else {
  console.log("a < b emas Sonni boshqattan kriting");
}
