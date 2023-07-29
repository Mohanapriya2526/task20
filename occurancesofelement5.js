const number = [1, 2, 3, 5, 8, 9, 5, 6, 7, 1, 3, 5];
let count = 0;
numbers = countnumber5(number);
function countnumber5(number) {
  for (let i = 0; i < number.length; i++) {
    if (number.includes(number[i])) {
      count++;

    }
  }

  return count;
}


console.log(numbers);