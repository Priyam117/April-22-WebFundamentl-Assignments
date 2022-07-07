class A1 {
    fname = "Priyam"

    display() {
        console.log(this.fname);
    }
}

class B1 extends A1 {
    lname = "Gautam";
    print() {
        console.log(this.lname);
    }
}
var a11 = new B1()
a11.display();
a11.print();