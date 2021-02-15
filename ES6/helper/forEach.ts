/**
 * e.g.1
 */
let colors = ['red', 'blue', 'green'];

// traditional for loop
for (let i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

//for each
//anonomous func (in forEach()) get called one time for each element in arr
//naming convention: colors -> color
colors.forEach(function(color) {
  console.log(color);
})

/**
 * e.g.2
 */
let numbers = [1,2,3,4,5];
let sum = 0;
numbers.forEach(function(number){
  sum += number;
});
sum;

//写法2： 另拆一个helper()
function add(number){
  sum += number;
}
numbers.forEach(add);
sum;


/**
 * e.g.3
 */
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
    areas.push(image.height * image.width);
});