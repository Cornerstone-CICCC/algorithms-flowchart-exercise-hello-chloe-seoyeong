let number1 = 5;
let number2 = 3;
let number3 = 10;
let largest = null;

let triangle = `${number1}, ${number2}, ${number3} can be triangle! 🔺`
let notnumber = `${number1}, ${number2}, ${number3} can not be triangle! ✖️`

if (number1 > number2 && number1 > number3) {
  if (number1 <= number2 + number3) {
    console.log(triangle);
  } else {
    console.log(notnumber);
  }
} else if (number2 > number1 && number2 > number3) {
  if (number2 <= number1 + number3) {
    console.log(triangle);
  } else {
    console.log(notnumber);
  }
} else if (number3 > number1 && number3 > number2) {
  if (number3 <= number1 + number2) {
    console.log(triangle);
  } else {
    console.log(notnumber);
  }
} else if (number1 == number2 && number2 == number3) {
  console.log(triangle);
} else {
  console.log(notnumber);
}
