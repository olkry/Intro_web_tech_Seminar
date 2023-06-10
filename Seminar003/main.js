// let num = 5;
// alert(num)
// // alert("HI")

// num = 10;
// // alert(num)
// console.log(num)

// const num2 = 50; //Константу изменить нельзя!

// function sum(num1, num2) {
//       return num1 + num2;
// }

// // const num1 = Number.parseInt(prompt("Введите первое число: ")); // только целое - int
// const num1 = +prompt("Введите первое число: ");
// const num2 = +prompt("Введите второе число: "); //переведет и в int и в double(float)

// // alert("Результат сложения числа " + num1 + " и " + num2 + " равен " + (num1 + num2))

// // alert(`Результат сложения чисел ${num1} и ${num2} равен ${num1 + num2}`)
// alert(`Результат сложения чисел ${num1} и ${num2} равен ${sum(num1, num2)}`)


// if (confirm("Вам хорошо живется?")) {
//       alert("Тогда мы идём к вам)")
// } else {
//       alert("Ну вы держитесь там!")
// }

// // ИЛИ

// confirm("Вам хорошо живется?") 
//       ? alert("Тогда мы идём к вам)") 
//       : alert("Ну вы держитесь там!")

// // ИЛИ

// alert(confirm("Ну вы держитесь там!") 
//       ? "Тогда мы идём к вам)" 
//       : "Ну вы держитесь там!")

// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.

// <script>
// let product = "Бананы";

// if (product == "Мандарины") {
//   alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "Бананы") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "Груши") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//   alert('Нет такого продукта.');
// }
// </script>

// // const product = "Бананы"
// const product = prompt("Введите фрукты").toLowerCase();
// switch (product) {
//       case "мандарины":
//             alert("Мандарины стоят 100 руб/кг.");
//             break;
//       // case "Бананы":  // Поскольку кейс с текстом одинаковый, мы можем не прописывать тело кейса
//             // alert("Бананы и груши стоят 70 руб/кг.");
//             // break;
//       case "бананы":
//       case "груши":
//             alert("Бананы и груши стоят 70 руб/кг.");
//             break;
//       default:
//             alert('Нет такого продукта.');
//             break;
// }


// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.

// function getMaxEvenElement(arr) {
//       let max = arr[0];
//       for (let index = 2; index < arr.length; index += 2) {
//             if (max < arr[index]) {
//                   max = arr[index];
//             }

//       }
//       return max;
// }

// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31

/*
Задача с реального собеседования.

Один покупатель старинных уникальных часов хочет приобрести для музея 
двое часов. В магазине у хозяйки есть n разных часов с соответствующими 
ценами [p1, ..., pn]. Покупатель хочет полностью использовать свой 
бюджет. Необходимо выяснить получится ли это.
*/
function f(clockArr, money) {
      for (let i = 0; i < clockArr.length - 1; i++) {
            for (let j = i + 1; j < clockArr.length - 1; j++) {
                  if (Math.floor((clockArr[i] + clockArr[j]) * 100) / 100 == money) {
                        return true;
                  }
            }

      }
      return false;

}

console.log(f([8.74, 3.12, 9.50, 2.35], 2.35)); // false
console.log(f([1.1, 4.2, 7.5, 0.4], 8.4)); // false
console.log(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.3)); // true