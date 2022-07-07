class Mobile {
    name;
    price;
    rating;
    qty;
    totalAmt;

    constructor() {
        this.name = ''
        this.price = 0
        this.rating = 0
        this.qty = 0
        this.totalAmt = 0;
    }


    display() {
        console.log(this.name, this.price, this.rating);
    }

    totalAmount() {
        console.log(this.qty * this.price);
    }

}

var iphone = new Mobile();
iphone.name = "Iphone11pro";
iphone.price = 110000;
iphone.rating = 4.8;
iphone.qty = 4;
iphone.display();
iphone.totalAmount();


var Samsung = new Mobile();
Samsung.name = "Galaxy";
Samsung.price = 140000;
Samsung.rating = 4.8;
Samsung.qty = 4
Samsung.display();
Samsung.totalAmount();