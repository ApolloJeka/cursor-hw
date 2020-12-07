let numberOne = +prompt ('Введіть число від якого ми будемо складати');

let sum = 0;

while (!Number.isInteger(numberOne) || !numberOne) {
       numberOne = +prompt('Данні повинні бути числом');
}

let numberTwo = +prompt ('Введіть число до якого ми будемо складати');

while (!Number.isInteger(numberTwo) || !numberTwo) {
    numberTwo = +prompt('Данні повинні бути числом');
    }
    if(numberTwo <= numberOne){
        numberTwo = +prompt('Перше число повинно бути більшим');

}

const evenNumbers = confirm('Пропускти парні числа?');
    for (let i = numberOne; i <= numberTwo; i++) {
        if (i % 2 === 0 && !evenNumbers || i % 2 === 1){
            sum += i;
        }
    }
    

    console.log(numberOne);
    console.log(numberTwo);
    console.log('Sum = ' + sum);