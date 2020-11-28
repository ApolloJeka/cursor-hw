let numberOne = +prompt ('Enter number ONE!');
let numberTwo = +prompt ('Enter number TWO!');
let sum = 0;

while (true) {
    numberOne = Math.trunc(numberOne);
    if(isNaN(numberOne)){
        numberOne = +prompt('Enter a integer');
        continue;
    }
    break;
}


while (true) {
    numberTwo = Math.trunc(numberTwo);
    if(isNaN(numberTwo)) {
      numberTwo = +prompt('Enter a integer');
        continue;
    }
    if(numberTwo <= numberOne){
        numberTwo = +prompt('1st number must be bigger');
        continue;
    }
    break;
}


// Чи можна якось написати перевірку на число для обох значеннь в одному й тому ж циклі?

const evenNumbers = confirm('skip even numbers?');
    for (let i = numberOne; i <= numberTwo; i++) {
        if (i % 2 === 0 && evenNumbers === false || i % 2 === 1){
            sum += i;
        }
    }
    

    console.log(numberOne);
    console.log(numberTwo);
    console.log('Sum = ' + sum);