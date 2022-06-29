// let arr = [10,20,30,40,50];
// let sum = 0;
// function sumOfAllElement(){
//   for (let i=0;i<=arr.length-1;i++){
//   sum=sum+arr[i];}
//   console.log(sum);
// }
// sumOfAllElement(arr);
// // console.log(result);


// for(let i=arr.length;i>=0;i--){
//   // console.log(arr[i]);

// }
// arr[arr.pop()];
// console.log(arr);
// arr[arr.push("60")];
// console.log(arr);

// arr[arr.shift()];
// console.log(arr);

// arr[0]=10;
// arr[1]=20;
// arr[2]=30;
// console.log(arr);

// arr[arr.unshift("110","120","130")];
// console.log(arr);

// arr[3]="150";
// console.log(arr);



// let arr=[10,20,30,40,50];
// arr[arr.shift()];
// arr[arr.shift()];
// arr[arr.shift()];
// console.log(arr);

let arr = [10, 20, 30, 40, 50, 60];
let middle = parseInt((0 + (arr.length - 1) / 2));
console.log(middle);
for (let i = middle; i < (arr.length - 1); i++) {
    arr[i] = arr[i + 1];


}
arr.pop();
console.log(arr);