/*let chars = ["A", "B", "C", "D", "E"];

chars.forEach((element, index) => {
  console.log(` ${element} - ${index}`);
});*/

/*let chars = ["a", "b", "c", "b", "e"];

let uniqueelement = chars.filter((element, index) => {
  return chars.indexOf(element) === index;
});

console.log(...uniqueelement);*/

let chars = ["A", "B", "C", "D", "E"];
let uniqueChars = [];
chars.forEach((c) => {
  if (!uniqueChars.includes(c)) {
    uniqueChars.push(c);
  }
});
console.log(uniqueChars);
