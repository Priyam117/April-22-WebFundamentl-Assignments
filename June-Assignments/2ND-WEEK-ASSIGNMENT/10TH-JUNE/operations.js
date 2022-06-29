// pop(): remove the last element and return it

let fruitBasket = ["banana", "apple", "grapes", "mango", "orange"];
console.log(fruitBasket.pop());
console.log(fruitBasket);

// push(): it add the element from end


fruitBasket.push("pear");
console.log(fruitBasket);
fruitBasket[fruitBasket.length] = "guava";
console.log(fruitBasket);


// unshift(): it is add the element at begining

fruitBasket.unshift("strobary", "lichi", "watermelon");
console.log(fruitBasket);

// shift(): it remove the first element from begining and returns it

fruitBasket.shift();
console.log(fruitBasket);

let num = [5, 4, 6, 3, 2];

let sum = 0;

function sumOfAllElementInArray(num) {


    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];

    }
    num.push(sum);
    console.log(num);
}
sumOfAllElementInArray(num);