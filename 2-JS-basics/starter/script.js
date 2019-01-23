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

// Varible coercion and mutation

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
