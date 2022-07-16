function one() {
    console.log("print 1");

}

function two(call_back) {
    console.log("print 2");
    call_back();
}
two(one);

let order = (call_production) => {
    console.log('order is placed production can start');
    call_production(); // callback 

}
let production = () => {
    console.log("production has started");
}
order(production);