//Задача 1
function getArrayParams(...arr) {
	if (arr.length === 0) {
		return {
			min: null,
			max: null,
			avg: null
		};
	}
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let sum = arr.reduce((acc, num) => acc + num, 0);

	let avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}



//Задача 2

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	return arr.reduce((sum, current) => sum + current, 0)

}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	return max - min;

}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}



function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let num of arr) {
		if (num % 2 === 0) {
			sumEvenElement += num;
			countEvenElement++;
		}
	}
	return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}


// Задача 3
function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let arr of arrOfArr) {
		const result = func(...arr);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}


function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	return arr.reduce((sum, val) => sum + val, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEven = 0;
	let sumOdd = 0;
	for (let num of arr) {
		if (num % 2 === 0) sumEven += num;
		else sumOdd += num;
	}
	return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEven = 0;
	let countEven = 0;
	for (let num of arr) {
		if (num % 2 === 0) {
			sumEven += num;
			countEven++;
		}
	}
	return countEven === 0 ? 0 : sumEven / countEven;
}
