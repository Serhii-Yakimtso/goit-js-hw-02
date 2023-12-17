// Повторювати цикл, поки введення неправильне
// Напишіть цикл, який пропонує prompt ввести число більше 100.
// Якщо відвідувач ввів інше число - попросити ввести ще раз, і таке інше.
// Цикл повинен запитувати число поки що або відвідувач не введе число, більше 100,
// або натисне кнопку Скасувати (ESC).
// Передбачається, що відвідувач вводить лише числа. Передбачати обробку
// нечислових рядків у цій задачі необов'язково.

function checkNumber() {
  let inputNumber = prompt("enter a number, greater than 100");
  console.log("number is -", inputNumber);
  while (inputNumber <= 100 || inputNumber === null) {
    console.log("number is -", inputNumber, "enter other number");
    inputNumber = prompt("enter a number, greater than 100");
  }
}

checkNumber();
