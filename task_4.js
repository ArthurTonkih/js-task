// // Задание 1
// function week (number) {
// 	switch (number) {
// 	  case 1:
// 		return 'Понедельник';
// 	  case 2:
// 		return 'Вторник';
// 	  case 3:
// 		return 'Среда';
// 	  case 4:
// 		return 'Четверг';
// 	  case 5:
// 		return 'Пятница';
// 	  case 6:
// 		return 'Суббота';
// 	  case 7:
// 		return 'Воскресенье';
// 	  default:
// 		return 'Неверный день недели';
// 	}
//   }
//   console.log(week(2));


// // Задание 2 
// function isNumberInRange(x) {
// 	if (x > 0 && x < 10)
// 		console.log('True')
// 	else
// 		console.log('False')
// }

// let result = isNumberInRange(9)


// Задание 4
function getDivisors(number) {
	let divisors = [];
	for (i = 1; i <= number; i++) {
	  	if (number % i === 0) {
		divisors.push(i);
	  	}
	}
	return divisors;
}
console.log(getDivisors(10)); 