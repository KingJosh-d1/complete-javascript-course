/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName)
console.log(firstName)
console.log(firstName)

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas"
let PI = 3.1415;

let my_FirstJob = " Coder";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(my_FirstJob)

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2023;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

//math operators + - * ** /
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// assignment Operators = += *= /= ++ --
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// comparison operators: to produe boolean operators = >, <, >=, <=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI)

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


const age = 15;

if(age >= 18) {
    console.log('Sarah con start driving license 🚗')
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young, Wait another ${yearsLeft} years. :)`);
}

const birthYear = 2012; // 20th century

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Write your code below. Good luck! 🙂 

let higherBMI;
if(BMIMark > BMIJohn) {
    higherBMI = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`;
    console.log(higherBMI)
} else {
    higherBMI = `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`;
    console.log(higherBMI)
}

// type conversion
const inputYear = '1991';
console.log(number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // Nan invalid number
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log('I am' + 23 + 'years old'); // + numbers are converted to strings
console.log('23' - '10' - 3); // - strings are converted to numbers
console.log('23' * '2') // * and / strings are converted to numbers


// 5 falsy values: 0, '', undefined, null, NaN -> False also

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log("Height is UNDEFINED");
}

const age = 18;
if(age === 18) console.log('You just became an adult :D (strict)');

if(age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number') 
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('why not 23?');

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...')
// }
const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88, 91, 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
} else if (scoreKoalas === scoreDolphins) {
    console.log("Both win the trophy");
} else {
    console.log("Okayyyy")
}

const day = 'saturday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D')
        break;
    default:
        console.log('Not a valid day');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

3 + 4 -> Expression
1991 -> Expression
true && false && !false -> Expression
if-else statement and switch statement -> Statement


// conditionals -> if-else, switch, and conditional Operator

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') :
// console.log('I like to drink water 💧');

// if age is greater than or equals to 18 log ... to console else log ... to console

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)
*/

// Assignments
// Values and Variables
const country = 'Germany';
const continent = 'Europe';
let population = 88;

// console.log(country);
// console.log(continent);
// console.log(population);

// let, const and var
const isIsland = false;
let language;

// Data Types
// console.log(typeof isIsland);
// console.log(typeof(population));
// console.log(typeof(country));
// console.log(typeof(language));

language = 'German';

// Basic Operators
// console.log(population / 2);
// console.log(population + 1);
// console.log(population > 6);
// console.log(population < 33);

// // Template literals
// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
// console.log(description);

// // if and else
// if (population > 33) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${33 - population} million below average`);
// }

// Type conversion and coercion
// console.log('9' - '5'); // -> 4
// console.log('19' - '13' + '17'); // -> '617'
// console.log('19' - '13' + 17); // -> 23
// console.log('123' < 57); // -> false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143


// == vs ===
// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }


//logical operators

if (language == 'English' && population < 50 && isIsland == false) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}


// Switch statement
switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish': // day === 'monday'
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('Great language too :D');
}

// The conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);
