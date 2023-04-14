/*********Code for maximum marks obtainend by student************ */

// const marks = [2, 4, 5, 6, 7];

// function HighestMarks() {
//   let max_number = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     if (marks[i] > max_number) {
//       max_number = marks[i];
//     }
//   }
//   return max_number;
// }

// let number = HighestMarks(...marks);
// console.log(number);

/***** *shortcut code maximum marks*******/

// const marks = [2, 4, 5, 6, 7];
// let number = Math.max(...marks);
// console.log(number);

/*****another way ******/
// const marks = [2, 4, 5, 6, 7];
// let lastNumber = marks[marks.length - 1];
// console.log(lastNumber);

/*****another way ******/

let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach((number) => {
  console.log(number);
});
