// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0)
			return false;
		return num > 1;
	}
}

let factors = [];
let d3 = 2;
let n3 = 600851475143;

while (n3 > 2) {
	while (n3 % d3 != 0) {
		d3++;
		while (!isPrime(d3)) {
			d3++;
		}
	}
	factors.push(d3);
	n3 = (n3 / d3);
}

document.getElementById("problem3").innerHTML = factors[factors.length - 1];