// For10. n butun soni berilgan (n > 0). Quidagi vig'indini hisoblovchi programma tuzilsin.

// S=1+1/2+1/3+...+1/n

let n = 4;
let sum = 0;

if (n > 0) {
  for (let i = 1; i <= n; i++) {
    sum = sum + (1/i);
  }

  console.log(sum.toFixed(2));
} else {
  console.log("a < b emas Sonni boshqattan kriting");
}



