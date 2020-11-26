const water = 15.678;
const whisky = 123.965;
const coffe = 90.2345;
const amount = 500;
const random = (Math.random() * 100).toFixed();



console.log(Math.max(water,whisky,coffe));
console.log(Math.min(water,whisky,coffe));
const sumDrinks = water + whisky + coffe;
console.log(sumDrinks);
const sumRound = Math.floor(water) + Math.floor(whisky) + Math.floor(coffe);
console.log(sumRound);
console.log(Math.ceil(sumRound/100)*100);
console.log(sumRound % 2 === 0);
console.log(amount - sumDrinks);
console.log((sumDrinks / 3).toFixed(2));

const discount = sumRound * random / 100;
console.log((sumRound / 2 - discount).toFixed(2));
 
