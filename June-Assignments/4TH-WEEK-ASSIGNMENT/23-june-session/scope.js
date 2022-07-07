function fn() {
    var a = 10; // var supports function sccope 
    if (a > 5) {
        let b = 6; // let and const supports block scope
        console.log(a + b);
        console.log(a);
    }
    console.log(a);
    console.log(b)

    function fn1() {
        let c = 23; // it can be access only within block scope
        console.log(a + c);
        console.log(c);
    }
    fn1();
}
fn();