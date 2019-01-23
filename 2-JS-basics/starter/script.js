/*
Variable types, declaration, intialization
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;
var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var invalidSyntax1 = 'First char is a number, 0 or 1 etc';
var invalidSyntax2 = 'First char is a symbol, except $ and _';
var invalidSyntax1 = 'variable name is a keyword, like if or function';
*/

/* Varible coercion and mutation

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/* Basic operator

var year, yearJohn, yearMark;
year = 2018;
var ageJohn = 28;
var ageMark = 33;

//Math operators
yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log(yearJohn);

console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

//Logical operator
var johnOlder = yearJohn > yearMark;

console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

//operators precedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn > fullAge;
console.log(isFullAge);

var ageJohn, ageMark, average;
ageJohn = now - yearJohn;
ageMark = 35;
average = (ageJohn + ageMark) / 2;
console.log(average);

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//instead of 'x = x OP 2'
//use this
x *= 2;
console.log(x);
x += 10;
console.log(x);
x -= 2;
console.log(x);
x /= 20;
console.log(x);
x %= 2;
console.log(x);

