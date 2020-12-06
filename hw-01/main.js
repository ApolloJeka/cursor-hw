const WATER = 15.678;
const WHISKY = 123.965;
const COFFE= 90.2345;
const AMOUNT = 500;
const random = (Math.random() * 100).toFixed();



console.log(Math.max(WATER,WHISKY,COFFE));
console.log(Math.min(WATER,WHISKY,COFFE));
const sumDrinks = WATER + WHISKY + COFFE;
console.log(sumDrinks);
const sumRound = Math.floor(WATER) + Math.floor(WHISKY) + Math.floor(COFFE);
console.log(sumRound);
console.log(Math.ceil(sumRound/100)*100);
console.log(sumRound % 2 === 0);
console.log(amount - sumDrinks);
console.log((sumDrinks / 3).toFixed(2));

const discount = sumRound * random / 100;
console.log((sumRound / 2 - discount).toFixed(2));
 
