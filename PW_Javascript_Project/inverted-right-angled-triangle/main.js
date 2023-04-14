let num = 5;
let string = "";
for (let row = 0; row < num; row++) {
  for (let col = num - row; col > 0; col--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
