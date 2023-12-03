// Задание 1
let mas1 = [1, 2, 3];
let mas2 = [4, 5, 6];
let res1 = mas1.concat(mas2);
console.log(res1);

// Задание 2
let mas3 = [1, 2, 3];
let res2 = mas3.reverse();
console.log(res2);

// Задание 3
let mas4 = [1, 2, 3];
mas4.push(4, 5, 6);
console.log(mas4);

// Задание 4
let mas5 = [1, 2, 3];
mas5.unshift(4, 5, 6);
console.log(mas5);

// Задание 5
let mas6 = ['js', 'css', 'jq'];
let res3 = mas6.shift();
console.log(res3);

// Задание 6
let mas7 = ['js', 'css', 'jq'];
let res4 = mas7.pop();
console.log(res4);

// Задание 7 и 8
let mas8 = [1, 2, 3, 4, 5];
let res5 = mas8.slice(0, 3);
console.log(res5);

let res6 = mas8.slice(3, 5);
console.log(res6);

//Задание 9
let mas9 = [1, 2, 3, 4, 5];
mas9.splice(1, 2);
console.log(mas9);

// Задание 10
let mas10 = [1, 2, 3, 4, 5];
let res7 = mas10.splice(1, 3);
console.log(res7);

// Задание 11
let mas11 = [1, 2, 3, 4, 5];
mas11.splice(3, 0, 'a', 'b', 'c');
console.log(mas11);

// Задание 12
let mas12 = [1, 2, 3, 4, 5];
mas12.splice(1, 0, 'a', 'b');
mas12.splice(6, 0, 'c');
mas12.splice(8, 0, 'e');
console.log(mas12);

// Задание 13
let mas13 = [3, 4, 1, 2, 7];
console.log(mas13.sort());

// Задание 14
let mas14 = [1, 2, 3, 4, 5, 6];
let count = 0;

for (i = 0; i < mas14.length; i++)
{
  if ((mas14[i] % 2) == 0) {
    count += 1;
  }
}
console.log(count);