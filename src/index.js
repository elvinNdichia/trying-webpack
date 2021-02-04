import { Car } from './car'


console.log('Hello World from your main file!');
let car = new Car([ 'Ford', 'Mustang' ]);
console.log(car)

console.log('----This is a ', car.name);

document.addEventListener("DOMContentLoaded", function() {
	//The first argument are the elements to which the plugin shall be initialized
	//The second argument has to be at least a empty object or a object with your desired options
	OverlayScrollbars(document.querySelectorAll("body"), { });
});