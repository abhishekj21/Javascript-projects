const array = [9, 27, 3, 4, 5, 6, 7];

function check_Divisibility(array) {
  for (let num = 0; num < array.length; num++) {
    if (array[num] % 3 === 0 && array[num] % 2 != 0) {
      console.log(array[num]);
    }
  }
}

check_Divisibility(array);
