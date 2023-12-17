// У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

console.log("===========================");
console.log("===== bonus task #2 =====");

function checkMinute(min) {
  //   console.log(`it is ${min} minute(-s)`);
  min = Math.floor(min % 60);
  //   console.log(min);
  //   console.log(Number(min));
  //   console.log(!Number(min));

  if (!Number(min) || min < 0) {
    console.log("wrong time");
  } else if (min >= 0 && min < 15) {
    console.log(`it is ${min} minute(-s), it's the first quarter`);
  } else if (min >= 15 && min < 30) {
    console.log(`it is ${min} minute(-s), it's the second quarter`);
  } else if (min >= 30 && min < 45) {
    console.log(`it is ${min} minute(-s), it's the third quarter`);
  } else if (min >= 45 && min < 60) {
    console.log(`it is ${min} minute(-s), it's the fourth quarter`);
  }
}

checkMinute(10);
checkMinute(25);
checkMinute(35);
checkMinute(50);
checkMinute(70);
checkMinute(-5);
checkMinute("-5a");
