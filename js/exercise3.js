let number1 = 45;
let number2 = 93;
let number3 = 10;

if (number1 > number2) {
  if (number1 > number3) {
    console.log(`Largest number is ${number1}`);
  } else {
    console.log(`Largest number is ${number3}`);
  }
} else {
  if (number2 > number3) {
    console.log(`Largest number is ${number2}`);
  } else {
    console.log(`Largest number is ${number3}`);
  }
}