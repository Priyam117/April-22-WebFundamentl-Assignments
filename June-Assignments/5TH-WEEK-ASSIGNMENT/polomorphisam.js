//  in polimorphisam we can see the diffrent behaviour of single object. in this
//  example area() and Perimeter() have diffrent behavior in every class.

class Shape {
    constructor() {}

    area() {
        return 0;
    }
    perimeter() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.radious = r;
    }
    area() {
        return Math.PI * this.r ** 2;

    }
    perimeter() {
        return Math.PI * this.r * 2;

    }
}
class Rectangle extends Shape {
    constructor(l, b) {
        super();
        this.length = l;
        this.breadth = b;

    }
    area() {
        console.log(this.length * this.breadth);
    }
    perimeter() {
        return 2 * (this.length + this.breadth);
    }
}