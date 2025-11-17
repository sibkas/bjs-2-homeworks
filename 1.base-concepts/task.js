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
  let p = Number(percent);
  let c = Number(contribution);
  let a = Number(amount);
  let n = Number(countMonths);

  if ([p, c, a, n].some(v => isNaN(v) || v < 0)) return false;

  let monthlyRate = p / 100 / 12;
  let creditBody = a - c;

  if (creditBody <= 0) return 0;

  let payment;
  if (monthlyRate === 0) {
    payment = creditBody / n; // при 0% процентах просто равные платежи
  } else {
    payment = creditBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, n) - 1)));
  }
  let total = payment * n;

  return Number(total.toFixed(2));
}
