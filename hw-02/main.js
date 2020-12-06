let numberOne = +prompt ('Введіть перше число');
let numberTwo = +prompt ('Введіть друге число');
let sum = 0;

while (true) {
    numberOne = Math.trunc(numberOne);
    if(isNaN(numberOne)){
        numberOne = +prompt('Данні повинні бути числом');
        continue;
    }
    break;
}


while (true) {
    numberTwo = Math.trunc(numberTwo);
    if(isNaN(numberTwo)) {
      numberTwo = +prompt('Данні повинні бути числом');
        continue;
    }
    if(numberTwo <= numberOne){
        numberTwo = +prompt('Перше число повинно бути більше');
        continue;
    }
    break;
}


// Чи можна якось написати перевірку на число для обох значеннь в одному й тому ж циклі?

const evenNumbers = confirm('Пропускти парні числа?');
    for (let i = numberOne; i <= numberTwo; i++) {
        if (i % 2 === 0 && !evenNumbers || i % 2 === 1){
            sum += i;
        }
    }
    

    console.log(numberOne);
    console.log(numberTwo);
    console.log('Sum = ' + sum);