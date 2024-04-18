"use strict";
// Question 31
let user = ["Aamir", "Ahmed", "haider", "admin", "ashir"];
user = [];
if (user.length === 0) {
    console.log("We need to add more users.");
}
else {
    console.log('All users have been removed, and now we need to add more users.');
}
// Question 32
let current_users = ["Aamir", "Ahmed", "Haider", "Admin", "Ashir"];
let new_users = ["Iqbal", "Yonus", "Naveed", "Bashir", "Ashgar"];
for (let i = 0; i < new_users.length; i++) {
    let isNewUserAvailable = true;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            isNewUserAvailable = false;
            break;
        }
    }
    if (isNewUserAvailable) {
        console.log(`${new_users[i]} is available.`);
    }
    else {
        console.log(`${new_users[i]} is not available. The person will need to enter a new username.`);
    }
}
// Question 33
let ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinal_numbers.length; i++) {
    if (ordinal_numbers[i] === 1) {
        console.log(`${ordinal_numbers[i]}st`);
    }
    else if (ordinal_numbers[i] === 2) {
        console.log(`${ordinal_numbers[i]}nd`);
    }
    else if (ordinal_numbers[i] === 3) {
        console.log(`${ordinal_numbers[i]}rd`);
    }
    else {
        console.log(`${ordinal_numbers[i]}th`);
    }
}
// Question 34
const pizzaFlavor = ['fajita', 'malai boti', 'tikka'];
for (let i = 0; i < pizzaFlavor.length; i++) {
    console.log(pizzaFlavor[i]);
}
for (let j = 0; j < pizzaFlavor.length; j++) {
    console.log(`'I like ${pizzaFlavor[j]} pizza.'`);
}
console.log("I really love pizza!");
// Question 35
const animal = ["Dog", "cat", "parrot"];
for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}
for (let i = 0; i < animal.length; i++) {
    console.log(`A ${animal[i]} would make a great pet`);
}
console.log("Any of these animals would make a great pet!");
// Question 36
const make_shirt = (size, message) => {
    console.log(`Your shirt size is ${size} and your message is ${message}`);
};
// Question 37
const makeShirt = (size = "large", message = "I love TypeScript") => {
    console.log(`Your shirt size is ${size} and your message is ${message}`);
};
makeShirt();
makeShirt("medium");
makeShirt("small", "I like your shirt! and its quality is good");
// Question 38
const describe_city = (city = "karachi", country = "pakistan") => {
    console.log(`Your city is: ${city} and country is: ${country}`);
};
describe_city("Lahore");
describe_city("Madinah", "suadia");
describe_city("Makkah", "suadia");
// Question 39
const city_country = (city = "karachi", country = "pakistan") => {
    console.log(`"${city},${country}"`);
};
city_country("Lahore");
city_country("Madinah", "suadia");
city_country("Makkah", "suadia");
function make_album(Artist, Title, Tracks) {
    let album = {
        Artist: Artist,
        Title: Title,
    };
    if (Tracks !== undefined) {
        album.Tracks = Tracks;
    }
    return album;
}
let album1 = make_album("Ali zafar", "PSL", 100);
let album2 = make_album("Atif Aslam", "Tajdar e ahram");
let album3 = make_album("Junaid Jamshed", "Dil Dil pakistan", 20);
console.log(album1);
console.log(album2);
console.log(album3);
// Question 41
const magicians = ["Harry Houdini", "David Blaine", "Dai Vernon"];
const magicianFunctions = (magiciansName) => {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`Magician name is: ${magicians[i]}`);
    }
};
magicianFunctions(magicians);
// Question 42
const magicians2 = ["Harry Houdini", "David Blaine", "Dai Vernon"];
const make_great = (magician_array) => {
    let greatMagicians = [];
    for (let i = 0; i < magician_array.length; i++) {
        greatMagicians.push("the Great " + magician_array[i]);
    }
    return greatMagicians;
};
const greatMagiciansArray = make_great(magicians2);
console.log(greatMagiciansArray);
// Question 43
let greatMagicians = make_great([...magicians2]);
console.log("Orginal Magicians");
magicianFunctions(magicians2);
console.log("Great Magicians");
magicianFunctions(greatMagicians);
// Question 44
const orderSandwich = (...items) => {
    console.log("Sandwich order:");
    if (items.length === 0) {
        console.log("Plain sandwich");
    }
    else {
        console.log("Sandwich with:");
        items.forEach(item => {
            console.log(`- ${item}`);
        });
    }
};
orderSandwich("ketchup", "chesse");
orderSandwich("cucumber", "Tomato");
orderSandwich();
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model
    };
    for (let i = 0; i < options.length; i++) {
        const [key, value] = options[i];
        car[key] = value;
    }
    return car;
}
const myCar = createCar("Toyota", "Corolla", ["color", "black"], ["year", 2020]);
console.log(myCar);
