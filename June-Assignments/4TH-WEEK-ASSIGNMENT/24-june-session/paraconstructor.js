class Mobile {
    brandname;
    modelname;
    price;

    constructor(x, y, z) {
        this.brandname = x;
        this.modelname = y;
        this.price = z;

    }

    display() {
        console.log(this.brandname, this.modelname, this.price);
    }
}
var oneplus = new Mobile("oneplus", "oneplus9pro", 70000);
oneplus.display()
var samsung = new Mobile("Samsung", "Galaxy note 10", 90000);
samsung.display();