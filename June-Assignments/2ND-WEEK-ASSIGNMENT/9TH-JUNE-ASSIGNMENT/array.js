let arr = [1, 25, "chetan", { city: "satna" }];
console.log(arr[2], arr.length);
for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i]);
}

// print the array in reverse order
for (let y = (arr.length - 1); y >= 0; y--) {
    console.log(arr[y]);
}

// print all the even number of an array

let array = [1, 6, 11, 16, 24, 8, 9];

function checkEvenNum(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }

}
checkEvenNum(array);


// write a program to print even index element of an array
function printEvenIndex(arr) {
    for (let i = 0; i < array.length; i = i + 2) {
        if (i % 2 === 0) {
            console.log(arr[i]);
        }
    }
}
printEvenIndex(array);