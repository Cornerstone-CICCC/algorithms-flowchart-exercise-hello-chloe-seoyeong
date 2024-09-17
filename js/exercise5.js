let score = 105;
let grade = null;

if (score < 40) {
  grade = "No Grade";
  console.log(`${grade}`);
} else {
  if (score < 60) {
    grade = "C";
    console.log(`Your grade is ${grade}`);
  } else {
    if (score < 80) {
      grade ="B";
      console.log(`Your grade is ${grade}`);
    } else {
        grade = "A";
        console.log(`Your grade is ${grade}, well done! 👏`);
    }
  }
}