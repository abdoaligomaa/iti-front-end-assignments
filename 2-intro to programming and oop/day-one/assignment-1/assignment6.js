function printOddNumbers(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    if (i % 2 != 0) console.log(i);
  }
}

let number1 = prompt("Enter The Start Number : ");
let number2 = prompt("Enter The Last Number : ");
printOddNumbers(number1, number2);
