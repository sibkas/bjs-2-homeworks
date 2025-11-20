//Задача 1
function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: null, max: null, avg:null };
}
let min = Math.min(...arr);
let max = Math.max(...arr);
let sum = arr.reduce((acc, num) => acc + num, 0);

let avg = Number((sum / arr.length).toFixed(2));
return { min: min, max: max, avg: avg };
}

console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }

//Задача 2

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
