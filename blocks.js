// #White Level - addition(3, 2) ➞ 5

// 1. Create a function that takes two numbers as arguments and return their sum.

function add(a, b) {
  return a + b;
}

function add(a, b) {
  let sum = a + b; 
  return sum;
}

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Sorry but you didn't pass two numbers.";
  }
    return a + b; 
}


// #White Level - lessThanOrEqualToZero(5) ➞ false

// 2. Create a function that takes a number as its only argument and returns true if it's less than or equal 
//    to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
	if (num <= 0)
	  return true;
	else
		return false;
}

// es6
const lessThanOrEqualToZero = num => num <= 0;

// ternary
function lessThanOrEqualToZero(num) {
	return num <= 0 ? true : false;
}

// #White Level - triArea(10, 10) ➞ 50

// 3.  Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
	let area = (base * height ) / 2; 
  return area;
}

function triArea(base, height) {
	var a = base * height ;
	var b = a / 2 ;
	return b;
}

function triArea(base, height) {
	return base * height / 2;
}

const triArea = (base, height) => (base * height) / 2;

// #Whtie Level -  nextEdge(9, 2) ➞ 10


// 4. Create a function that finds the maximum range of a triangles third edge.

function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}

function nextEdge(side1, side2) {
	if (side1 > 0 && side2 > 0) {
		return (side1 + side2) - 1;
	} else {
		return;
	}
}

const nextEdge = (side1, side2) => side1 + side2 - 1;

// #Whtie Level -  convert(2) ➞ 120

// 5. Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
	seconds = minutes * 60; 
	return seconds;
}

function convert(minutes) {
	return  minutes * 60;
}

const convert = (minutes) => minutes * 60

// #Whtie Level -  addition(9) ➞ 10

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
	return num + 1;
}

function addition(num) {
	return ++num;
}

const addition = (num) => num++

// #Whtie Level -  animals(2, 3, 5) ➞ 36

/*

6. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

*/

function animals(chickens, cows, pigs) {
	chickens *= 2;
	cows *= 4;
	pigs *= 4;
	return chickens + cows + pigs;
}

function animals(chickens, cows, pigs) {
	return chickens*2+(cows+pigs)*4;
}

const animals = (chickens, cows, pigs) => chickens * 2 + cows * 4 + pigs * 4;

// #Whtie Level -  divisibleByFive(5) ➞ true

// 7. Create a function that returns true if an integer is divisible by 5, and false otherwise.

function divisibleByFive(n) {
	return n % 5 === 0; 
}

function divisibleByFive(n) {
	if (n % 5 === 0) {
		return true;
	}
	else {
		return false;
	}
};

divisibleByFive = n => !(n % 5)


// #White Level - profitableGamble(0.2, 50, 9) ➞ true

/*

8. Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

*/

function profitableGamble(prob, prize, pay) {
	let profit = prob * prize - pay;
		if (profit > 0) {
			return true;
		} else {
			return false;
		}
}

function profitableGamble(prob, prize, pay) {
	return (prob * prize - pay) > 0
}

const profitableGamble = (prob, prize, pay) =>
	prize * prob > pay;
	
function profitableGamble(prob, prize, pay) {
	return prob * prize - pay > 0 ? true : false
}

// #Yellow Level - function(1, 0, 10) ➞ 205 input (5, 2, -6) ➞ "invalid"

/* 

9. Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, 
where users get points for completing challenges. An Easy challenge is worth five points, a Medium challenge 
is worth ten points, and a Hard challenge is worth twenty points.

Create a function that takes in the number of each challenge level a user has played and calculates the 
user's total number of points. Keep in mind that a user cannot complete negative challenges, so the 
function should return the string "invalid" if any of the passed parameters is negative.

Create a function that takes in the number of each challenge level a user has played and calculates 
the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the 
function should return the string "invalid" if any of the passed parameters is negative.

*/ 

function scoreCalculator(easy, med, hard) {
	if (easy < 0 || med < 0 || hard < 0) {
	 return "invalid";
  } else {
	 return easy * 5 + med * 10 + hard * 20;
	}
}

function scoreCalculator(easy, med, hard) {
  if (easy >= 0 && med >= 0 && hard >= 0){
		return (easy * 5) + (med * 10) + (hard * 20);
	} else {
		return "invalid";
	}	
}

const scoreCalculator = (...points) => 
	points.some(num => num < 0) ? 
		'invalid' : (points[0]*5) + (points[1]*10) + (points[2]*20)

