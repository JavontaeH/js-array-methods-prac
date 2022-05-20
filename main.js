const contacts = require("./data.json");

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with.

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result,
// 2. store the result with a variable
// 3. appropriately log the results to the console

// You can put your solutions after each comment below:

// 1. an array that contains all of the contacts that work at INSECTUS

insectArr = [];
contacts.forEach((contact) => {
  if (contact.company === "INSECTUS") {
    insectArr.push(contact);
  }
});
console.log(insectArr);

//2. an array all of the contacts, with only the name property

nameArr = [];
contacts.forEach((contact) => {
  nameArr.push(contact.name);
});
console.log(nameArr);

//3. an array of all of the contacts over the age of 50

ageArr = [];
contacts.forEach((contact) => {
  if (contact.age > 50) {
    ageArr.push(contact);
  }
});

//4. the first ten contacts when alphabetically ordered by name

sortedArr = [];
function sortContacts(x, y) {
  if (x.name < y.name) {
    return -1;
  } else {
    return 1;
  }
}
sortedArr = contacts.sort(sortContacts);
console.log(sortedArr.slice(0, 10));

//5. the oldest person's name

oldestArr = [];
function sortContacts(x, y) {
  if (x.age < y.age) {
    return 1;
  } else {
    return -1;
  }
}
sortedArr = contacts.sort(sortContacts);
console.log(sortedArr.slice(0, 1));

//6. the contact id with the name Isabella Burke

let isabellaId;
contacts.forEach((contact) => {
  if (contact.name === "Isabella Burke") {
    isabellaId = contact.id;
  }
});
console.log(isabellaId);

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties

splitNameArr = [];
contacts.forEach((contact) => {
  splitStr = contact.name.split(" ");
  contact.firstName = splitStr[0];
  contact.lastName = splitStr[1];
  delete contact.name;
  splitNameArr.push(contact);
});
console.log(splitNameArr);

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend

//9. the average age of the contacts

totalSum = 0;
contacts.forEach((contact) => {
  totalSum += contact.age;
});
let averageAge = totalSum / contacts.length;
console.log(averageAge);

//10. the median age of the contacts

medianAge = 0;
sortedMedianArr = [];
function sortContacts(x, y) {
  if (x.age < y.age) {
    return 1;
  } else {
    return -1;
  }
}
sortedMedianArr = contacts.sort(sortContacts);
medianAge = sortedMedianArr[sortedMedianArr.length / 2].age;
console.log(medianAge);
