// function makeMultiplier(multiplier) {
// 	var myFunc= function(x) {
// 		return multiplier*x;
// 	};
// 	return myFunc;
// }

// var multiplyBy3=makeMultiplier(3);
// var doubleAll=makeMultiplier(2);
// function doOperationOn(x,operation) {
// 	return operation(x);
// }

// var result=doOperationOn(5,multiplyBy3)
// console.log(result);
// result=doOperationOn(100,doubleAll);
// console.log(result);

//Function Constructor

// function Circle(radius) {
// 	this.radius=radius;
// }

// Circle.prototype.getArea= 
// 	function() {
// 		return Math.PI*Math.pow(this.radius,2);
// 	};

// var myCircle= new Circle(10);
// console.log(myCircle);
// console.log("Area:" + myCircle.getArea());

var literalCircle = {
	radius = '10',
	getArea: function() {
		var self=this;
		console.log(this);
		var increaseRadius= function() {
			self.result=20;
		};
		increaseRadius();
		console.log(this.radius);
		return Math.PI*Math.pow(this.radius,2);
	}
};
console.log(literalCircle.getArea);