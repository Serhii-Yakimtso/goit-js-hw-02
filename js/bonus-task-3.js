//Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо відвідувач ввів інше число - попросити
//ввести ще раз і так далі.
//Цикл має питати число, поки відвідувач не
//введе число більше 100, або натисне кнопку
//скасування в prompt

console.log("===========================");
console.log("===== bonus task #1 =====");

function checkNumber() {
  const inputNumber = prompt("enter a number, greater than 100");
  console.log("the number is -", inputNumber);

  if (inputNumber < 100) {
    alert("wrong number, input other number");
  } else {
    console.log("right number");
  }
}

checkNumber();
