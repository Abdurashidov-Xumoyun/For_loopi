// For9. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonar kvadratlarining yig'indisini chigaruvchi programma tuzilsin.

let b = 3;
let a = 1;

let sum = 0;

if (a < b) {
  for (let i = a; i <= b; i++) {
    sum = sum + i * i;
  }

  console.log(sum);
} else {
  console.log("a < b emas Sonni boshqattan kriting");
}