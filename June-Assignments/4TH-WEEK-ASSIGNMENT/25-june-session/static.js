class Products {
    brandname;
    price;
    qty;
    static category; //static property

    constructor(x, y, z, a) {
        this.brandname = x;
        this.price = y;
        this.qty = z;
        Products.category = a;

    }
    displayDetails() {
        console.log(this.brandname, Products.category);
    }
    totalAmount() {
        console.log(this.qty * this.price);
    }
}
var phone = new Products("Realme9pro", 20000, 2, "electronics")
phone.displayDetails();
phone.totalAmount();