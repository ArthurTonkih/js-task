// Задание 1 
function recursion(number) {
    while (number > 9) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    number = sum;
    }
    return number;
}
console.log(recursion(12345));