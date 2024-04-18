// Question 17
const MoreInvitesDinner: string[] = ["aisha", "alishba", "areeba"];
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
MoreInvitesDinner.unshift("kinza", "sarah");
while (MoreInvitesDinner.length > 2) {
    const removedGuest = MoreInvitesDinner.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (let i = 0; i < MoreInvitesDinner.length; i++) {
    console.log(`Dear ${MoreInvitesDinner[i]}, You are still cordially invited to dinner. We would be honored to have your presence.`);
}
MoreInvitesDinner.splice(0, MoreInvitesDinner.length);
console.log("Updated guest list:", MoreInvitesDinner);

// Question 18
const countryVisit: string[] = ["Suadia", "Dubai", "Oman", "Kuwait", "Uk"];
console.log("Original order:", countryVisit);
console.log("Alphabetical order:", ...countryVisit.sort());
console.log("Original order:", countryVisit);
console.log("Reverse alphabetical order:", ...countryVisit.sort().reverse());
console.log("Original order:", countryVisit);
countryVisit.reverse();
console.log("Reversed order:", countryVisit);
countryVisit.reverse();
console.log("Back to original order:", countryVisit);
console.log("Sorted in alphabetical order:", countryVisit.sort());
console.log("Reverse alphabetical order:", ...countryVisit.sort().reverse());

// Question 19
const SameMoreInvitesDinner: string[] = ["aisha", "alishba", "areeba"];
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
MoreInvitesDinner.unshift("kinza", "sarah");

while (SameMoreInvitesDinner.length > 2) {
    const removedGuest = SameMoreInvitesDinner.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (let i = 0; i < SameMoreInvitesDinner.length; i++) {
    console.log(`Dear ${SameMoreInvitesDinner[i]}, You are still cordially invited to dinner. We would be honored to have your presence.`);
}

SameMoreInvitesDinner.splice(0, SameMoreInvitesDinner.length);
console.log("Updated guest list:", SameMoreInvitesDinner);

// Question 20
const mountains = [
    "Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu",
    "Cho Oyu", "Dhaulagiri", "Manaslu", "Nanga Parbat", "Annapurna"
];
console.log("List of mountains:");
console.log(mountains);

// Question 21
interface Fruits {
    name: string;
    color: string;
    taste: string;
}

const apple: Fruits = { name: "Apple", color: "Red", taste: "Sweet and crisp" };
const banana: Fruits = { name: "Banana", color: "Yellow", taste: "Sweet and creamy" };
const orange: Fruits = { name: "Orange", color: "Orange", taste: "Tangy and refreshing" };

console.log("Apple:", apple);
console.log("Banana:", banana);
console.log("Orange:", orange);

// Question 22
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers[10]);

// Question 23
let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car != 'audi'? I predict True.");
console.log(car != 'audi');
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');
console.log("Is car.length <= 5? I predict False.");
console.log(car.length <= 5);
console.log("Is car == 'cultus'? I predict False.");
console.log(car == 'cultus');
console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6);
console.log("Is car.length > 12? I predict True.");
console.log(car.length > 12);
console.log("Does car start with 'sub'? I predict True.");
console.log(car.indexOf('sub') === 0);
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');
console.log("Is car.length == 7? I predict False.");
console.log(car.length == 7);

// Question 24
let username = "John";
let age = 25;
let fruits = ["apple", "banana", "orange"];
console.log(username === "John");
console.log(username !== "Mary");
console.log(username.toLowerCase() === "john");
console.log(username === "25");
console.log(username > "30");
console.log(age <= 25);
console.log(username === "John" && age === 25);
console.log(username === "Mary" || age === 30);
console.log(fruits.includes("banana"));
console.log(!fruits.includes("grape"));

// Question 25
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points!");
}
alien_color = 'red';
if (alien_color === 'green') {
    console.log("The player just earned 5 points!");
}

// Question 26
let alienColor: string = 'green';
if (alienColor == "green") {
    console.log(`Alien Color is: ${alienColor} hence the player just earned 5 points.`);
} else {
    console.log(`Alien Color is: ${alienColor} hence the player just earned the 10 points`);
}
if (alienColor == "red") {
    console.log(`Alien Color is: ${alienColor} hence the player just earned 5 points.`);
} else {
    console.log(`Alien Color is: ${alienColor} hence the player just earned the 10 points`);
}

// Question 27
let aliencolor = "green";
if (aliencolor == "green") {
    console.log(`Alien Color is: ${aliencolor} hence the player just earned 5 points.`);
} else if (aliencolor == "yellow") {
    console.log(`Alien Color is: ${aliencolor} hence the player just earned 10 points.`);
} else if (aliencolor == "red") {
    console.log(`Alien Color is: ${aliencolor} hence the player just earned 15 points.`);
}

aliencolor = "yellow";
if (aliencolor == "green") {
    console.log(`Alien Color is: ${aliencolor} hence the player just earned 5 points.`);
} else if (aliencolor == "yellow") {
    console.log(`Alien Color is: ${aliencolor} hence the player just earned 10 points.`);
} else if (aliencolor == "red") {
    console.log(`Alien Color is: ${aliencolor} hence the player just earned 15 points.`);
}

aliencolor = "red";
if (aliencolor == "green") {
    console.log(`Alien Color is: ${aliencolor} hence the player just earned 5 points.`);
} else if (aliencolor == "yellow") {
    console.log(`Alien Color is: ${aliencolor} hence the player just earned 10 points.`);
} else if (aliencolor == "red") {
    console.log(`Alien Color is: ${aliencolor} hence the player just earned 15 points.`);
}

// Question 28
const personAge: number = 30;
if (personAge < 2) {
    console.log("Person is a baby");
} else if (personAge >= 2 && personAge < 4) {
    console.log("Person is a toddler");
} else if (personAge >= 4 && personAge < 13) {
    console.log("Person is a teenager");
} else if (personAge >= 20 && personAge < 65) {
    console.log("Person is an adult");
} else {
    console.log("Person is an older");
}

// Question 29
const favorite_fruits = ["banana", "mango", "orange"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mango!");
}

// Question 30
const users: string[] = ["Aamir", "Ahmed", "haider", "admin", "ashir"];
for (let i = 0; i < users.length; i++) {
    if (users[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?!");
    } else {
        console.log(`Hello ${users[i]} , thank you for logging in again.`);
    }
}
