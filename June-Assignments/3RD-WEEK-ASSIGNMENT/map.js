// var data = [20, 30, 40, 50];

// var newArray = data.map(function(element, index) {
//     console.log(element, index)
//     return element * 2;
// })
// console.log(newArray);

// var num = [21, 42, 63, 84, 95, 52];
// var newNum = num.filter(function(element) {
//     return element % 2 === 0;
// })
// console.log(newNum);



let arr = [20, 23, 17, 40, 42];
let newData = arr.map(function(ele) {
    if (ele % 2 === 0) {
        return ele + 10;
    } else {
        return ele * 10;
    }
})
console.log(newData);