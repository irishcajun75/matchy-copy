/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1. Create a variable named animal and assign it to an empty object
var animal = {};

// 2. Using dot notation, give animal a property named species
animal.species = "Dolphin";

// 3. Using bracket notation, give animal a property called name
animal['name'] = "Calypso";

// 4. Use either notation and give animal a property called noises
animal.noises = [];

// 5. Print the animal object to the console
console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1. Create a variable named noises and assign it to an empty array
var noises = [];

// 2. Using bracket notation, give noises its first element (index 0)
noises[0] = "click";

// 3. Use an array function (push) to add another noise to the END
noises.push("whistle");

// 4. Add an element to the BEGINNING of the array using an array function (unshift)
noises.unshift("squeak");

// 5.  Using BRACKET SYNTAX and .length to add another element to the end dynamically
noises[noises.length] = "echolocation";

// 6. Console log the length of noises
console.log(noises.length);

// 7. Console log the last element without hardcoding the index
console.log(noises[noises.length - 1]);

// 8. Console log the whole array
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1. Using bracket syntax, assign the noises property on animal to our new noises array
animal['noises'] = noises;

// 2. Using any syntax, add another noise to the noises propery on animal
animal.noises.push("chirp");

// 3. Console log animal
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * "Dot Notation (object.key), when you know the exact name of the property"
 *  "Bracket notation (object['key'] - bracket notation passes the property 
 *  name as a string inside square brackets.  Bracket notation can access a property 
 *  name stored inside a variable (dynamic keys), can access properties with
 *  special characters or spaces, and allows properties to be unpacked
 *  directly into distinct variables"
 *
 * 2. What are the different ways of accessing elements on arrays?
 * " It depends on whether you know the position (index), need to look from 
 *  the end, or want to search by conditions 1. Index/Bracket Notation (array[index])
 *  The .at() method that allows negative numbers to count backward from the end easily,
 *  array destructuring unpacking elements straight into individual variables
 *  based on their positions, search and find methods, and loop iteration"
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//1. Create a variable named animals and assign it to an empty array
var animals = [];

// 2. Push our animal that we created to animals
animals.push(animal);

// --- Add 3 more animals here so that length is 4 --- 
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk'] };
var elephant = { species: 'elephant', name: 'Ellie', noises: ['trumpet'] };
var lion = { species: 'lion', name: 'Simba', noises: ['roar'] };


animals.push(duck, elephant, lion);

// 3. Console log animals
console.log(animals);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. Choose a data structure for this list of friends
// I chose an Array because a list of friends is an ordered collection of items
// strings/names which makes it easy to add friends, count how many friends
// an animal has, or pick a random friend by index
// 2. Create a variable called friends and assign it to the data structure chosen
var friends = [];

// 3. Write a function called getRandom that takes an array and returns a random index
function getRandom(array) {
  return Math.floor(Math.random() * array.length);
}
// 4. Get a random animal index using getRandom and add its name to friends
var randomIndex = getRandom(animals);
var randomAnimal = animals[randomIndex];
friends.push(randomAnimal.name);

// 5. Console.log friends
console.log('Friends list:', friends);

// 6. Using BRACKET NOTATION, add the friends list as a property named 'friends'on one of the animals
animals[0]['friends'] = friends;

// 7. console.log
console.log('Animal with friends property:', animals[0]);




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}