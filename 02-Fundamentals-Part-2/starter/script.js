'use strict';

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio';
// const private = 534;

function logger() {
    console.log('My name is Joshua');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if(avgKoalas >= avgDolphins * 2) {
        return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        return console.log('No team wins...');
    }
}

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']


const firstName = 'Jonas';
const Jonas = [firstName, 'Schnedtmann', 2037 - 1991, 'teacher', friends];
console.log(Jonas);
console.log(Jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLength = friends.push('Jay'); // add to end. returns length of array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // adds to beginning. returns length of array
console.log(friends);

// Remove Elements
friends.pop(); // Remove last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Removes First Element
console.log(friends)

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven')
}

--------------------------------------------------------------------------------------
let tip;
function calcTip (bill) {
    if (bill >= 50 && bill <= 300) {
        tip = 0.15 * bill;
        return tip;
    } else {
        tip = 0.20 * bill;
        return tip;
    }
}
// const billTip = calcTip(100);
// console.log(billTip);

const bills = [125, 555, 44];
const tips = [];
tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));

console.log(tips);

const totals = [];
totals.push(bills[0] + tips[0]);
totals.push(bills[1] + tips[1]);
totals.push(bills[2] + tips[2]);

console.log(totals)
-----------------------------------------------------------------------------------------



const jonasArray = [
    'Jonas', 
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lasName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
*/

const jonas = {
    firstName: 'Jonas',
    lasName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};