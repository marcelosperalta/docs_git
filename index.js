// Create a function average which accepts any amount of numbers and returns their mean average.

function average (...args) {
    let array = args;
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    result = result / array.length;
    return `The function has ${array.length} arguments and the average is ${result.toFixed(2)}`;
}
console.log(average(5, 6, 7, 10, 2, 5, 7, 35));
