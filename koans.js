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