var Animal = function (myType) {
	this.type = myType;
}
// add methods afterwards
Animal.prototype.speak = function () {
	if(this.type === 'cat') {
		return 'meow';
	} else if(this.type === 'dog') {
		return 'bark';
	}
}

Animal.prototype.move = function(){
	if(this.type === 'cat'){
		return 'run';
	} else{
		return 'swim';
	}
}

/* Reminders */

// var dog = new Animal('dog'); 
// // dog is an instance of Animal
// var cat = new Animal('cat'); 
// // cat is an instance of Animal

// dog.speak() //returns bark
// cat.speak() //returns meow
