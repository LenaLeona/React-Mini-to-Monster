let nums = [1,2,3];
let doubleNums = []; //init to avoid mutating nums

/**
 * Traditional for loop
 */
for (let i = 0; i < nums.length; i++){
  doubleNums.push(nums[i] * 2);
}


/**
 * map helper() 
 */
//inside function() always单数， same as forEach
let doubled = nums.map(function(num) {
  return num * 2;
});
doubled;
doubleNums;

/**
 * e.g.2
 */
let cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];

let prices = cars.map(function(car) {
  return car.price;
});

prices;


/**
 * e.g.3
 */
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
    return trip.distance / trip.time;
});

speeds;

//写法2
// var speeds = [];
// trips.map(element =>{
//     return speeds.push(element.distance/element.time);
// })

/**
 * e.g. 4
 */
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
    return image.height;
});

heights;

//写法2
// var speeds = [];
// trips.map(element =>{
//     return speeds.push(element.distance/element.time);
// });