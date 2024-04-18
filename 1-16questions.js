"use strict";
//assignment 45
//question 2
const personName = "Aamir Saleem";
const messagePrint = `Hello ${personName}, would you like to learn some Python today?`;
console.log(messagePrint);
//question3 
const personNameCase = "Aamir";
const lowerCase = personName.toLowerCase();
const upperCase = personName.toUpperCase();
const titlecaseName = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(`lowerCase:${lowerCase}, upperCase:${upperCase}, Titlecase:${titlecaseName}`);
console.log();
// questions 4
const author = "Albert Einstein";
const qutations = "A person who never made a mistake never tried anything new.";
console.log(`The ${author} said that: ${qutations}`);
//questions 5
const famous_person = "Albert Elinstein";
let message = `The ${famous_person} said that: ${qutations}`;
console.log(message);
//questions 6
const whiteSpaceCharacter = "What your name:\n \t My name is : \t Aamir Saleem";
console.log("White space:", whiteSpaceCharacter);
const stripingName = whiteSpaceCharacter.replace(/\s+/g, '');
console.log("Stripped string:", stripingName);
//questions 7
const addvalue = 6 + 2;
const subvalue = 12 - 4;
const mulvalue = 2 * 4;
const divvalue = 64 / 8;
console.log(`addvalue: ${addvalue}, subvalue: ${subvalue}, mulvalue:${mulvalue}, divvalue: ${divvalue}`);
//questions 8
console.log(6 + 2, 12 - 4, 2 * 4, 64 / 8);
//questions 9
const favouriteNumber = 12;
const favouriteNumberResult = "My  favourite number is " + favouriteNumber;
console.log(favouriteNumberResult);
//questions 10
//we add the two numbers
const addNumber = 4 + 6;
//now we print this number
console.log(addNumber);
//questions 11
const nameList = ["Usman", "Ahmed Raza", "Muhmmad Mustufa", "Hassan", "Abdul Moiz"];
for (let i = 0; i < nameList.length; i++) {
    console.log(nameList[i]);
}
//questions 12
const nameListMessage = ["Usman", "Ahmed Raza", "Muhmmad Mustufa", "Hassan", "Abdul Moiz"];
for (let i = 0; i < nameListMessage.length; i++) {
    console.log(`hello ${nameList[i]} how are you?`);
}
//questions 13
const trasnport = ["Cycle", "bike", "car", "suzuki"];
for (let i = 0; i < trasnport.length; i++) {
    console.log(`I would like to own a ${trasnport[i]}`);
}
//questions 14
const inviteDinners = ["aisha", "alishba", "areeba"];
for (let i = 0; i < inviteDinners.length; i++) {
    console.log(`I would like to invite ${inviteDinners[i]}`);
}
//questions 15  
const inviteDinner = ["aisha", "alishba", "areeba"];
const removeDinner = inviteDinner.splice(2, 2)[0];
console.log("You are remove from Dinner ", removeDinner);
inviteDinner.push("Javeria");
for (let i = 0; i < inviteDinner.length; i++) {
    console.log(`Dear you would like to invite ${inviteDinner[i]}`);
}
//questions 16
const MoreInviteDinner = ["aisha", "alishba", "areeba"];
MoreInviteDinner.unshift("javeria");
MoreInviteDinner.splice(Math.floor(MoreInviteDinner.length / 2), 0, "hajra");
MoreInviteDinner.push("bushra");
for (var i = 0; i < MoreInviteDinner.length; i++) {
    console.log(`Dear you would like to invite ${MoreInviteDinner[i]}`);
}