const scoreCalculator = (e, m, h) => {
	if (e < 0 || m < 0 || h < 0) return 'invalid'
		return e * 5 + m * 10 + h * 20
	}

function scoreCalculator(easy, med, hard) {
	return (easy<0||med<0||hard<0) ? "invalid" : 5*easy + 10*med + 20*hard;
}

// #White Level - howManySeconds(10) ➞ 36000

// 10. Write a function that converts hours into seconds.

function howManySeconds(hours) {
	return hours * 3600;
}

const howManySeconds = hours => Number.isInteger(hours) ? hours*3600 : "error";

let howManySeconds = h => h * 3600;

// #White Level - concatName("First", "Last") ➞ "Last, First"

// 11. Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
	return lastName + ', ' + firstName
}

function concatName(firstName, lastName) {
	return `${lastName}, ${firstName}`;
}

const concatName = (first, last) => `${last}, ${first}`;

// #White Level - A string containing only whitespaces " " does not count as empty.

// 12. Create a function that returns true if a string is empty and false otherwise.

function isEmpty(s) {
	return (!s || 0 === s.length);
}

function isEmpty(s) {
	return s.length == 0;
}

function isEmpty(s) {
	return s === '';
}

function isEmpty(s) {
	if (s === '') {
		return true
	} else {
		return false
	}
}

function isEmpty(s) {
	return s === '' ? true : false;
}

// #White - squared(9) ➞ 81

// 13. Fix the code in the code tab to pass this challenge (only syntax errors). 
// Look at the examples below to get an idea of what the function should do.
// The variables are named just fine, you just have to debug the code usage of variables.

function squared(b) {
	return b*b;
}

// #White - length("apple") ➞ 5

// 14. Write a function that returns the length of a string. Make your function recursive.

function length(str) {
  while(str.length >= 0) {
	  return str.length
  }
}

const length = str => str == '' ? 0 : length(str.substring(1)) + 1;

const length = str => !str ? 0 : 1 + length(str.slice(1));


// Recursion Example - StackOverflow

var counter = 10;
while(counter > 0) {
    console.log(counter--);
}

var countdown = function(value) {
	if (value > 0) {
			console.log(value);
			return countdown(value - 1);
	} else {
			return value;
	}
};
countdown(10);

// #White - getFirstValue([80, 5, 100]) ➞ 80

// 15. Create a function that takes an array and returns the first element.

function getFirstValue(arr) {
	let first = arr => arr[0];
  return(first(arr));
}

function getFirstValue(arr) {
	return arr[0];
}

const getFirstValue = arr => arr[0];

// #White - comp("ABC", "DE") ➞ false

// 16. Create a function that takes two strings as arguments and return either true or false depending 
// on whether the total number of characters in the first string is equal to the total number of characters 
// in the second string.

function comp(str1, str2) {
	if (str1.length === str2.length) {
		return true;
	} else {
		return false; 
	}
}

function comp(str1, str2) {
	return str1.length === str2.length;
}

const comp = (str1, str2) => str1.length === str2.length;

//  #White - check([1, 2, 3, 4, 5], 3) ➞ true

// 17. Write a function to check if an array contains a particular number.

function check(arr, el) {
	return arr.includes(el); 
}

function check(arr, el) {
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === el){
			return true;
		}
	}
	return false;
}

function check(arr, el) {
	if (arr.includes(el)) {
		return true
	} else {
		return false
	}
}

const check = (arr, el) => Array.from(arr).includes(el) ? true : false; 

const check = (arr, el) => arr.includes(el)

function check(arr, el) {
	return arr.indexOf(el) > -1;
}

// #White - helloName("Gerald") ➞ "Hello Gerald!"

// 18. Create a function that takes a name and returns a greeting. Don't use a normal function but use an "arrow function".

const helloName = name => `Hello ${name}!`

const helloName = name => 'Hello ' + name+'!'

// #White - getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// 19. Create a function that accepts an array and returns the last item in the array.

function getLastItem(arr) {
	return arr.pop()
}

function getLastItem(arr) {
	return (arr.slice(-1)[0]);
}

function getLastItem(arr) {
  return arr[arr.length - 1]
}

const getLastItem = arr => arr[arr.length - 1];

function getLastItem(arr) {
  if (arr.length > 0)
  		return(arr[arr.length-1]);
  else return(null);
}


// codeblocq example

var array = [1,2,3,4,5,6];
console.log(array.slice(-1)); // [6]
console.log(array.slice(-2)); // [5,6]
console.log(array.slice(-3)); // [4,5,6]

