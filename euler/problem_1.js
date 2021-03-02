// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

let sum = 0;

function isMultiple(num) {
	if (num % 3 == 0 || num % 5 == 0)
		return true;
	return false;
}

for (let i = 1; i < 1000; i++) {
	if (isMultiple(i))
		sum += i;
}

document.getElementById("problem1").innerHTML = sum;
