"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c

	if (d < 0) {
		return [];
	} else if (d === 0) {
		arr.push(-b / (2 * a));
		return arr;
	} else {
		let sqrtD = Math.sqrt(d);
		arr.push((-b + sqrtD) / (2 * a));
		arr.push((-b - sqrtD) / (2 * a));
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    return false;
  }

  let monthlyRate = percent / 100 / 12;
  let creditBody = amount - contribution;

  if (creditBody <= 0) return 0;

  let payment = creditBody * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** countMonths - 1)));
  let total = payment * countMonths;

  return Number(total.toFixed(2));
}