// #White - search([9, 8, 3], 3) ➞ 2

// 20. Create a function that finds the index of a given item.

function search(arr, item) {
	return arr.indexOf(item); 
}

function search(arr, item) {
	for(var i = 0;i < arr.length; i++) {
		if (arr[i] == item) {
		return i;
		}
	}
	return -1;
}

function search(arr, item) {
	return arr.findIndex(i => i === item)
}

// #White - isEvenOrOdd(3) ➞ "odd"

// 21. Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function isEvenOrOdd(num) {
  return num % 2 ? 'odd' : 'even';
}

function isEvenOrOdd(num) {
	if ( num % 2 === 0) { 
		return 'even'; 
	} else {
		return 'odd'; 
	}
}

let isEvenOrOdd = n => n % 2 ? 'odd' : 'even'; 

let isEvenOrOdd = n => n & 1 ? 'odd' : 'even';

// #Yellow - search([2, 4, 6, 8, 10], 8) ➞ 3

// 22. Create a function that finds the index of a given item in a sorted array using recusion. Input is (arr, item).

function search(arr, item) {
	if (arr.toString() === arr.slice(0).sort((a,b) => a - b).toString()){
    return arr.indexOf(item); 
	}
	return -1; 
}

function search(arr, item) {
	return arr.indexOf(item); 
}

const search = (arr, item) => arr.indexOf(item);

const search = (arr,item) => {
	for (let i=0; i<arr.length; i++){
		if(arr[i] === item){
			return i;
		}
	}
	return -1;
};


// #Yellow - volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

// 23. Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

function volumeOfBox(sizes) {
	return sizes.height * sizes.width * sizes.length;
}

const volumeOfBox = (sizes) => sizes.width * sizes.length * sizes.height;


// #White = hasSpaces("hello, world") ➞ true

// 24. Create a function that returns true if a string contains any spaces.

function hasSpaces(str) {
	if (str.includes(' ')) {
		return true
	} else {
		return false
  }
}

function hasSpaces(str) {
	return str.includes(' ') ? true : false
}

function hasSpaces(str) {
	return str.includes(' ')
}

const hasSpaces = str => str.includes(' ');

function hasSpaces(str) {
	return str.indexOf(' ') != -1;
}

function hasSpaces(str) {
	return (/\s/).test(str);
}

// example 

var sentence = 'The quick brown fox jumps over the lazy dog.';

var word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);

// 25. Write a function to reverse an array.

// #White - reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// expected output: "The word "fox" is in the sentence"

function reverse(arr) {
	return arr.reverse()
}

function reverse(arr) {
	let result = [];
	for (let i = arr.length -1; i > -1; i--) {
		result.push(arr[i]);
	}
	
	console.log(...result);
	return result;
}

function reverse(arr) {
	let word = [];
	for(letter of arr){
		word.unshift(letter)
	}
	return word
}

const reverse = arr => arr.reverse();


// 26. Create a function that takes a base number and an exponent number and returns the calculation.

// #White - calculateExponent(5, 5) ➞ 3125

function calculateExponent(num, exp) {
	return Math.pow(num, exp) 
}

function calculateExponent(num, exp) {
	return exp > 1 ? num * calculateExponent(num, exp - 1) :  num;
}

const calculateExponent = (num, exp) => {
	let newexp = 1;
	for (let i = 0; i < exp; i++) {
		newexp = newexp * num
	}
	return newexp;
}

const calculateExponent = (num, exp) => Math.pow(num, exp);

// 27. Create a function to concatenate two integer arrays.

// #White - concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

function concat(arr1, arr2) {
	return arr1.concat(arr2); 
}

function concat(arr1, arr2) {
	for(let i=0;i<= arr2.length-1;i++)
		{
			arr1.push(arr2[i]);
		}
	return arr1;
}

function concat(arr1, arr2) {
	return [...arr1,...arr2]
	}

function concat(arr1, arr2) {
	for (item of arr2){
		arr1.push(item)
	}	
	return arr1
}

	const concat = (arr1, arr2) => arr1.concat(arr2);

	
	// 28. Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
	
	// #White - divisible(1000) ➞ true

function divisible(num) {
	if (num % 100 === 0) {
		return true; 
	} else {
		return false; 
	}
}

function divisible(num) {
	return !(num % 100)
}

function divisible(num) {
	return num % 100 === 0;
}

const divisible = num => num % 100 === 0;


