class Student { //class name must be start with Capital letter. Inside class we can not use var , let and const
    id;
    name
    city; // these are properties

    constructor() { // coonstrutor is used for initialization 
        this.id = 101;
        this.name = "Gautam"
        this.city = "hyderabad"
    }

    display() { // dosplay is method we ccan create any method

        console.log(this.id, this.name, this.city);
    }

}
var s1 = new Student(); // 1. "new" is special operator. 
s1.id = 1;
s1.name = "Rachit Gupta";
s1.city = "Pune";
s1.display();


let s2 = new Student();
s2.id = 2;
s2.name = "Priyam Gautam";
s2.city = "Bengluru";
s2.display();