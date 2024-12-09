// For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chicaruvchi programma tuzsin.

let b = 10;
let a = 1;

let sum = 0;

if (a < b) {
  for (let i = a; i <= b; i++) {
    sum = sum + i
  }

  console.log(sum);
} else {
  console.log("a < b emas Sonni boshqattan kriting");
}


