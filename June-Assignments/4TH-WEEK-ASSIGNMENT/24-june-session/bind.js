var obj1 = {
    c: 100
}
var obj2 = {
    c: 10
}
var obj3 = {
    c: 1000
}

function fn(a, b) {
    var x = a;
    var y = b;
    console.log(x + y + this.c);
}
var k = fn.bind(obj1, 2, 2);
k();
var kp = fn.bind(obj2, 3, 8);
kp();
var fn = fn.bind(obj3);
fn.bind(obj3, 20, 30)();