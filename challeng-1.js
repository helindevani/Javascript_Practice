const massmark = 78;
const heightmark = 1.69;
const massjohn = 92;
const heightjohn = 1.95;

const BMIMark = massmark / heightmark ** 2;

const BMIjohn = massjohn / (heightjohn * heightjohn);

const markhigherBMI = BMIMark > BMIjohn;

console.log(BMIMark, BMIjohn, markhigherBMI);
