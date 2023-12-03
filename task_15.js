// Задание 1
function Counter() {
    let count = 0;
  
return function() {
    return count += 1;
    };
}
  
let counter = Counter();
  
console.log(counter());
console.log(counter());


// // Задание 2
// let mas = [];

// for(i=1; i<=100; i++){
//     mas.push(i)
// }

// for(i=1; i<=100; i++){
//     console.log(mas.splice(Math.random()*mas.length,1)[0])
// }