// function expression : when we create a function and assign it inside a variable is called function expression



let sayHye = function() {
    console.log("this is function expression");
}
sayHye() // function invokation
console.log(sayHye());



function hello() {
    console.log("hello");

}
hello()
console.log(hello());



// copy the value of function to variable 

let func = sayHye;
func();
console.log(func);


let result = sum(3, 4); // function declearation
console.log(result);

function sum(a, b) {
    return a + b;
}


let sum2 = function(a, b) {
    return a + b;
}
let result2 = sum2(5, 4);
console.log(result2);


let age = 19;
let isEligible;

// if (age > 18) {
//     isEligible();

//     function isEligible() {
//         console.log("yes");
//     }
//     isEligible();
// } else {
//     isEligible();

//     function isEligible() {
//         console.log("no");
//     }
//     isEligible();
// }

if (age > 18) {
    isEligible = function() {
        console.log("yes");

    }
    isEligible();
} else {
    isEligible = function() {
        console.log("no");
    }
    isEligible();
}