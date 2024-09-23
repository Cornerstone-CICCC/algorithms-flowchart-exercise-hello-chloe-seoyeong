let grade = null;

function scoreGrade(score) {
  switch (true) {
    case (score < 40):
      grade = "No Grade";
      break;
    case (score >= 40 && score < 60):
      grade = "C";
      break;
    case (score >= 60 && score < 80):
      grade = "B";
      break;
    case (score > 80):
      grade = "A";
      break;
    default:
      grade = "NaN"
      break;
  }
  return grade;
}

console.log(scoreGrade(100));
console.log(scoreGrade(76));
console.log(scoreGrade(53));
console.log(scoreGrade(39));
console.log(scoreGrade("A"));