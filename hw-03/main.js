// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.

function getDigit(number){

    let n = number;
    let max = 0;
      do {
        if ( (n % 10) > max ) {
          max = n % 10;
        }
        n = ( n - (n % 10)) / 10;
      }
        while ( n > 0) {}
      return max;
  }
  console.log(getDigit(21439581354358));

//Створити функцію, яка форматує ім'я, роблячи першу букву великою.

const name = 'jekiCH';

const capitalize = name => name[0].toUpperCase() + name.slice(1).toLowerCase();

console.log(capitalize(name));


//Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M

const getRandomNumber = (min, max) => Math.floor((Math.random() * (max - min) + min));
  console.log(getRandomNumber(1,10));

  //Створити функцію, яка рахує скільки разів певна буква повторюється в слові
const str = 'bababafdsf';
function countLatter(str, char) {
    return str.split(char).length - 1;
}

console.log(countLatter(str, 'f'));


//Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.

const s = 'бісквіт був дуже ніжним';

function deleteDuplicateLetter (s) {
  let result = '';
    for (let i = 0; i < s.length; i++) {
      if (s.lastIndexOf(s[i]) == s.indexOf(s[i])) {
        result += s[i];
      }
    }
    return result;
}

console.log(deleteDuplicateLetter(s));

// Створіть функцію, яка перевіряє, чи є слово паліндромом

function isPalindrom (word) {
    return word == word.split('').reverse().join('');
  }

  console.log(isPalindrom('топот'));