// For8. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chigaruvchi programma tuzilsin.

let b = 5;
let a = 1;

let sum = 1;

if (a < b) {
  for (let i = a; i <= b; i++) {
    sum = sum * i
  }

  console.log(sum);
} else {
  console.log("a < b emas Sonni boshqattan kriting");
}
