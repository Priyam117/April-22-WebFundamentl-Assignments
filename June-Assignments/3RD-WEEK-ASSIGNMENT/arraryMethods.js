// filter(): 

var num = [112, 35, 42, 28, 60, 24];
var filteredNum = num.filter(function(element, index) {
    return element < 30 && element > 20;
})
console.log(filteredNum);