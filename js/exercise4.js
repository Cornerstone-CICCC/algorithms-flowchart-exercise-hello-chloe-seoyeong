// let number1 = 5;
// let number2 = 3;
// let number3 = 10;

function checkTriangle(num1, num2, num3) {
  let triangle = `${num1}, ${num2}, ${num3} can be triangle! 🔺`
  let notTriangle = `${num1}, ${num2}, ${num3} can not be triangle! ✖️`
  
  let max = num1;
  let sum = num1 + num2 + num3;

  if (max < num2) {
    max = num2;
  }
  if (max < num3) {
    max = num3;
  }
  if (max < sum - max) {
    return triangle
  }
  
  return notTriangle;
}

console.log(checkTriangle(3,3,3));
console.log(checkTriangle(10, 20, 30));
console.log(checkTriangle(4, 5, 3));

// if (number1 > number2 && number1 > number3) {
//   if (number1 <= number2 + number3) {
//     console.log(triangle);
//   } else {
//     console.log(notnumber);
//   }
// } else if (number2 > number1 && number2 > number3) {
//   if (number2 <= number1 + number3) {
//     console.log(triangle);
//   } else {
//     console.log(notnumber);
//   }
// } else if (number3 > number1 && number3 > number2) {
//   if (number3 <= number1 + number2) {
//     console.log(triangle);
//   } else {
//     console.log(notnumber);
//   }
// } else if (number1 == number2 && number2 == number3) {
//   console.log(triangle);
// } else {
//   console.log(notnumber);
// }