class Car {
	constructor(color, brand) {
		this.color = color;
		this.brand = brand;

		this.Max_RPM = 20000;
		this.Min_RPV = 500;
		this.Max_speed = Math.random() * 100;
		this.Ratio = Math.random() * 100 + '%';
	}
}

let color1 = prompt('Цвет машины: ');
let brand1 = prompt('Марка машины: ');
let color2 = prompt('Цвет машины: ');
let brand2 = prompt('Марка машины: ');

let myCar1 = new Car(color1, brand1);
let myCar2 = new Car(color2, brand2);

console.log(myCar1);
console.log(myCar2);