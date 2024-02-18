const { name, openingHours, Catories } = resturant;

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//default valueif not exist in main value
const { menu = [], starterMenu: starters = [] } = restaurant;

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
