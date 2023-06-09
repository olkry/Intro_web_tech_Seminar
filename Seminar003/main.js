// let num = 5;
// alert(num)
// // alert("HI")

// num = 10;
// // alert(num)
// console.log(num)

// const num2 = 50; //Константу изменить нельзя!

function sum(num1, num2) {
      return num1 + num2;
}

// const num1 = Number.parseInt(prompt("Введите первое число: ")); // только целое - int
const num1 = +prompt("Введите первое число: ");
const num2 = +prompt("Введите второе число: "); //переведет и в int и в double(float)

// alert("Результат сложения числа " + num1 + " и " + num2 + " равен " + (num1 + num2))

// alert(`Результат сложения чисел ${num1} и ${num2} равен ${num1 + num2}`)
alert(`Результат сложения чисел ${num1} и ${num2} равен ${sum(num1, num2)}`)