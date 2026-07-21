/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Function declaration for search
function search(animalsArray, nameString) {
    // Loop through each animal object in the animalsArray
    for (var i = 0; i < animalsArray.length; i++) {
        // check if the current animal's name matches the nameString
        if (animalsArray[i].name.toLowerCase() === nameString.toLowerCase()) {
            return animalsArray[i]; // return the animal object if found
        }
    }

    // if the loop finishes and no match was found, return null
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Function declaration for replace
function replace(animals, name, replacement) {
    // Loop through each animal in the animals array
    for (var i = 0; i < animals.length; i++) {
        // check if the current animal name matches the current name we are searching for
        if (animals[i].name.toLowerCase() === name.toLowerCase()) {
            // replace the entire object at this index with the replacement object
            animals[i] = replacement;
            // exit the function immediately after replacing
            return;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Function declaration for remove
function remove(animals, name) {
    // Loop through each animal in the animals array
    for (var i = 0; i < animals.length; i++) {
       // check if the current animal name matches the target name
       if (animals[i].name.toLowerCase() === name.toLowerCase()) {
        // remove 1 element at index i using splice
        animals.splice(i, 1);
        // exit the function immediately after removing
        return;
       }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Function declaration for add
function add(animals, animal) {
    if (!animal.name || animal.species.length === 0) {
        return;
    }
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === animal.name.toLowerCase()) {
            return;
        }
    }
    animals.push(animal);
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}