// 29. Write a function that takes two integers (hours, minutes) and converts them into seconds.

// #White - convert(1, 3) ➞ 3780

function convert(hours, minutes) {
	return hours * 3600 + minutes * 60; 
}

function convert(hours, minutes) {
	var hour = hours * 3600;
	var min = minutes * 60;
	return hour + min;	
}

const convert = (hours, minutes) => hours * 3600 + minutes * 60

// 30. Create a function that returns the total number of parameters passed in.

// #White - numberArgs(10, 20, 30, 40, 50) ➞ 5

function numberArgs() {
	return arguments.length;
}

function numberArgs(whatever) {
	return arguments.length;
}

function numberArgs(... a) {
	return (a||[]).length;
}

const numberArgs = (...args) => args.length;


// 31. Create a function that returns the ASCII value of the passed in character.

// #White - ctoa("m") ➞ 109

function ctoa(c) {
	return c.codePointAt();
}

const ctoa = char => char.charCodeAt(0);


// 32. Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// #White - 
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

function cityFacts(city) {
	let name = city.name; 
	let population = city.population;
	let continent = city.continent;
	return name + ' has a population of ' + population + ' and is situated in ' + continent;
}

function cityFacts(city) {
	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

const cityFacts = (city) => {
	return city.name + " has a population of " + city.population + " and is situated in " + city.continent;
}

function cityFacts(city) {
	let {name, population ,continent}=city;
	return `${name} has a population of ${population} and is situated in ${continent}`
}


// 33. Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

// #Yellow / Chaining - formatDate("11/12/2019") ➞ "20191211"

function formatDate(date) {
	return date.split('/').reverse().join('')
	}

function formatDate(date) {
	const [month, day, year] = date.split("/")
	return `${year}${day}${month}`
}

let formatDate = date => date.split('/').reverse().join('');

function formatDate(date) {
	let newDate = [];
	date = date.split('/');
	newDate.push(date[2], date[1], date[0]);
	return newDate.join('');
}


// 34. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// 1. Total number of slices. 2. Number of recipients. 3. How many slices each person gets.

// #White - equalSlices(11, 5, 2) ➞ true
// 5 people x 2 slices each = 10 slices < 11 slices

function equalSlices(total, people, each) {
	return total >= people * each; 
}

function equalSlices(total, people, each) {
	if(people * each <= total) {
		return true;
	} else {
		return false;
	}
}


// 35. Create a function that returns the number of argument it was called with.

// #White - numArgs("foo", "bar") ➞ 2

function numArgs() {
	return arguments.length; 
}

function numArgs(...args) {
	return args.length;
}

const numArgs = (...args) => args.length; 

numArgs = (...a) => a.length || 0


// 36. Write a function that validates whether two strings are identical. Make it case insensitive.

// #White - match("hello", "hELLo") ➞ true

function match(s1, s2) {
	return s1.toLowerCase() == s2.toLowerCase()
}

function match(s1, s2) {
	if ( s1.toUpperCase() == s2.toUpperCase()) {
		return true;
	} else {
		return false;
	}
}

const match = (s1, s2) =>  s1.toLowerCase() === s2.toLowerCase();



// 37. There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// #White - 

function remainder(x, y) {
	return x % y
}

const remainder = (x, y) => x % y

// 38. Create a function that takes an array and a string as arguments and return the index of the string.

// #Yellow find_index(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

function find_index(arr, str) {
	return arr.indexOf(str); 
}

function find_index(arr, str) {
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == str){
			return i
		}
	}
}

function find_index(arr, str) {
	return arr.indexOf(str)
}

// 39. Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

// #White - stackBoxes(2) ➞ 4

function stackBoxes(n) {
	return Math.pow(n, 2)
}

function stackBoxes(n) {
	return n*n
}

function stackBoxes(n) {
	var stack = 0;
	for(let i = 0; i < n; i++){
		stack = stack + 2 * i + 1
	};
	return stack
}

// 40. toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.

// #White - toInt("532") ➞ 532

function toInt(str) {
	return parseInt(str)
}
function toStr(int) {
	return int.toString()
}

function toInt(str) {
	return Number(str)
}
function toStr(int) {
	return String(int)
}

const toInt = (str) => parseInt(str);
const toStr = (int) => int.toString();


// 41. Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

// #White - negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]

function negate(arr) {
	return arr.map(value => -value)
}

negate = arr => {
	let ret = [];
	for(let item of arr){
		ret.push(-item);
	}
	return ret;
}

