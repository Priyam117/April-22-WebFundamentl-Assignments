let num1 = 5;
let num2 = 3;

function sumOfTwoNumber(a, b) {
    return a + b;

}
let result = sumOfTwoNumber(num1, num2);
console.log(result + 5); //   5 added on result i.e. return is using

function sumOfThreeNumber(a, b, c = 4) {
    console.log(a + b + c);
}
sumOfThreeNumber(5, 8);