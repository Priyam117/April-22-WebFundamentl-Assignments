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
fn.call(obj1, 20, 30);
fn.call(obj2, 40, 50);
fn.call(obj3, 100, 200)