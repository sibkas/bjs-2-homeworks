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