function negate(arr) {
	for(let i = 0; i < arr.length; i++) {
		arr[i] = -arr[i];
	}
	return arr;
}

// 42. In this challenge, you must verify the equality of two different given parameters: a and b.

// White - checkEquality(1, true) ➞ false
// A number and a boolean: their type is different


function checkEquality(a, b) {
  return a === b ? true : false;
}

const checkEquality = (a, b) => a === b;

function checkEquality(a, b) {
  return a === b;
}

function checkEquality(a, b) {
  if (a == "undefined" || a == "null" || a == "NaN")
		return false

  if (b == "undefined" || b == "null" || b == "NaN")
		return false
	
	if ((typeof a == typeof b) && (a == b))
		return true
	else
		return false
}

// 43. Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

// #White - isInRange(4, { min: 0, max: 5 }) ➞ true

function isInRange(num, range) {
	if (num >= range.min && num <= range.max) {
		return true;
	} else {
		return false;
	}
}

function isInRange(num, range) {
	return num >= range.min && num <= range.max;
}

const isInRange = (num, range) => num >= range.min && num <= range.max;

function isInRange(num, range) {
	return (num <= range.max && num >= range.min) ? true : false
}


// 44. Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string.

// #White - intOrString(9843532) ➞ "int"

function intOrString(param) {
	if (Number.isInteger(param)) {
		return 'int'
	} else {
		return 'str'
	}
}

function intOrString(param) {
	if (typeof param === 'number' ){
		return 'int'
	} else {
		return 'str'
	}
}

function intOrString(param) {
	return typeof param === 'number' ? 'int' : 'str';
}

const intOrString = (param) => typeof param === "string" ? "str" : "int"

// 45. Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".

/*

If the number is a multiple of 3 the output should be "Fizz".
If the number given is 5 the output should be "Buzz".
If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.

*/

/*

Yellow - 

FizzBuzz(3) ➞ "Fizz"

FizzBuzz(5) ➞ "Buzz"

FizzBuzz(15) ➞ "FizzBuzz"

FizzBuzz(4) ➞ 4

*/

function FizzBuzz(num) {
	if ( num % 15 === 0 ) {
		return 'FizzBuzz'
	} else if ( num % 3 === 0 ) {
		return 'Fizz';
	} else if ( num % 5 === 0) {
		return 'Buzz';
	} else {
		return num.toString();
	}
}

function FizzBuzz(num) {
	if (num % 3 == 0 && num % 5 == 0) {
		return 'FizzBuzz';
	} else if (num % 3 == 0) {
		return 'Fizz';
	} else if (num % 5 == 0) {
		return 'Buzz';
	} else {
		return `${num}`;
	}
}

function FizzBuzz(num) {
	return num % 15 === 0 ? 'FizzBuzz' 
	     : num % 5 === 0 ? 'Buzz' 
	     : num % 3 === 0 ? 'Fizz' 
	     : String(num);
}

function FizzBuzz(num) {
	return (num%3?'':'Fizz')+(num%5?'':'Buzz')||`${num}`;
}

function FizzBuzz(num) {
	return ((num%3==0)&(num%5==0))?'FizzBuzz':((num%3==0)?'Fizz':((num%5==0)?'Buzz':String(num)))
}

// 46. Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// isPlural("changes") ➞ true

function isPlural(word) {
	if (word.endsWith('s')) {
		return true
	} else {
		return false
	}
}

function isPlural(word) {
	return word.endsWith("s");
}

function isPlural(word) {
	return word[word.length - 1] == 's';
}

function isPlural(word) {
	return (word.charAt(word.length - 1) === 's')
}

const isPlural = word => word.endsWith('s');

let isPlural = w => /s$/i.test(w)


// 47. Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.

// White - operation(15, 9) ➞ "added"


function operation(num1, num2) {
	if (num1 + num2 == 24) {
		return 'added'
	} else if (num1 - num2 == 24) {
		return 'subtracted'
	} else if (num1 * num2 == 24) {
		return 'multiplied'
	} else if (num1 / num2  == 24) {
		return 'divided'
	} else {
		return null
	}
}

const operation=(a,b)=>
	a+b==24?"added"
	:a-b==24?"subtracted"
	:a*b==24?"multiplied"
	:a/b==24?"divided"
	:null;

function operation(num1, num2) {
	return num1 / num2 === 24 ? 'divided' : num1 * num2 === 24 ? 'multiplied' : num1 - num2 === 24 ? 'subtracted' : num1 + num2 === 24 ? 'added' : null
}