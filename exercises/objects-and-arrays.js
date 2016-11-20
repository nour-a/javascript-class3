// 1) create a person object and give it a name property
var person={firstName:'Nour',lastName:'Aswad'};


// 2) assign a favourite food property to this person object
person.favouriteFood='Pizza';
document.write(person.firstName + " likes " + person.favouriteFood + "<br/>");


// 3) how many ways can you access these properties?
document.write("First way to access the properties is person.favouriteFood "+person.favouriteFood+ "<br/>");
document.write("Second way to access the properties is person['lastName'] "+person['lastName']+ "<br/>");


// 4) take the farourite food property of your person and add it to a new array
var food=[];
food.push(person.favouriteFood);
document.write("My food array has "+food+ "<br/>");


// 5) add more foods to this array
food.push('Chips');
food.push('Pasta');
food.push('Cake');
document.write("My food array has more kinds of foods like: "+food+ "<br/>");


// 6) change the person object's favourite food property to be this new array
person.favouriteFood = food
document.write("The person now has an array of favourite foods "+ person.favouriteFood+ "<br/>");


// 7) write a function that takes a person as an argument and returns one of their favourite foods.
function personFavouriteFood(person) {
	for(var i=0; i<person.favouriteFood.length;i++){
		document.write("Nour likes : "+person.favouriteFood[i]+ "<br/>") ;
	}
}
personFavouriteFood(person);


// 8) can you turn this object into a two-dimestional array?



// 9) can you turn the two-dimensional array back into an object?



// more? http://eloquentjavascript.net/04_data.html#h_TcUD2vzyMe
