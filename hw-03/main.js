// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.

function maxDigit(n){

    let a = n.toString();
    let b = a.split('');

    return Math.max.apply(null, b);
  }
  console.log(maxDigit(21439581354358));

//Створити функцію, яка форматує ім'я, роблячи першу букву великою.

let name = 'jekiCH';

function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(capitalize(name));


//Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M

function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  console.log(random(1,10));

  //Створити функцію, яка рахує скільки разів певна буква повторюється в слові
let str = 'bababafdsf';
function countLatter(str, char) {
    return str.split(char).length - 1;
}

console.log(countLatter(str, 'f'));


//Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.

let s = 'бісквіт був дуже ніжним';

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