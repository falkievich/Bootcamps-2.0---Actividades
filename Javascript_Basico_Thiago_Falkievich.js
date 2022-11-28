//Test 1 -  comment-your-javascript-code
console.log("Hola")//Holaa
console.log("Hola")/*Holaa*/

//Test 2 -  declare-javascript-variables
var myName ;

//Test 3 -  storing-values-with-the-assignment-operator
var a;
a = 7;

//Test 4 -  assigning-the-value-of-one-variable-to-another
var a;
a = 7;
var b;
b =a;

//Test 5 - initializing-variables-with-the-assignment-operator
var a = 9;

//Test 6 - declare-string-variables
var  myFirstName = "Uwu";
var myLastName  = "Neitor";

//Test 7 - understanding-uninitialized-variables
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

//Test 8 - understanding-case-sensitivity-in-variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Test 9 - explore-differences-between-the-var-and-let-keywords
let catName = "Oliver";
let catSound = "Meow!";

//Test 10 - declare-a-read-only-variable-with-the-const-keyword
const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 

//Test 11 - add-two-numbers-with-javascript
const sum = 10 + 10;

//Test 12 - subtract-one-number-from-another-with-javascript
const difference = 45 - 33;

//Test 13 - multiply-two-numbers-with-javascript
const product = 8 * 10;

//Test 14 - divide-one-number-by-another-with-javascript
const quotient = 66 / 33;

//Test 15 - increment-a-number-with-javascript
let myVar = 87;

while (myVar == 87){
myVar ++
}

//Test 16 - decrement-a-number-with-javascript
let myVar = 11;

myVar --;

//Test 17 - create-decimal-numbers-with-javascript
const myDecimal = 5.7;

//Test 18 - multiply-two-decimals-with-javascript
const product = 2.5 * 2.0;

//Test 19 - divide-one-decimal-by-another-with-javascript
const quotient = 4.4 / 2; 

//Test 20 - finding-a-remainder-in-javascript
const remainder = 11%3;

//Test 21 - compound-assignment-with-augmented-addition
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9 ;
c += 7;

//Test 22 - compound-assignment-with-augmented-subtraction
let a = 11;
let b = 9;
let c = 3;

a -=  6;
b -= 15;
c -= 1;

//Test 23 - compound-assignment-with-augmented-multiplication
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3 ;
c *= 10;

//Test 24 - compound-assignment-with-augmented-division
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

//Test 25 - escaping-literal-quotes-in-strings
const myStr = ("I am a \"double quoted\" string inside \"double quotes\"."); 

//Test 26 - quoting-strings-with-single-quotes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//Test 27 - qescape-sequences-in-strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 

//Test 28 - concatenating-strings-with-plus-operator
const myStr = "This is the start." + " This is the end.";

//Test 29 - concatenating-strings-with-the-plus-equals-operator
let myStr= "This is the first sentence.";
myStr += " This is the second sentence."

//Test 30 - constructing-strings-with-variables
const myName = "Riqui";
const myStr = "Mi nombre es" + myName + "gano scaloni vamooo";

//Test 31 - appending-variables-to-strings
const someAdjective = "Rico";
let myStr = "Learning to code is ";
myStr += someAdjective;

//Test 32 - find-the-length-of-a-string
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

//Test 33 - use-bracket-notation-to-find-the-first-character-in-a-string
let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; // Change this line

//Test 34 - understand-string-immutability
let myStr = "Jello World";

myStr = "Hello World"; 

//Test 35 - use-bracket-notation-to-find-the-nth-character-in-a-string
const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2]; // Change this line

//Test 36 - use-bracket-notation-to-find-the-last-character-in-a-string
const lastName = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line

//Test 37 - use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
const lastName = "Lovelace";

const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

//Test 38 - word-blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myNoun + " is so " + myAdjective + " and " + myVerb + " " + myAdverb; // Change this line

//Test 39 - store-multiple-values-in-one-variable-using-javascript-arrays
const myArray = ["Hola",1];

//Test 40 - nest-one-array-within-another-array
const myArray = [["Messi", 10], ["Enzo F.",24]];

//Test 41 - access-array-data-with-indexes
const myArray = [50, 60, 70];
let myData = myArray[0];

//Test 42 - modify-array-data-with-indexes
const myArray = [18, 64, 99];

myArray[0] = 45;
