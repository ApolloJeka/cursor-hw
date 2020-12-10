 //Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
 getRandomArray = (length, max, min) => [...new Array(length)]
    .map(() => Math.round(Math.random()* (max + 1 - min) + min));


console.log(getRandomArray(15,1,100));



//Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів
function getAverage(arr) {
    let result = arr.reduce( (res, i) => {
        return +res + +i;
    })
    return result / arr.length;
}

console.log(getAverage([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));



//Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів
function getMedian(arr) {
    let copy = [] ; 
    let sum = 0; 
    let half = arr.length / 2;
    copy = arr.slice(0);
    copy.sort( (a,b) => a -b);
    sum += +copy[Math.ceil(half) -1 ];
    sum += +copy[Math.floor(half)];
    return sum/2;
}
console.log(getMedian([1, 2, 3, 4]));

// Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
function getDividedByFive(array) {
    return array.filter(function(a) {
        return !(a % 5);
    })
}
 console.log(getDividedByFive([37, 45, 56, 25, 74]));


 

 //Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
function countPositiveNumbers(array) {
    return  result = array.filter(i => i >= 0).length;
    }

console.log(countPositiveNumbers([1, -2, 3, -4, -5, 6]));


function filterEvenNumbers(array) {
   return array.filter( number => number%2 );
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));