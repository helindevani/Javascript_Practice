//SPREAD, beacause on RIGHT side of=
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of=
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//functions
const add = function (...numbers) {
  console.log(numbers);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
