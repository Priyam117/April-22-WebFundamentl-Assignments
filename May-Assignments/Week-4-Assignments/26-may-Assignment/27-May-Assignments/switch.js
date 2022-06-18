// Ternary Operatoe 

let num = 12;
(num > 50) ? console.log("NUm is greater "): console.log(" num is smaller ");

// Switch Statement 
let pet = "cat";
switch (pet) {
    case "cat":
        console.log("i have a cat");
        break;
    case "monkey":
        console.log("i have a monkey");
        break;
    case "parrot":
        console.log("I have a parrot ")
    default:
        console.log("I have mothing ");
        break;

}


let n = 3;
switch (n) {
    case 1:
        console.log("I");
        break;
    case 2:
        console.log("II");
        break;
    case 3:
        console.log("III");
        break;
    case 4:
        console.log("IV");
        break;
    case 5:
        console.log("V");
        break;
    default:
        console.log("there is between 1 to 5");
        break;
}



// Making a calculator  using switch case 


let operator = '*';
let num1 = "20";
let num2 = "20no";
let result;
switch (operator) {
    case '*':
        result = num1 * num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '+':
        result = num1 + num2;
        break;
    case '/':
        result = num1 / num2;
        break;

}
console.log(result);